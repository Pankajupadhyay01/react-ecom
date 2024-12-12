import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CategoryCard from './CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { updatemenu } from '../../redux/productSlice';
const Navbar = () => {

  const [search, setsearch] = useState(false);
  const menu = useSelector((state) => state.user.menu);
  const dispatch = useDispatch();
  if (menu) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
  const func = () => {
    dispatch(updatemenu())

  }
  return (
    <div>
      {/* upper Upper Text Started*/}
      <div className='flex justify-center bg-slate-50 text-md'>
        Get 50% discount use <span className='mx-1 text-blue-900 font-bold'> Sup50Get</span>
      </div>
      {/* upper Upper Text Completed */}


      {/* Main Navbar */}
      <nav className='bg-white py-5'>
        <div className='flex justify-between align-middle items-center mx-3'>

          {/* Logo    */}
          <div className='flex items-center space-x-1'>
            <div className={`${menu ? "hidden" : "flex"} lg:hidden text-blue-800 text-xl `} onClick={func}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <Link to={"/"} className='text-3xl md:text-4xl text-blue-800'>
              Lamda
            </Link >
          </div>

          {/* Search bar */}
          <div className='hidden md:flex'>
            <SearchBar />
          </div>

          {/* Links  */}
          <ul className='flex justify-center items-center space-x-4'>
            <li className={`list-none text-2xl md:text-3xl text-blue-800 flex items-center md:hidden`} onClick={() => setsearch(!search)}><ion-icon name={search ? "close-outline" : "search-outline"}></ion-icon></li>
            <li className='list-none text-2xl md:text-3xl text-blue-800 flex items-center'>
              <Link to={"/cart"}>
                <ion-icon name="cart-outline"></ion-icon>
              </Link>
            </li>
            <li className='list-none text-2xl md:text-3xl text-blue-800 flex items-center'>
              <Link to={"/cart"}>
                <ion-icon name="person-outline"></ion-icon>
              </Link>
            </li>
          </ul>

        </div>
        <div className={`${search ? "flex" : "hidden"} justify-center md:hidden`}>
          <SearchBar />
        </div>

      </nav>
      {/* Main Navbar Ended*/}

      {/* Category Nav */}
      <CategoryCard />
      {/* Category Nav Ended */}
    </div>
  )
}

export default Navbar