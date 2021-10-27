import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../helpers/fetchData';
import { filterByCategory, filterByPriceRange } from '../../helpers/filters';
import { sortItems } from '../../helpers/sortItems';
import { addPaginatedItems } from '../../reducers/products/productsSlice';
import { RootState } from '../../store/store';
import { ListOfProducts } from '../ListOfProducts/ListOfProducts';
import './styles.css';

const Pagination = () => {
    const dispatch = useDispatch();
    const { sortBy, categoryFilter, priceRange } = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        dispatch(getData(1));
    }, [dispatch]);

    const { products, paginatedItems, totalProducts } = useSelector((state: RootState) => state.products);
    const itemsPerPage = 6;
    const [pageCount, setPageCount] = useState(0);
    const [actualPage, setActualPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (products && products.length > 0) {
            let newArray = [...products];
            newArray = sortItems(newArray, sortBy);

            if (categoryFilter.length > 0) {
                newArray = filterByCategory(newArray, categoryFilter);
            }
            if (priceRange.length > 0) {
                newArray = filterByPriceRange(newArray, priceRange);
            }
            dispatch(addPaginatedItems(newArray));
            setPageCount(totalProducts / itemsPerPage);
            setLoading(false);
        }
    }, [categoryFilter, dispatch, products, itemsPerPage, priceRange, sortBy, totalProducts]);

    const handlePageClick = (selected: number) => {
        dispatch(getData(selected + 1));
        setActualPage(selected)
    };

    if (loading) {
        return (
            <div className="container-pagination animate__animated animate__fadeIn">
                <div className="containerInfo">
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="container-pagination animate__animated animate__fadeIn">

            {
                paginatedItems.length > 0
                &&
                <>
                    <ListOfProducts />
                    {
                        categoryFilter.length === 0
                        &&
                        <div className="pagination">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel={(actualPage / Math.round(pageCount)) === 1 ? "" : ">"}
                                onPageChange={({ selected }) => handlePageClick(selected)}
                                pageRangeDisplayed={3}
                                pageCount={pageCount}
                                previousLabel={actualPage !== 0 ? "<" : ""}
                                marginPagesDisplayed={3}
                            />
                        </div>}
                </>
            }
            {
                paginatedItems.length === 0
                &&
                <div className="containerInfo">
                    <h1>No items found</h1>
                </div>
            }
        </ div>
    );
}
export default Pagination;