
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

        { id: 1, top: false, bottom: false, left: true, right: true, image: "street1.png", frequency: 5, rotate: 0 },
        { id: 2, top: true, bottom: true, left: false, right: false, image: "street1.png", frequency: 5, rotate: 90 },

        { id: 3, top: true, bottom: false, left: true, right: false, image: "street2.png", frequency: 2, rotate: 0 },
        { id: 4, top: true, bottom: false, left: false, right: true, image: "street2.png", frequency: 2, rotate: 90 },
        { id: 5, top: false, bottom: true, left: false, right: true, image: "street2.png", frequency: 2, rotate: 180 },
        { id: 6, top: false, bottom: true, left: true, right: false, image: "street2.png", frequency: 2, rotate: 270 },

        { id: 7, top: true, bottom: false, left: true, right: true, image: "street3.png", frequency: 2, rotate: 0 },
        { id: 8, top: true, bottom: true, left: false, right: true, image: "street3.png", frequency: 2, rotate: 90 },
        { id: 9, top: false, bottom: true, left: true, right: true, image: "street3.png", frequency: 2, rotate: 180 },
        { id: 10, top: true, bottom: true, left: true, right: false, image: "street3.png", frequency: 2, rotate: 270 },

        { id: 11, top: true, bottom: true, left: true, right: true, image: "street4.png", frequency: 2, rotate: 0 },
        { id: 12, top: false, bottom: false, left: false, right: false, image: "street5.png", frequency: 7, rotate: 0 },

        { id: 13, top: false, bottom: true, left: false, right: false, image: "street6.png", frequency: 1, rotate: 0 },
        { id: 14, top: false, bottom: false, left: true, right: false, image: "street6.png", frequency: 1, rotate: 90 },
        { id: 15, top: true, bottom: false, left: false, right: false, image: "street6.png", frequency: 1, rotate: 180 },
        { id: 16, top: false, bottom: false, left: false, right: true, image: "street6.png", frequency: 1, rotate: 270 },
    ]
}
