// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

module MashCordova {
    "use strict";

    export module Application {
        export function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);

            var button = document.getElementById("go");
            button.onclick = () => {
                let userbox = document.getElementById("username");
                let username = userbox.textContent;
                let contentDiv = document.getElementById("appContainer") as HTMLDivElement;
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

    }

    window.onload = function () {
        Application.initialize();
    }
}

class MashGlobal {
    static pages(key: string): IPage {
        let pages = {
            dashboard: new DashboardPage(),
            // put others here
        };
        MashGlobal.pages = (key: string) => {
            return pages[key];
        };
        return pages[key];
    };

    static getDataSource(): IWhiskeyDataSource {
        let ds = new MockDataSource(MashGlobal._username);
        MashGlobal.getDataSource = () => {
            return ds;
        };
        return ds;
    }

    private static _username: string;
    static setUserName(username: string) {
        MashGlobal._username = username;
    }
}
