import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, filterByPriceRange } from '../../helpers/filters';
import { sortItems } from '../../helpers/sortItems';
import { addPaginatedItems, Product } from '../../reducers/products/productsSlice';
import { RootState } from '../../store/store';
import { ProductCard } from '../ProductCard/ProductCard';
import { ContainerNoItems, ContainerProducts, ContainerProductsList, Pagination } from './styles';

const ProductsList = () => {
    const dispatch = useDispatch();
    const { sortBy, categoryFilter, priceRange } = useSelector((state: RootState) => state.ui);
    const { products, paginatedItems } = useSelector((state: RootState) => state.products);
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
            dispatch(addPaginatedItems(newArray.slice(actualPage * itemsPerPage, (actualPage + 1) * itemsPerPage)));
            setPageCount(Math.ceil(newArray.length / itemsPerPage));
            setLoading(false);
        }
    }, [categoryFilter, dispatch, products, itemsPerPage, priceRange, sortBy, actualPage]);

    const handlePageClick = (selected: number) => {
        setActualPage(selected);
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
        <ContainerProductsList className="animate__animated animate__fadeIn">
            {
                paginatedItems.length > 0
                &&
                <ContainerProducts>
                    {
                        paginatedItems.map((item: Product) => (
                            <ProductCard key={item.id} {...item} />
                        ))
                    }
                </ContainerProducts>
            }
            {
                paginatedItems.length === 0
                &&
                <ContainerNoItems>
                    <h1>No items found</h1>
                </ContainerNoItems>
            }
            <Pagination>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={((actualPage + 1) / pageCount) === 1 ? "" : ">"}
                    onPageChange={({ selected }) => handlePageClick(selected)}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={actualPage !== 0 ? "<" : ""}
                    marginPagesDisplayed={3}
                />
            </Pagination>
        </ ContainerProductsList>
    );
}
export default ProductsList;