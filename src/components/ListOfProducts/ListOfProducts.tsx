import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toCamelCase } from '../../helpers/toCamelCase';
import { addToCart } from '../../reducers/cart/cartSlice';
import { Product } from '../../reducers/products/productsSlice';
import { setIsCartOpen } from '../../reducers/ui/uiSlice';
import { RootState } from '../../store/store';
import './styles.css';

export const ListOfProducts = () => {

    const { paginatedItems } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const handleAdd = (item: Product) => {
        dispatch(setIsCartOpen(true));
        dispatch(addToCart(item));
    }

    return (
        <div className="listOfProducts">
            {
                paginatedItems.map((product: Product) => (
                    <div className="product" key={product.id}>
                        <div className="imgContainer">
                            {product.bestseller && <span className="bestSeller">Best seller</span>}
                            <img src={product.image.src} alt={product.image.alt} />
                            <button type="button" className="cartButton" onClick={() => handleAdd(product)}>ADD TO CART</button>
                        </div>
                        <h3 className="product-category">{toCamelCase(product.category)}</h3>
                        <h1>{product.name}</h1>
                        <h2 className="product-price">${product.price}</h2>
                    </div>
                ))
            }
        </div>
    )
}
