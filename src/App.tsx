import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { GlobalStyles } from './GlobalStyles';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const PicOfTheDay = lazy(() => import('./components/PicOfTheDay/PicOfTheDay'));
const Products = lazy(() => import('./components/Products/Products'));

const App = () => {
  const { isModalOpen, isLightMode } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isModalOpen]);

  const renderLoader = () => (
    <div className="container-pagination animate__animated animate__fadeIn">
      <div className="containerInfo">
        <h1>Loading...</h1>
      </div>
    </div>
  );
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <GlobalStyles isLightMode={isLightMode} />
        <Navbar />
        <PicOfTheDay />
        <Products />
      </Suspense>
    </>
  );
}

export default App;
