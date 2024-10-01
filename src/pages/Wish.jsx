import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slice/wishSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slice/cartSlice'


function Wish() {


  const  {wishlist} = useSelector((state) => state.wishReducer)
 const dispatch = useDispatch()

 const handleAddToCart=(product)=>{
  dispatch(addToCart(product))
  dispatch (removeFromWishlist(product.id))
 }



  return (
    <>
      <div className="container-fluid">
        <h3 className='text-info mt-4'>Wishlist</h3>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

        {
          wishlist?.length>0 ? 
          <>
            {
              wishlist?.map(item => (
                                    
                  <div className="col mb-5">
                  <div className="card h-100">
                    <Link to={`/view/${item?.id}`}>
                      <img className="card-img-top" src={item?.thumbnail} alt="..." />
                    </Link>
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{item?.title}</h5>
                        ${item?.price}
                      </div>
                    </div>
                    <div className='card-footer d-flex justify-content-between'>
                                <button className='btn' onClick={()=>dispatch(removeFromWishlist(item))} >
                                <i className="fa-solid fa-heart-circle-xmark" style={{color: "#e60f0f",}} />
                                </button>
                                <button className='btn'>
                                <i className="fa-solid fa-cart-plus" style={{color: "#34b790",}} onClick={()=>handleAddToCart(item)} />
                                </button>
                          </div>
                  </div>
                </div>
                
              ))
              
            }
          </>
          :
          <h3>no item added</h3>
        }
         


        </div>
      </div>
    </>
  )
}

export default Wish




