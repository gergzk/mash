// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var MashCordova;
(function (MashCordova) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            var button = document.getElementById("go");
            button.onclick = function () {
                var userbox = document.getElementById("username");
                var username = userbox.textContent;
                var contentDiv = document.getElementById("appContainer");
                MashGlobal.setUserName(username);
                MashGlobal.pages("dashboard").load(contentDiv, username);
            };
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = MashCordova.Application || (MashCordova.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(MashCordova || (MashCordova = {}));
var MashGlobal = (function () {
    function MashGlobal() {
    }
    MashGlobal.pages = function (key) {
        var pages = {
            dashboard: new DashboardPage(),
        };
        MashGlobal.pages = function (key) {
            return pages[key];
        };
        return pages[key];
    };
    ;
    MashGlobal.getDataSource = function () {
        var ds = new MockDataSource(MashGlobal._username);
        MashGlobal.getDataSource = function () {
            return ds;
        };
        return ds;
    };
    MashGlobal.setUserName = function (username) {
        MashGlobal._username = username;
    };
    return MashGlobal;
}());
var MockDataSource = (function () {
    function MockDataSource(username) {
        this._username = username;
    }
    MockDataSource.prototype.getWhiskeys = function (name) {
        // find matching whiskey
        var matches = Samples.whiskeys.filter(function (whiskey) { return whiskey.name.toLowerCase().indexOf(name) >= 0; });
        return Promise.resolve(matches);
    };
    MockDataSource.prototype.getUserData = function () {
        return Promise.resolve(Samples.userEntries[this._username.toLowerCase()]);
    };
    return MockDataSource;
}());
;
var Samples = (function () {
    function Samples() {
    }
    Samples.whiskeys = [
        {
            name: "Talisker 10",
            age: 10,
            description: "Youngest variant of Talisker",
            id: "id1",
            imageUri: "images/talisker-10-bottle-only.jpg",
            origin: null,
            proof: 91.6,
            singleMalt: true
        }, {
            name: "Talisker Storm",
            age: null,
            description: "A blend of different ages of Talisker",
            id: "id2",
            imageUri: null,
            origin: null,
            proof: 91.6,
            singleMalt: false
        }, {
            name: "Talisker 18",
            age: 18,
            description: "A more mature Talisker",
            id: "id3",
            imageUri: null,
            origin: null,
            proof: 91.6,
            singleMalt: true
        }, {
            name: "Talisker 25",
            age: 25,
            description: "The longest age Talisker on the market",
            id: "id4",
            imageUri: null,
            origin: null,
            proof: 91.6,
            singleMalt: true
        }, {
            name: "Caol Ila 12",
            age: 12,
            description: "Super smokey islay",
            id: "id5",
            imageUri: null,
            origin: null,
            proof: 96,
            singleMalt: true
        }, {
            name: "Oban 14",
            age: 14,
            description: "West highland scotch",
            id: "id6",
            imageUri: null,
            origin: null,
            proof: 96,
            singleMalt: true
        }, {
            name: "McClelland's",
            age: 10,
            description: "West highland scotch",
            id: "id7",
            imageUri: null,
            origin: null,
            proof: 80,
            singleMalt: true
        }, {
            name: "Dalwhinnie",
            age: 15,
            description: "The Gentle Spirit - A highland whisky from the Grampian Mountains",
            id: "id8",
            imageUri: null,
            origin: null,
            proof: 86,
            singleMalt: true
        }, {
            name: "The Hakushu",
            age: 12,
            description: "From the forests surrounding the Southern Japanese Alps",
            id: "id9",
            imageUri: null,
            origin: null,
            proof: 86,
            singleMalt: true
        }, {
            name: "The Yamazaki",
            age: 12,
            description: "From the oldest distillery in Japan",
            id: "id10",
            imageUri: null,
            origin: null,
            proof: 86,
            singleMalt: true
        }, {
            name: "Laphroaig Quarter Cask",
            age: 12,
            description: "Aged in smaller barrels for extra barrely goodness. This is super nice because it can age faster, and they can use several barrels.",
            id: "id11",
            imageUri: null,
            origin: null,
            proof: 90,
            singleMalt: true
        }
    ];
    Samples.userEntries = {
        gergely: [
            { whiskey: Samples.whiskeys[0], rating: 90, notes: { grid: { rich: .75, smoky: .75 } } },
            { whiskey: Samples.whiskeys[10], rating: 75, notes: { grid: { rich: .70, smoky: .60 } } },
            { whiskey: Samples.whiskeys[9], rating: 95, notes: { grid: { rich: .90, smoky: .40 } } },
            { whiskey: Samples.whiskeys[5], rating: 77, notes: { grid: { rich: .80, smoky: .50 } } },
        ],
        jacob: [
            { whiskey: Samples.whiskeys[0], rating: 80, notes: { grid: { rich: .75, smoky: .75 } } },
            { whiskey: Samples.whiskeys[10], rating: 92, notes: { grid: { rich: .65, smoky: .80 } } },
        ],
        marisa: [
            { whiskey: Samples.whiskeys[0], rating: 25, notes: null },
            { whiskey: Samples.whiskeys[6], rating: 10, notes: null },
        ]
    };
    return Samples;
}());
;
;
;
;
;
var DashboardPage = (function () {
    function DashboardPage() {
    }
    DashboardPage.prototype.load = function (contentDiv) {
        var _this = this;
        return MashGlobal.getDataSource().getUserData().then(function (entries) {
            _this._buildPage(contentDiv, entries);
        }, function (err) {
            window.alert("Something bad happened: " + err);
            throw err;
        }).then(function () {
            return;
        });
    };
    DashboardPage.prototype.unload = function () {
        return Promise.resolve(null);
    };
    DashboardPage.prototype._buildPage = function (contentDiv, entries) {
        var _this = this;
        contentDiv.innerHTML = "<div class=\"header\">History</div>";
        var shade = true;
        entries.forEach(function (entry) {
            contentDiv.appendChild(_this._createLine(entry, shade));
            shade = !shade;
        });
    };
    DashboardPage.prototype._createLine = function (entry, shade) {
        var line = document.createElement("div");
        line.className = "line shade " + (shade ? "yes" : "no");
        // first the img
        var imgDiv = document.createElement("div");
        imgDiv.className = "block image";
        if (entry.whiskey.imageUri) {
            var img = document.createElement("img");
            img.className = "line";
            img.src = entry.whiskey.imageUri;
            imgDiv.appendChild(img);
        }
        else {
            imgDiv.textContent = "[IMG]";
        }
        line.appendChild(imgDiv);
        // the the score
        var scoreDiv = document.createElement("div");
        scoreDiv.className = "block score scale";
        scoreDiv.textContent = "" + entry.rating;
        line.appendChild(scoreDiv);
        var descriptionDiv = document.createElement("div");
        descriptionDiv.className = "block description scale";
        descriptionDiv.innerHTML = "<strong><u>" + entry.whiskey.name + "</u></strong><br/>" + entry.whiskey.description;
        line.appendChild(descriptionDiv);
        var chartDiv = document.createElement("div");
        chartDiv.className = "block chart scale";
        var chartCanvas = document.createElement("canvas");
        chartCanvas.width = 80; // this gets pretty hardcoded, huh?
        chartCanvas.height = 80;
        chartCanvas.className = "chart scale";
        chartDiv.appendChild(chartCanvas);
        this._drawChart(chartCanvas, entry.notes);
        line.appendChild(chartDiv);
        return line;
    };
    DashboardPage.prototype._drawChart = function (canvas, notes) {
        if (!notes || !notes.grid) {
            this._sketchPlaceholder(canvas);
        }
        else {
            this._drawGrid(canvas, notes.grid);
        }
    };
    DashboardPage.prototype._drawGrid = function (canvas, grid) {
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#444444";
        ctx.moveTo(2, 40);
        ctx.lineTo(78, 40);
        ctx.moveTo(40, 2);
        ctx.lineTo(40, 78);
        ctx.stroke();
        ctx.closePath();
        // and then put a dot at the grid spot
        var x = 2 + 76 * grid.rich;
        var y = 2 + 76 * (1 - grid.smoky);
        var red = Math.round(255 - (64 * grid.smoky));
        var green = Math.round(255 - 64 * (grid.smoky + grid.rich));
        var blue = Math.round(255 - (128 * grid.smoky));
        var color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    };
    DashboardPage.prototype._sketchPlaceholder = function (canvas) {
        var ctx = canvas.getContext("2d");
        var grad = ctx.createLinearGradient(0, 76, 76, 0);
        grad.addColorStop(0, "#ababab");
        grad.addColorStop(1, "#333333");
        ctx.fillStyle = grad;
        ctx.fillRect(2, 2, 76, 76);
    };
    return DashboardPage;
}());
//# sourceMappingURL=appBundle.js.map