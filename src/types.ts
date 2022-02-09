// City creator -> types.ts


export type Pack = {
    name: string,
    author?: string,
    directory: string,
    background?: string,
    tiles: Array<Tile>
}

export type Tile = {
    id: number,
    top: boolean,
    bottom: boolean,
    left: boolean,
    right: boolean,
    frequency?: Array<number>,
    image: string,
    rotate: 0 | 90 | 180 | 270,
};
