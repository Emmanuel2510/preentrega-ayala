import './CartWidget.css'

const CartWidget = () => {
    const imgcarrito = "../src/assets/carrito.png";
    return (
        <div>
            <img className='imgcarrito' src={imgcarrito} alt="carrito" />
            <p>6</p>
        </div>
    )
}

export default CartWidget;