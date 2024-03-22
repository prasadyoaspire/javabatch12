function Main() {

    let product = {
        productId: 101,
        productName : "IphoneX",
        productPrice : 96000
    }

     return (
        <div>
            <p>Main component</p>
            <p>Sum : {10+30}</p>
            <h2>Product Details</h2>
            <p>ProductId : {product.productId}  </p>
            <p>Name : {product.productName}  </p>
            <p>Price : {product.productPrice}  </p>          
        </div>
    )
}

export default Main;