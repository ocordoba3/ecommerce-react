// import axios from 'axios';
// import { setFeaturedProduct, setProductsList, setTotalProducts } from '../reducers/products/productsSlice';

export const getData = (page: number) => (dispatch: Function) => {
    // axios.get(`http://localhost:3001/data?_page=${page}&_limit=6`)
    //     .then((response) => {
    //         dispatch(setProductsList(response.data));
    //         dispatch(setTotalProducts(Number(response.headers["x-total-count"])));
    //     })
    //     .catch((error) => console.error(error));
}

export const getFeaturedProduct = () => (dispatch: Function) => {
    // axios.get(`http://localhost:3001/data?featured=true`)
    //     .then(({data}) => {
    //         dispatch(setFeaturedProduct(data[0]));
    //     })
    //     .catch((error) => console.error(error));
}