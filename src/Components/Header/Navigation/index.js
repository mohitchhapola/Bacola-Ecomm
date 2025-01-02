import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6"
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbMeat } from "react-icons/tb";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GrBlog } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";

import { GiMeat } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
function Index() {
    const [isopen,setisopen] = useState(false);
  return (
    <div>
         <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3 navPart1'>
                            <div className='catwrapper'>
            
            <Button className='allCartTab align-items-center' onClick={()=>setisopen(
                !isopen
            )} >
                <span className='icon1 me-2'>
                <IoIosMenu /></span>
                <span class="text">ALL CATEGORIES</span>
                <span className='icon2 ms-2'><FaAngleDown/></span>
                </Button>
                {/* <div className='sidebarnav' style={{display:isopen?'block':'none'}}> */}
                <div className={`sidebarnav ${isopen===true?'open':''}`}>
                    <ul>
                        <li>
                            <Button><Link to={"/"}><CiShop/>Shop</Link><FaAngleRight /></Button>
                            <div className='submenu'>
                    <Button> <Link to={"/"}>Shop1</Link></Button>
                    <Button> <Link to={"/"}>Shop2</Link></Button>
                    <Button> <Link to={"/"}>Shop3</Link></Button>
                    <Button> <Link to={"/"}>Shop4</Link></Button>
                    
                    </div>
                    </li>
                          
                   <li> <Button><Link to={"/"}><GiMeat />Meat&SeaFood</Link><FaAngleRight /></Button>
                    {/* submenu creation */}
                    <div className='submenu'>
                    <Button> <Link to={"/"}>Fresh1</Link></Button>
                    <Button> <Link to={"/"}>Fresh2</Link></Button>
                    <Button> <Link to={"/"}>Fresh3</Link></Button>
                    <Button> <Link to={"/"}>Fresh4</Link></Button>
                    
                    </div>
                    </li>
                   <li>  <Button><Link to={"/"}><GiCupcake />Bakery</Link></Button></li>
                   <li> <Button> <Link to={"/"}><MdEmojiFoodBeverage />Beverages</Link></Button>
                    
              
                </li>

                    </ul>
                    </div>
            </div>
                            </div>
                            <div className='col-sm-9 navPart2 d-flex align-items-center'>
                         <ul className='list list-inline sm-auto'>
                            <li className='list-inline-item'><Link to={'/'}>Home <IoHomeOutline/></Link></li>
                            {/*  */}
                            <li className='list-inline-item'><Link to={'/shop'}>Shop <RiShoppingBag4Line/></Link>
                            <div className="subMenu shadow">
                                <a><Link to={'/clothing'}><Button>Clothing</Button></Link></a>
                                <a><Link to={'/footwear'}><Button>Footwear</Button></Link></a>
                                <a><Link to={'/watches'}><Button>Watches</Button></Link></a>
                                <a><Link to={'/bags'}><Button>Bags</Button></Link></a>
                            </div>
                            </li>
                            <li className='list-inline-item'><Link to={'/'}>Meat&seafood <TbMeat/></Link></li>
                            <li className='list-inline-item'><Link to={'/'}>Bakery <MdOutlineBakeryDining/></Link></li>
                            <li className='list-inline-item'><Link to={'/'}>Beverages <MdOutlineEmojiFoodBeverage/></Link></li>
                            <li className='list-inline-item'><Link to={'/'}>Blog <GrBlog/></Link></li>
                            <li className='list-inline-item'><Link to={'/'}>Contact <RiContactsLine/></Link></li>
                        </ul>
                    </div>
                        </div>
                    </div>
                   
                </nav>
    </div>
  )
}

export default Index