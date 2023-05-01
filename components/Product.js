function Product({ product, addToCart, addToWishlist}) {
    return (<>
        <div className="card p-4 my-3 shadow p-3">
            <div className="row">
                <div className="col-md-3 shadow p-1">
                    <img src={product.image} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h4 className="font-weight-bold">{product.name}</h4>
                    <p className="text-muted">{product.description}</p>
                    <p className="text-muted">{product.quantity} in stock</p>
                    <p className="text-muted">{product.ingredients}</p>
                </div>
                <div className="col-md-3">
                    <h3 className="font-weight-bold text-success">${product.price}</h3>
                    <button className="btn btn-dark btn-block" onClick={() => addToCart(product.id)}>
                        Add to Cart
                    </button>
                    <button className="btn btn-outline-info btn-block" onClick={() => addToWishlist(product.id)}>
                        Add to Wishlist
                    </button>
                </div>

            </div>
        </div>

    </>);
}

export default Product;