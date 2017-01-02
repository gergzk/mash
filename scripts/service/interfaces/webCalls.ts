interface IWhiskeyDataSource {
    getWhiskeys(name: string): Promise<IWhiskey[]>;
    getUserData(): Promise<IUserEntry[]>;
}