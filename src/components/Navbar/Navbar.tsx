import React from 'react';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Product } from '../../reducers/products/productsSlice';
import { clearCart, removeFromCart } from '../../reducers/cart/cartSlice';
import './styles.css';
import { setIsCartOpen } from '../../reducers/ui/uiSlice';

const Navbar = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);
    const { isCartOpen } = useSelector((state: RootState) => state.ui);

    const handleViewCartItems = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <nav className="navbar">
            <img className="logo" src="assets/logo.svg" alt="logo" />
            <div className="containerCart">
                <AiOutlineShoppingCart className="cartIcon" onClick={handleViewCartItems} />
                {products.length > 0 && <span>{products.length}</span>}
                {
                    products.length > 0 && isCartOpen
                    &&
                    <div className="containerCart-products">
                        <ul>
                            {products.map((product: Product) => (
                                <div key={product.name}>
                                    <li className="cartItems">
                                        <div className="cartItems-delete">
                                            <AiOutlineClose className="deleteIcon" onClick={()=> dispatch(removeFromCart(product.name))} />
                                        </div>
                                        <div className="cartItems-info">
                                            <p className="cartItems-name">{product.name}</p>
                                            <p className="cartItems-price">${product.price}</p>
                                        </div>
                                        <div className="cartItems-pic">
                                            <img src={product.image.src} alt={product.image.alt} />
                                        </div>
                                    </li>
                                    <hr />
                                </div>
                            ))}
                            <button type="button" className="clearButton" onClick={handleClearCart}>CLEAR</button>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;
