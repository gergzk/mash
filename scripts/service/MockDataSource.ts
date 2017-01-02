class MockDataSource implements IWhiskeyDataSource {
    private _username: string;

    constructor(username: string) {
        this._username = username;
    }

    getWhiskeys(name: string): Promise<IWhiskey[]> {
        // find matching whiskey
        let matches = Samples.whiskeys.filter((whiskey: IWhiskey) => { return whiskey.name.toLowerCase().indexOf(name) >= 0; });
        return Promise.resolve<IWhiskey[]>(matches);
    }
    getUserData(): Promise<IUserEntry[]> {
        return Promise.resolve<IUserEntry[]>(Samples.userEntries[this._username.toLowerCase()]);
    }
};