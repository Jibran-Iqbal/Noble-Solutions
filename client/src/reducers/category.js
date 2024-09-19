const categories = [
    {
        categoryName: "Printers",
        categoryImage: {
            public_id: "printers",
            url: "/img/vector/printer.jpg"
        },
        status: "active",
        description: "Category for all types of printers"
    },
    {
        categoryName: "Scanners",
        categoryImage: {
            public_id: "scanners",
            url: "/img/vector/scanner.jpg"
        },
        status: "active",
        description: "Category for all types of scanners"
    },
    {
        categoryName: "Labellers",
        categoryImage: {
            public_id: "labellers",
            url: "/img/vector/label-printer.jpg"
        },
        status: "active",
        description: "Category for all types of labelling machines"
    }
];

const subCategories = [
    {
        subCategoryName: "Mono Laser Printers",
        subCategoryImage: {
            public_id: "mono-laser-printers",
            url: ""
        },
        categoryId: "Printers",
        status: "active",
        description: "Subcategory for mono laser printers"
    },
    {
        subCategoryName: "Colour Printers",
        subCategoryImage: {
            public_id: "colour-printers",
            url: ""
        },
        categoryId: "Printers",
        status: "active",
        description: "Subcategory for colour printers"
    },
    {
        subCategoryName: "Laser Printers",
        subCategoryImage: {
            public_id: "laser-printers",
            url: ""
        },
        categoryId: "Printers",
        status: "active",
        description: "Subcategory for laser printers"
    },
    {
        subCategoryName: "Inktank Printers",
        subCategoryImage: {
            public_id: "inktank-printers",
            url: ""
        },
        categoryId: "Printers",
        status: "active",
        description: "Subcategory for inktank printers"
    },
    {
        subCategoryName: "Desktop Scanners",
        subCategoryImage: {
            public_id: "desktop-scanners",
            url: ""
        },
        categoryId: "Scanners",
        status: "active",
        description: "Subcategory for desktop scanners"
    },
    {
        subCategoryName: "Laminated Label Printers",
        subCategoryImage: {
            public_id: "laminated-label-printers",
            url: ""
        },
        categoryId: "Labellers",
        status: "active",
        description: "Subcategory for laminated label printers"
    },
    {
        subCategoryName: "Paper Label Printers",
        subCategoryImage: {
            public_id: "paper-label-printers",
            url: ""
        },
        categoryId: "Labellers",
        status: "active",
        description: "Subcategory for paper label printers"
    }
];


const categoryReducer = (state = {categories, subCategories, countC:0, countS:0, isLoading: false}, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default categoryReducer