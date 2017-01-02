interface IUserEntry {
    whiskey: IWhiskey;
    rating: number;
    notes: INotes;
};

interface INotes {
    grid?: ITastingGrid;
};

interface ITastingGrid {
    // both in the range [0,1], 0.5 representing neutral
    smoky: number;
    rich: number;
};