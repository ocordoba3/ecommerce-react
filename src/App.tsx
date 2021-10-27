import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import loadable from '@loadable/component';

const Navbar = loadable(() => import('./components/Navbar/Navbar'));
const PicOfTheDay = loadable(() => import('./components/PicOfTheDay/PicOfTheDay'));
const Products = lazy(() => import('./components/Products/Products'));

const App = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.ui);

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
      <Navbar />
      <PicOfTheDay />
      <Suspense fallback={renderLoader()}>
        <Products />
      </Suspense>
    </>
  );
}

export default App;
