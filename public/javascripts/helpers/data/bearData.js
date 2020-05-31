const bears = [
    {
        id: "bear1",
        name: "Frank",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY0EZ7dJFV-FQ_URKPCLDgF7HjutC8jDhmju0_CJp8v2GBWAcb",
    },
    {
        id: "bear2",
        name: "Deborah",
        image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL255241_nxwyux.jpg",
    },
    {
        id: "bear3",
        name: "John",
        image: "https://siberiantimes.com/upload/information_system_40/5/3/1/item_531/information_items_531.jpg",
    }
];

const getBears = () => { return bears };

export default { getBears };