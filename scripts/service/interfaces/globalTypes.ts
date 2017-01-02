interface IWhiskey {
    id: string; // how do we generate this uniquely?
    name: string;
    origin: string;
    age: number;
    proof: number;
    description: string; // does this need to be localized??
    imageUri: string;
    singleMalt: boolean;
    // other related data like price does NOT go here, this is fundamental data only
};

interface ILocation {
    id: string;
    name: string;
    location: any; // fill this out later, if we care
};