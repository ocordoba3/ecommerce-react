// Required imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
// Store and reducers
import { RootState } from '../../store/store';
import { CartItems, clearCart } from '../../reducers/cart/cartSlice';
import { setIsCartOpen, setIsLightMode } from '../../reducers/ui/uiSlice';
// Components
import { Logo } from '../Logo/Logo';
// Styled components
import { ButtonTheme, CartBadge, CartIconContainer, ClearButton, CloseButton, ContainerCart, Items, ItemsContainer, ItemsInfo, ItemsPhoto, Nav } from './styles';

const Navbar = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);
    const { isCartOpen, isLightMode } = useSelector((state: RootState) => state.ui);

    const handleViewCartItems = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <Nav isLightMode={isLightMode}>
            <Logo></Logo>
            <ButtonTheme isLightMode={isLightMode} >
                <input type="checkbox" onClick={() => dispatch(setIsLightMode(!isLightMode))} />
                <span className="slider">
                    {
                        !isLightMode ? <BsFillMoonFill size="2.5rem" /> : <BsFillSunFill size="2.5rem"/>
                    }
                </span>
                
            </ButtonTheme>
            <ContainerCart>
                <CartIconContainer isLightMode={isLightMode} onClick={handleViewCartItems}>
                    <AiOutlineShoppingCart />
                </CartIconContainer>
                {products.length > 0 && <CartBadge isLightMode={isLightMode}>{products.length}</CartBadge>}
                {
                    products.length > 0 && isCartOpen
                    &&
                    <ItemsContainer isFadeIn={isCartOpen} isLightMode={isLightMode}>
                        <CloseButton isLightMode={isLightMode} onClick={handleViewCartItems}>
                            <AiOutlineClose />
                        </CloseButton>
                        <ul>
                            {products.map((product: CartItems) => (
                                <Items isLightMode={isLightMode} key={product.product.name}>
                                    <ItemsInfo isLightMode={isLightMode}>
                                        <p id="ItemName">{product.product.name} <small>({product.quantity})</small></p>
                                        <p id="ItemPrice">${product.product.price}</p>
                                    </ItemsInfo>
                                    <ItemsPhoto>
                                        <img src={product.product.image.src} alt={product.product.image.alt} />
                                    </ItemsPhoto>
                                </Items>
                            ))}
                            <ClearButton isLightMode={isLightMode} type="button" onClick={handleClearCart}>CLEAR</ClearButton>
                        </ul>
                    </ItemsContainer>
                }
            </ContainerCart>
        </Nav>
    )
}

export default Navbar;
