
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,increase,decrease,checkout } from '../redux/slice/cartSlice'
import { useNavigate } from 'react-router-dom'


function  Cart() {

  const {cart} = useSelector((state) => state.cartReducer)


  const dispatch = useDispatch()
  const nav = useNavigate()

  const handleCheckOut=()=>{
    dispatch(checkout())
    nav('/')
  }

  return (
    <>
      <div className='row '>
        <div className='col-8'>
          <h3>Cart Summary</h3>
         

        {
          cart?.length > 0 ?
          <table className='table table-bordered shadow mt-3'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Count</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            
          {
            cart?.map(item => (
              <tr>
              <td>{item.id}</td>
              <td>{item?.title}</td>
              <td>
                <img src={item?.thumbnail}
                  width={'50%'} alt="" />
              </td>
              <td>
                <button className="btn btn-info" onClick={()=>dispatch(increase(item?.id))}>+</button>
                <input type="text" value={item?.quantity} readOnly className='forn-control w-25' />
                <button className="btn btn-info" onClick={()=>dispatch(decrease(item?.id))}>-</button>
              </td>
              <td>{item?.price}</td>
              <td>
                <button className='btn'onClick={()=> dispatch(removeFromCart(item?.id))}>
                  <i className='fa-solid fa-trash' style={{ color: "e60f19", }} />
                </button>
              </td>
            </tr>
            ))
          }


          </tbody>
        </table>

        :
         <h3 className='text-center text-danger'>No items available in cart</h3>
        }



        </div>
      
      <div className='col-4'>
        <div className="border shadow bg-light mt-5 p-4">
          <h4 className='text-success'>Total Products : {cart?.length}</h4>
          <h4 className='text-success'>Total Amount : {
            cart?.reduce((prev,item)=> prev+(item?.price*item?.quantity),0)
            }</h4>
        </div>
        <div className='d-grid'>
          <button className="btn btn-info" onClick={()=>handleCheckOut()}>CheckOut</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Cart
