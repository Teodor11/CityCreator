// City creator -> index.ts

import { pack_tram, pack_violet } from "./tile_packs";
import { Pack, Tile } from "./types";

function main(): void
{
    document.getElementById("create").addEventListener("click", createMap);
}


function getRandomMatchingTileId(matching_tiles: Array<Tile>, row_frequency_type: number): number
{
    const getRandomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

    let matching_tiles_frequencies: Array<number> = [];
    for (let i = 0; i < matching_tiles.length; i++)
    {
        const el: Tile = matching_tiles[i];
        const frequency = !isNaN(el.frequency[row_frequency_type - 1]) ? el.frequency[row_frequency_type - 1] : 1;

        for (let j = 0; j < frequency; j++)
        {
            matching_tiles_frequencies.push(el.id);
        }
    }

    const result: number = matching_tiles_frequencies[getRandomInteger(0, matching_tiles_frequencies.length - 1)];
    return result;
}


const getTile = (tiles: Array<Tile>, id: number): Tile => tiles.find(el => el.id == id);



function createMap(): void
{
    const rows: number = parseInt((document.getElementById("options_rows") as HTMLInputElement).value);
    const columns: number = parseInt((document.getElementById("options_columns") as HTMLInputElement).value);
    const areas_count: number = parseInt((document.getElementById("options_areas") as HTMLInputElement).value);

    ///////////////////////////////////////////////////
    /////// choose pack here //////////////////////////
    const pack: Pack = pack_tram;
    ///////////////////////////////////////////////////


    const tiles: Array<Tile> = pack.tiles;

    let map: Array<Array<number>> = [];

    //rows
    for (let i = 0; i < rows; i++)
    {
        map[i] = [];
        const row_frequency_type = Math.floor(i / (Math.ceil(rows / areas_count)));

        //columns
        for (let j = 0; j < columns; j++)
        {
            // 1- or 2-element array with true/false values
            console.log(tiles, i, j, map);
            const left_values = j > 0 ? [getTile(tiles, map[i][j - 1]).right] : [true, false];  //check right value of the left tile
            const top_values = i > 0 ? [getTile(tiles, map[i - 1][j]).bottom] : [true, false];  //check bottom value of the top tile
            const right_values = [true, false];
            const bottom_values = [true, false];

            const matching_tiles: Array<Tile> = tiles.filter(el => left_values.includes(el.left) && top_values.includes(el.top)
                && right_values.includes(el.right) && bottom_values.includes(el.bottom) && el.id > 0);

            map[i][j] = getRandomMatchingTileId(matching_tiles, row_frequency_type);
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
            const el = getTile(pack.tiles, map[i][j]);

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
