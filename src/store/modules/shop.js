//types
const types = {
    ADDCART:'ADDCART',
    CANCELCART:'CANCELCART',
};
//state
const state={
    products:[
        {
            title: 'The Perfect Sandwich, A Real NYC Classic',
            image: 'http://www.w3schools.com/w3images/sandwich.jpg',
            inventory: 5,
            price: 155
          },
          {
            title: 'Let Me Tell You About This Steak',
            image: 'http://www.w3schools.com/w3images/steak.jpg',
            inventory: 1,
            price: 1380
          },
          {
            title: 'Cherries, interrupted',
            image: 'http://www.w3schools.com/w3images/cherries.jpg',
            inventory: 2,
            price: 499
          },
          {
            title: 'Once Again, Robust Wine and Vegetable Pasta',
            image: 'http://www.w3schools.com/w3images/wine.jpg',
            inventory: 3,
            price: 790
          }
    ],
    shoppingCart:[],
}

//getters
const getters = {
    //取得商品列表
    getProducts : state=>state.products,
    //取得購物的數量
    getShoppingCartTotal : state=> state.shoppingCart.length,

    //取得購物列表
    getShoppingCart : state=> state.shoppingCart,
    //取得總價格
    getCartPriceTotal : state => state.shoppingCart.reduce((pre,current)=> pre + current.price,0),
    //取得推薦餐點
    getRecommendedProducts: state =>{
        const inventoryList = state.products.filter(p=>p.inventory > 0);
        const randomNumber = Math.round(Math.random()* (inventoryList.length-1));
        return inventoryList[randomNumber];
    }
}
//actions
const actions={
    addCart({commit},id){
        commit(types.ADDCART, id);
    },
    cancelCart({commit},id){
        commit(types.CANCELCART,id);
    }
}

//mutations
const mutations={
    [types.ADDCART] (state , id){
        console.log("addCart");
        const product = state.products.find(item => item.title === id && item.inventory !==0);
        console.log('product : ',product);
        product.inventory -=1;
        
        state.shoppingCart.push({
            title:product.title,
            price:product.price,
        });
    },
    [types.CANCELCART] (state, title) {
        // 從購物車移除
        // ES6 array findIndex 找到條件成立的物件，所在陣列中的位子。
        const cartIndex = state.shoppingCart.findIndex(item => item.title === title);
        state.shoppingCart.splice(cartIndex, 1);
        // 餐點庫存 +1
        const product = state.products.find(item => item.title === title);
        product.inventory += 1;
      },
}

export default{
    state,
    getters,
    actions,
    mutations,
}