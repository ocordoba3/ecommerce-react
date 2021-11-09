import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reducers/cart/cartSlice';
import { Product } from '../../reducers/products/productsSlice';
import { setIsCartOpen } from '../../reducers/ui/uiSlice';
import { RootState } from '../../store/store';
import { ProductsCard } from './styles';

export const ProductCard = (product: Product) => {

    const { products } = useSelector((state: RootState) => state.cart);
    const { isLightMode } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('yourCart', JSON.stringify(products));
    }, [products])

    const handleAdd = (item: Product) => {
        dispatch(setIsCartOpen(true));
        dispatch(addToCart(item));
    }

    return (
        <ProductsCard isLightMode={isLightMode}>
            <div className="imgContainer">
                {product.bestseller && <span className="bestSeller">Best seller</span>}
                <img src={product.image.src} alt={product.image.alt} />
                <button type="button" className="cartButton" onClick={() => handleAdd(product)}>ADD TO CART</button>
            </div>
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
        </ProductsCard>
    )
}
