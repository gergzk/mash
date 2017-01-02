interface IPage {
    // this might not be the most amazing approach ever, but we'll see.
    // alternatives include a hashnav model that has absolutely no type safety either
    load(contentDiv: HTMLDivElement, params?: any): Promise<void>;
    unload(): Promise<void>;
}