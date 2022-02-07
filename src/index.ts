// City creator -> index.ts

import { pack_violet } from "./tile_packs";
import { Pack, Tile } from "./types";

function main(): void
{
    document.getElementById("create").addEventListener("click", createMap);
}


function getRandomMatchingTileId(matching_tiles: Array<Tile>): number
{
    const getRandomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

    let matching_tiles_frequencies: Array<number> = [];
    for (let i = 0; i < matching_tiles.length; i++)
    {
        const el: Tile = matching_tiles[i];
        const frequency = !isNaN(el.frequency) ? el.frequency : 1;

        for (let j = 0; j < frequency; j++)
        {
            matching_tiles_frequencies.push(el.id);
        }
    }

    const result: number = matching_tiles_frequencies[getRandomInteger(0, matching_tiles_frequencies.length - 1)];
    return result;
}



function createMap(): void
{
    const rows: number = parseInt((document.getElementById("options_rows") as HTMLInputElement).value);
    const columns: number = parseInt((document.getElementById("options_columns") as HTMLInputElement).value);

    const pack: Pack = pack_violet;
    const tiles: Array<Tile> = pack.tiles;

    let map: Array<Array<number>> = [];

    //rows
    for (let i = 0; i < rows; i++)
    {
        map[i] = [];

        //columns
        for (let j = 0; j < columns; j++)
        {
            // 1- or 2-element array with true/false values
            const left_values = j > 0 ? [tiles[map[i][j - 1]].right] : [true, false];  //check right value of the left tile
            const top_values = i > 0 ? [tiles[map[i - 1][j]].bottom] : [true, false];  //check bottom value of the top tile
            const right_values = [true, false];
            const bottom_values = [true, false];

            const matching_tiles: Array<Tile> = tiles.filter(el => left_values.includes(el.left) && top_values.includes(el.top)
                && right_values.includes(el.right) && bottom_values.includes(el.bottom) && el.id > 0);

            map[i][j] = getRandomMatchingTileId(matching_tiles);
        }
    }
    renderMap(map, pack);
}


function renderMap(map: Array<Array<number>>, pack: Pack): void 
{
    let code: string = "";

    //rows
    for (let i = 0; i < map.length; i++)
    {
        code += `<div class="result_row">`;

        //columns
        for (let j = 0; j < map[i].length; j++)
        {
            const el = pack.tiles[map[i][j]];

            code += `<div class="result_tile">
                <img src="./tile_packs/${pack.directory}/${el.image}" alt="${el.image}" style="transform: rotate(${el.rotate}deg);" />
            </div>`;
        }

        code += "</div>";
    }


    const result_el = document.getElementById("result");
    result_el.style.backgroundColor = pack.background || "white";
    result_el.classList.remove("hidden");
    result_el.innerHTML = code;
}

document.addEventListener("DOMContentLoaded", function () { main(); });
