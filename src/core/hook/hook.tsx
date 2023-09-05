import { atom, selector } from 'recoil';

// set id actives tab
export const setIdTab = atom({
    key: "setIdTab",
    default: 1
})

// lấy id actives tab
export const getIdTab = selector(
    {
        key: "getIdTab",
        get: ({ get }) => {
            return get(setIdTab);
        }
    }
)


interface ObDetail {
    id: number;
    price: string;
    typeUI: number;
}

const defaultObDetail: ObDetail = {
    id: 0,
    price: "",
    typeUI: 1,
};

// set object detail
export const setObDetail = atom({
    key: "setObDetail",
    default: defaultObDetail,
})

// get object detail
export const getObDetail = selector({
    key: "getObDetail",
    get: ({ get }) => {
        return get(setObDetail);
    }
})

interface ObImage {
    images: string[],
    currentIndex: number,
}

const defaultObImage: ObImage = {
    images: [],
    currentIndex: 0
}

// set obImage
export const setObLstImage = atom({
    key: "setObLstImage",
    default: defaultObImage
})

// get ObImage
export const getObLstImage = selector(
    {
        key: "getObLstImage",
        get: ({ get }) => {
            return get(setObLstImage);
        }
    }
)