import CartContext from "./cart-context"

const CardProvider = props =>{

    const addItemToCartHandler = (item) => {};

    const removeItemFromCartHandler = (id) => {};

    const cartContext ={
            item :[],
            totalAmount :0,
            addItem :addItemToCartHandler,
            removeItem: removeItemFromCartHandler
    };


return <CartContext.Provider>

{props.children}  

</CartContext.Provider>
};

export default CardProvider;