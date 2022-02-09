
import { Pack } from "./types";

export const pack_default: Pack = {
    name: "default",
    directory: "00_default",
    tiles: [
        { id: 0, top: false, bottom: false, left: false, right: false, image: "", rotate: 0 },

        { id: 1, top: false, bottom: false, left: true, right: true, image: "street1.png", rotate: 0 },
        { id: 2, top: true, bottom: true, left: false, right: false, image: "street1.png", rotate: 90 },

        { id: 3, top: true, bottom: false, left: true, right: false, image: "street2.png", rotate: 0 },
        { id: 4, top: true, bottom: false, left: false, right: true, image: "street2.png", rotate: 90 },
        { id: 5, top: false, bottom: true, left: false, right: true, image: "street2.png", rotate: 180 },
        { id: 6, top: false, bottom: true, left: true, right: false, image: "street2.png", rotate: 270 },

        { id: 7, top: true, bottom: false, left: true, right: true, image: "street3.png", rotate: 0 },
        { id: 8, top: true, bottom: true, left: false, right: true, image: "street3.png", rotate: 90 },
        { id: 9, top: false, bottom: true, left: true, right: true, image: "street3.png", rotate: 180 },
        { id: 10, top: true, bottom: true, left: true, right: false, image: "street3.png", rotate: 270 },

        { id: 11, top: true, bottom: true, left: true, right: true, image: "street4.png", rotate: 0 },
        { id: 12, top: false, bottom: false, left: false, right: false, image: "street5.png", rotate: 0 },

        { id: 13, top: false, bottom: true, left: false, right: false, image: "street6.png", rotate: 0 },
        { id: 14, top: false, bottom: false, left: true, right: false, image: "street6.png", rotate: 90 },
        { id: 15, top: true, bottom: false, left: false, right: false, image: "street6.png", rotate: 180 },
        { id: 16, top: false, bottom: false, left: false, right: true, image: "street6.png", rotate: 270 },
    ]
};


export const pack_violet: Pack = {
    name: "violet",
    directory: "01_violet",
    background: "#DC9EE2",
    tiles: [
        { id: 0, top: false, bottom: false, left: false, right: false, image: "", rotate: 0 },

        { id: 1, top: false, bottom: false, left: true, right: true, image: "street1.png", frequency: [6], rotate: 0 },
        { id: 2, top: true, bottom: true, left: false, right: false, image: "street1.png", frequency: [6], rotate: 90 },

        { id: 3, top: true, bottom: false, left: true, right: false, image: "street2.png", frequency: [2], rotate: 0 },
        { id: 4, top: true, bottom: false, left: false, right: true, image: "street2.png", frequency: [2], rotate: 90 },
        { id: 5, top: false, bottom: true, left: false, right: true, image: "street2.png", frequency: [2], rotate: 180 },
        { id: 6, top: false, bottom: true, left: true, right: false, image: "street2.png", frequency: [2], rotate: 270 },

        { id: 7, top: true, bottom: false, left: true, right: true, image: "street3.png", frequency: [2], rotate: 0 },
        { id: 8, top: true, bottom: true, left: false, right: true, image: "street3.png", frequency: [2], rotate: 90 },
        { id: 9, top: false, bottom: true, left: true, right: true, image: "street3.png", frequency: [2], rotate: 180 },
        { id: 10, top: true, bottom: true, left: true, right: false, image: "street3.png", frequency: [2], rotate: 270 },

        { id: 11, top: true, bottom: true, left: true, right: true, image: "street4.png", frequency: [2], rotate: 0 },
        { id: 12, top: false, bottom: false, left: false, right: false, image: "street5.png", frequency: [9], rotate: 0 },

        { id: 13, top: false, bottom: true, left: false, right: false, image: "street6.png", frequency: [1], rotate: 0 },
        { id: 14, top: false, bottom: false, left: true, right: false, image: "street6.png", frequency: [1], rotate: 90 },
        { id: 15, top: true, bottom: false, left: false, right: false, image: "street6.png", frequency: [1], rotate: 180 },
        { id: 16, top: false, bottom: false, left: false, right: true, image: "street6.png", frequency: [1], rotate: 270 },
    ]
};



export const pack_tram: Pack = {
    name: "tram",
    directory: "02_tram",
    background: "#9FE888",
    tiles: [
        { id: 10, top: false, bottom: false, left: true, right: true, image: '1a.png', rotate: 0, frequency: [4, 5, 6] },
        { id: 11, top: false, bottom: false, left: true, right: true, image: '1b.png', rotate: 0, frequency: [3, 2, 1] },
        { id: 12, top: false, bottom: false, left: true, right: true, image: '1c.png', rotate: 0, frequency: [3, 2, 1] },

        { id: 13, top: true, bottom: true, left: false, right: false, image: '1a.png', rotate: 90, frequency: [4, 5, 6] },
        { id: 14, top: true, bottom: true, left: false, right: false, image: '1b.png', rotate: 90, frequency: [3, 2, 1] },
        { id: 15, top: true, bottom: true, left: false, right: false, image: '1c.png', rotate: 90, frequency: [3, 2, 1] },

        { id: 16, top: false, bottom: false, left: true, right: true, image: '1b.png', rotate: 180, frequency: [3, 2, 1] },
        { id: 17, top: false, bottom: false, left: true, right: true, image: '1c.png', rotate: 180, frequency: [3, 2, 1] },
        { id: 18, top: true, bottom: true, left: false, right: false, image: '1b.png', rotate: 270, frequency: [3, 2, 1] },
        { id: 19, top: true, bottom: true, left: false, right: false, image: '1c.png', rotate: 270, frequency: [3, 2, 1] },

        { id: 20, top: true, bottom: false, left: true, right: false, image: '2.png', rotate: 0, frequency: [1, 2, 4] },
        { id: 21, top: true, bottom: false, left: false, right: true, image: '2.png', rotate: 90, frequency: [1, 2, 4] },
        { id: 22, top: false, bottom: true, left: false, right: true, image: '2.png', rotate: 180, frequency: [1, 2, 4] },
        { id: 23, top: false, bottom: true, left: true, right: false, image: '2.png', rotate: 270, frequency: [1, 2, 4] },

        { id: 30, top: true, bottom: false, left: true, right: true, image: '3.png', rotate: 0, frequency: [6, 4, 2] },
        { id: 31, top: true, bottom: true, left: false, right: true, image: '3.png', rotate: 90, frequency: [6, 4, 2] },
        { id: 32, top: false, bottom: true, left: true, right: true, image: '3.png', rotate: 180, frequency: [6, 4, 2] },
        { id: 33, top: true, bottom: true, left: true, right: false, image: '3.png', rotate: 270, frequency: [6, 4, 2] },

        { id: 40, top: true, bottom: true, left: true, right: true, image: '4.png', rotate: 0, frequency: [6, 3, 1] },

        { id: 50, top: false, bottom: false, left: false, right: false, image: '5a.png', rotate: 0, frequency: [1, 2, 5] },
        { id: 51, top: false, bottom: false, left: false, right: false, image: '5b.png', rotate: 0, frequency: [0, 2, 5] },
        { id: 52, top: false, bottom: false, left: false, right: false, image: '5c.png', rotate: 0, frequency: [0, 2, 5] },
        { id: 53, top: false, bottom: false, left: false, right: false, image: '5d.png', rotate: 0, frequency: [0, 2, 5] },

        { id: 60, top: false, bottom: true, left: false, right: false, image: '6.png', rotate: 0, frequency: [1, 2, 3] },
        { id: 61, top: false, bottom: false, left: true, right: false, image: '6.png', rotate: 90, frequency: [1, 2, 3] },
        { id: 62, top: true, bottom: false, left: false, right: false, image: '6.png', rotate: 180, frequency: [1, 2, 3] },
        { id: 63, top: false, bottom: false, left: false, right: true, image: '6.png', rotate: 270, frequency: [1, 2, 3] },

    ]
}