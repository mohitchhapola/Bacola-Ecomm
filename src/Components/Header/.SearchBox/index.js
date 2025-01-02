import React from 'react'
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

function index({placeholder="search Your Item"}) {
  return (
    <div className='headerSearch ms-3 me-3'>
                                    <input type='text' placeholder={placeholder} />
                                    <Button>  <IoSearch /></Button>
                                    </div>
  )
}

export default index