export interface Park {
    id: number,
    name: string,
    createDate: string,
    lat: number,
    long: number,
    distance: number,
    image: string,
    state: string,
    data: string
}

export const PARKS:Park[]=[
    {
        id: 0,
        name: "Acadia",
        createDate: "February 26, 1919",
        lat: 44.35,
        long: -68.21,
        distance: 0,
        image: "acadia.jpg",
        state: "Maine",
        data: "Covering most of Mount Desert Island and other coastal islands, Acadia preserves the tallest mountain  on the Atlantic coast, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats."
     },
    {
        id: 1,
        name: "American Samoa",
        createDate: "October 31, 1988",
        lat: -14.25,
        long: -170.68,
        distance: 0,
        image: "americansamoa.jpg",
        state: "American Samoa",
        data: "The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish."
    }
]