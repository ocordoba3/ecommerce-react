// Required imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Helpers
import { getFeaturedProduct } from '../../helpers/fetchData';
import { toCamelCase } from '../../helpers/toCamelCase';
// Store and reducers
import { RootState } from '../../store/store';
import { addToCart } from '../../reducers/cart/cartSlice';
import { setIsCartOpen } from '../../reducers/ui/uiSlice';
// Components
import { Header, Information, Photo, PicDaySection } from './styles';
import { DEFAULT_TEXT } from '../../consts';

const PicOfTheDay = () => {

    const dispatch = useDispatch();
    const { featuredProduct, products } = useSelector((state: RootState) => state.products);
    const { isLightMode } = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        dispatch(getFeaturedProduct());
    }, [dispatch]);

    const handleAdd = () => {
        dispatch(setIsCartOpen(true));
        dispatch(addToCart(featuredProduct));
    }

    return (
        <>
            {
                featuredProduct && products &&
                <PicDaySection isLightMode={isLightMode} className="animate__animated animate__fadeIn">
                    <Header isLightMode={isLightMode}>
                        <h1>{featuredProduct?.name} <small>({toCamelCase(featuredProduct?.category || '')})</small></h1>
                        <button type="button" onClick={handleAdd}>ADD TO CART</button>
                    </Header>
                    <Photo isLightMode={isLightMode}>
                        <img src={featuredProduct?.image.src} alt={featuredProduct?.name} />
                        <button type="button" onClick={handleAdd}>ADD TO CART</button>
                        <h3>Photo of the day</h3>
                    </Photo>
                    <Information>
                        <div className="aboutPic">
                            <h2>About it</h2>
                            <p>{DEFAULT_TEXT}</p>
                            <h2>Details</h2>
                            <p>Dimentions: {featuredProduct?.details?.dimmentions?.width} x {featuredProduct?.details?.dimmentions?.height}pixels</p>
                            <p>Size: {featuredProduct?.details.size / 1000}MB</p>
                        </div>
                        <div className="otherDetails">
                            <h2>People also buy</h2>
                            <div className="otherBuys">
                                {
                                    products?.slice(0, 3)?.map(product => (
                                        <img key={product.id} src={product.image.src} alt={product.image.alt} />
                                    ))
                                }
                            </div>
                        </div>
                    </Information>
                    <div id="elementToScroll"></div>
                </PicDaySection>
            }
        </>
    )
}

export default PicOfTheDay;