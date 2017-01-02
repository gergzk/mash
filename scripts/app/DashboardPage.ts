class DashboardPage implements IPage {
    load(contentDiv: HTMLDivElement): Promise<void> {
        return MashGlobal.getDataSource().getUserData().then((entries: IUserEntry[]) => {
            this._buildPage(contentDiv, entries);
        }, (err: any) => {
            window.alert("Something bad happened: " + err);
            throw err;
        }).then(() => {
            return;
        });
    }

    unload(): Promise<void> {
        return Promise.resolve(null);
    }

    private _buildPage(contentDiv: HTMLDivElement, entries: IUserEntry[]) {
        contentDiv.innerHTML = "<div class=\"header\">History</div>";
        let shade = true;
        entries.forEach((entry: IUserEntry) => {
            contentDiv.appendChild(this._createLine(entry, shade));
            shade = !shade;
        });
    }

    private _createLine(entry: IUserEntry, shade: boolean): HTMLDivElement {
        let line = document.createElement("div");
        line.className = "line shade " + (shade ? "yes" : "no");

        // first the img
        let imgDiv = document.createElement("div");
        imgDiv.className = "block image";
        if (entry.whiskey.imageUri) {
            let img = document.createElement("img");
            img.className = "line";
            img.src = entry.whiskey.imageUri;
            imgDiv.appendChild(img);
        } else {
            imgDiv.textContent = "[IMG]";
        }
        line.appendChild(imgDiv);

        // the the score
        let scoreDiv = document.createElement("div");
        scoreDiv.className = "block score scale";
        scoreDiv.textContent = "" + entry.rating;
        line.appendChild(scoreDiv);

        let descriptionDiv = document.createElement("div");
        descriptionDiv.className = "block description scale";
        descriptionDiv.innerHTML = "<strong><u>" + entry.whiskey.name + "</u></strong><br/>" + entry.whiskey.description;
        line.appendChild(descriptionDiv);

        let chartDiv = document.createElement("div");
        chartDiv.className = "block chart scale";
        let chartCanvas = document.createElement("canvas");
        chartCanvas.width = 80; // this gets pretty hardcoded, huh?
        chartCanvas.height = 80;
        chartCanvas.className = "chart scale";
        chartDiv.appendChild(chartCanvas);
        this._drawChart(chartCanvas, entry.notes);
        line.appendChild(chartDiv);

        return line;
    }

    private _drawChart(canvas: HTMLCanvasElement, notes: INotes): void {
        if (!notes || !notes.grid) {
            this._sketchPlaceholder(canvas);
        } else {
            this._drawGrid(canvas, notes.grid);
        }
    }
    private _drawGrid(canvas: HTMLCanvasElement, grid: ITastingGrid): void {
        let ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#444444";
        ctx.moveTo(2, 40);
        ctx.lineTo(78, 40);
        ctx.moveTo(40, 2);
        ctx.lineTo(40, 78);
        ctx.stroke();
        ctx.closePath();

        // and then put a dot at the grid spot
        let x = 2 + 76 * grid.rich;
        let y = 2 + 76 * (1 - grid.smoky);

        let red = Math.round(255 - (64 * grid.smoky));
        let green = Math.round(255 - 64 * (grid.smoky + grid.rich));
        let blue = Math.round(255 - (128 * grid.smoky));

        let color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    }
    private _sketchPlaceholder(canvas: HTMLCanvasElement): void {
        let ctx = canvas.getContext("2d");
        let grad = ctx.createLinearGradient(0, 76, 76, 0);
        grad.addColorStop(0, "#ababab");
        grad.addColorStop(1, "#333333");
        ctx.fillStyle = grad;
        ctx.fillRect(2, 2, 76, 76);
    }
}