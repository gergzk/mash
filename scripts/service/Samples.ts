class Samples {
    static whiskeys: IWhiskey[] = [
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

    static userEntries: { [id: string]: IUserEntry[] } = {
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
}