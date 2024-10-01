import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../pages/Cart';
import { useState } from 'react';
import { search } from '../redux/slice/prodectSlice';

function Header() {

  const [key,setKey] = useState("")

  const dispatch = useDispatch()

  const searchWithKey = ()=>{
    dispatch(search(key))
  }

  const {wishlist} = useSelector((state)=> state.wishReducer)
  const {cart} = useSelector((state)=> state.cartReducer)

  



  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <i className='fa-solid fa-bag-shopping fa-xl' style={{ color: "#B197FC", }} />{' '}
            REDUX CART
          </Navbar.Brand>
          <div className='d-flex'>
            <div className='d-flex'>
              <input type="text" value={key} onChange={(e)=>setKey(e.target.value)} className='form-control  me-2' placeholder='Search' />

              <button className='btn btn-primary me-5 ' onClick={searchWithKey}>

                search
              </button>
            </div>
            <Link to="/wish" className='btn btn-outline-dark me-4'>
              <i className="fa-solid fa-heart" style={{ color: "#ec0e0e" }} />
              {' '}
              Wishlist
              <span className='badge bg-dark ms-2'>
                {wishlist?.length}
              </span>
            </Link>
            <Link to="/cart" className='btn btn-outline-dark'>
              <i className='fa-solid fa-cart-shopping' style={{ color: "#63E6BE" }} />
              {' '}
              Cart
              <span className='badge bg-dark ms-2'>
                {cart?.length}
              </span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
