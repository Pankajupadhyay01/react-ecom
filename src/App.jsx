import React, { Suspense, lazy } from 'react';
import Navbar from './Component/LayoutFile/Navbar';
import Home from './Pages/Home';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Footer from './Component/LayoutFile/Footer';
import Loading from './Component/Loading';
import Cart from './Pages/Cart'
// lazy loaded Pages
const Categorypage = lazy(() => import("./Pages/Categorypage"))
const Detailcards = lazy(() => import("./Component/Cards/Datailcards"))
const Search = lazy(() => import("./Pages/Search"))
const Checkout = lazy(()=>import ('./Pages/Checkout'))
const App = () => {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/category/:data' element={<Suspense fallback={<Loading/>}> <Categorypage /> </Suspense>} />
        <Route exact path='/product/detail/:data' element={<Suspense fallback={<Loading/>}> <Detailcards /> </Suspense>} />
        <Route exact path='/search/:data' element={<Suspense fallback={<Loading/>}> <Search /> </Suspense>} />
        <Route exact path='/cart' element={<Suspense fallback={<Loading/>}> <Cart /> </Suspense>} />
        <Route exact path='/checkout' element={<Suspense fallback={<Loading/>}> <Checkout /> </Suspense>} />
      </Routes>
      <Footer />

    </BrowserRouter>

  )
}

export default App