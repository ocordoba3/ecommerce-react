import loadable from '@loadable/component';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '../../hooks/useWindowSize';
import { setCategoryFilters, setIsModalOpen, setPriceRange, setSortyByFilters, sortOrder, sortType } from '../../reducers/ui/uiSlice';
import { RootState } from '../../store/store';
import { Filters } from '../Filters/Filters';
import './styles.css';

const Pagination = loadable(() => import('../Pagination/Pagination'));


const Products = () => {

    const { sortBy } = useSelector((state: RootState) => state.ui)
    const dispatch = useDispatch();
    const windowSize = useWindowSize();

    const openForm = () => {
        dispatch(setIsModalOpen(true));
        (document.getElementById('popup1') as any).style.display = 'block';
    }

    const closePopup = () => {
        dispatch(setIsModalOpen(false));
        (document.getElementById('popup1') as any).style.display = 'none';
    }

    const handleSort = (sortOrder: sortOrder, sortType: sortType) => {
        dispatch(setSortyByFilters([sortOrder, sortType]));
    }

    const handleResetFilters = () => {
        dispatch(setCategoryFilters([]));
        dispatch(setPriceRange([]));
    }

    return (
        <section className="allProducts">
            <h1 className="allProducts-title">
                Photography /
                <span>Premium Photos</span>
                <p className="filter-icon" onClick={() => openForm()}><img src="assets/filter-icon.svg" alt="filter-icon" /></p>
                <p className="sortBy-button" style={{ fontSize: '2rem', marginLeft: 'auto' }}>
                    {
                        sortBy[0] === 'asc' ? <FaSortAlphaDown onClick={() => handleSort('desc', sortBy[1])} /> : <FaSortAlphaDownAlt onClick={() => handleSort('asc', sortBy[1])} />
                    }
                    Sort by
                    <select title="select" defaultValue={sortBy[1]} onChange={({ target }: any) => handleSort(sortBy[0], target.value)}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </p>
            </h1>
            <div className="content">
                {windowSize.width > 767 && <Filters />}
                <Pagination />
            </div>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <div className="close" onClick={() => closePopup()}><AiOutlineClose /></div>
                    <Filters />
                    <div className="buttons">
                        <div className="clear">
                            <button type="button" onClick={() => handleResetFilters()}>CLEAR</button>
                        </div>
                        <div className="save">
                            <button type="button" onClick={() => closePopup()}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;