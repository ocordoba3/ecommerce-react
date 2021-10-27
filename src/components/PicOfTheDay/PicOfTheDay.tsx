import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturedProduct } from '../../helpers/fetchData';
import { toCamelCase } from '../../helpers/toCamelCase';
import { addToCart } from '../../reducers/cart/cartSlice';
import { setIsCartOpen } from '../../reducers/ui/uiSlice';
import { RootState } from '../../store/store';
import './styles.css';

const PicOfTheDay = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeaturedProduct());
    }, [dispatch]);

    const { featuredProduct, products } = useSelector((state: RootState) => state.products);

    const handleAdd = () => {
        dispatch(setIsCartOpen(true));
        dispatch(addToCart(featuredProduct));
    }

    return (
        <>
            {
                featuredProduct && products &&
                <article className="picDaySection animate__animated animate__fadeIn">
                    <div className="header">
                        <h1 className="picTitle">{featuredProduct?.name}</h1>
                        <button type="button" className="addCartButtonDesktop" onClick={handleAdd}>ADD TO CART</button>
                    </div>
                    <div className="picOfDay">
                        <img src={featuredProduct?.image.src} alt={featuredProduct?.name} />
                        <button type="button" className="addCartButtonMobile" onClick={handleAdd}>ADD TO CART</button>
                        <h4>Photo of the day</h4>
                    </div>
                    <div className="other">
                        <div className="aboutPic">
                            <h4>About {featuredProduct?.name}</h4>
                            <span className="category">{toCamelCase(featuredProduct?.category || '')}</span>
                            <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder

                                text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
                        </div>
                        <div className="otherDetails">
                            <h4>People also buy</h4>
                            <div className="otherBuys">
                                {
                                    products?.slice(0, 3)?.map(product => (
                                        <img key={product.id} src={product.image.src} alt={product.image.alt} />
                                    ))
                                }
                            </div>
                            <h4>Details</h4>
                            <p>Dimentions: {featuredProduct?.details?.dimmentions?.width} x {featuredProduct?.details?.dimmentions?.height}pixels</p>
                            <p>Size: {featuredProduct?.details.size / 1000}MB</p>
                        </div>
                    </div>
                </article>
            }
        </>
    )
}

export default PicOfTheDay;