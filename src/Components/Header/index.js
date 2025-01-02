import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/bacola-logo.png';
import CountryDropdown from './CountryDropdown'
// import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { LuUserRound } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./.SearchBox/index"
import { useContext } from 'react';
import { MyContext } from '../../App';

import Index from './Navigation/index';
import SimpleSlider from './Slider';



const Header = () => {
    const context =useContext(MyContext)
    return (
        <>
            <div className="headerwrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mt-0 mb-0 text-center">
                            Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logowrapper d-flex align-items-center col-sm-2">
                                <Link to={"/"}><img src={logo} alt="logo" /> </Link>
                            </div>

                            <div className=" col-sm-10 d-flex align-items-center part-2">
                                {
                                context.countryList.length!==0&& <CountryDropdown />}
                                {/* <CountryDropdown /> //remove this tag */}
                                <Search/>
                                
                                
                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle me-3'><LuUserRound /></Button>
                                    <div className='cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ms-2'>
                                        <Button className='circle'><IoBagOutline/></Button>
                                         <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
               <Index/>

               <SimpleSlider/>

                {/* <span className='branddescription'>Online Grocery Shopping Center </span> */}
            </div>

        </>
    )
}
export default Header;
