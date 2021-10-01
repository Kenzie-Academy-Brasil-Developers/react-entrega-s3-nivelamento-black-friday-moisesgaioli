const Cart = ({ productCart }) => {

    const result = productCart.reduce((acc, product) => acc + Number(product.actualPrice), 0).toFixed(2)

    // console.log(productCart)
    return (
        <>
            <h2> Carrinho </h2>
            {
                productCart.map((product, id) => {
                    return <div key={id}>
                                <h4> {product.name} </h4>
                                <p> Preço original: {product.price} </p>
                                <p> Porcentagem desconto = {product.percentageDiscount} </p>
                                <p> Valor desconto: {product.valueDiscount} </p>
                                <p> Preço atual: {product.actualPrice}  </p>
                                <hr />
                            </div>
                })
            }
            <h2> Preço total da compra: {result} </h2>
        </>     
    )
}

export default Cart