import React from 'react'
import product1 from "../../Assets/Images/product1.webp"
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
function ProductBanner() {
  return (
    <div className="item productItem">
                  <div className="imageWrapper">
                    <img
                      src={product1}className="w-100" alt="">

                      </img>


                  </div>
                  <span className="badge bg-primary">25%</span>

                  <div className="action">
                    <button><TfiFullscreen /></button>
                    <button><IoMdHeartEmpty /></button>
                  </div>
                  <div className="productInfo">
                    <h6 className="text-aligns-center">All Natural Italian-Style Chicken Meatballs</h6>
                    <div className="info">
                  <div className="d-flex">
                  <span className="oldprice">$20.00</span>
                  <span className="newprice">$15.00</span>
                  </div>
                <span className="text-sucess d-block">In Stock</span>
                    {/* <Stack spacing={1}> */}
                      <Rating
                        name="half-rating-read"
                        size="small"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      />
                   
                    {/* </Stack> */}
                    </div>
                  </div>
                </div>
  )
}

export default ProductBanner