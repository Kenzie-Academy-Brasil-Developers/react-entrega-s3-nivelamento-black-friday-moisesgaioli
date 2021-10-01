

const Product = ({ searchProduct, addCart}) => {

    console.log(searchProduct)
    return (
        <>
            {
                searchProduct.map((product, id) => {
                    return <div key={id}>
                                <h4> {product.name} </h4>
                                <p> Preço original: {product.price} </p>
                                <p> Porcentagem desconto = {product.percentageDiscount} </p>
                                <p> Valor desconto: {product.valueDiscount} </p>
                                <p> Preço atual: {product.actualPrice}  </p>
                                <button onClick={() => addCart(product.id)}> Adicionar ao carrinho </button>
                                <hr />
                            </div>
                })
            }
        </>     
    )
}

export default Product