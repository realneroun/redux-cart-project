var initialState =[
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://product.hstatic.net/1000063620/product/iphone-6s-pl-mhm_c94ca7b5cebd49b8ab3739ee20bb0cdb_1024x1024.jpg',
        description: 'san pham do apple san xuat',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Iphone 8 Plus',
        image : 'https://product.hstatic.net/1000063620/product/iphone-6s-pl-mhm_c94ca7b5cebd49b8ab3739ee20bb0cdb_1024x1024.jpg',
        description: 'san pham do china san xuat',
        price : 450,
        inventory : 5,
        rating :5
    },
    {
        id : 3,
        name : 'Iphone 9 Plus',
        image : 'https://product.hstatic.net/1000063620/product/iphone-6s-pl-mhm_c94ca7b5cebd49b8ab3739ee20bb0cdb_1024x1024.jpg',
        description: 'san pham do tao san xuat',
        price : 400,
        inventory : 1,
        rating : 3
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products