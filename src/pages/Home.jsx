import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {fetchProductsThunk, nextPage} from '../redux/slice/prodectSlice'
import Spinner from 'react-bootstrap/Spinner';
import { addToWishlist } from '../redux/slice/wishSlice';
import { addToCart } from '../redux/slice/cartSlice';
import {prevPage } from '../redux/slice/prodectSlice';

function Home() {


  const dispatch = useDispatch()

  const {product,loading,error, productPerPage,currentPage}=useSelector((state)=>state.productReducer)

  let totalpage = product.length/productPerPage
  const lastProductIndex = productPerPage * currentPage
  const firstProductIndex = lastProductIndex - productPerPage
  const visibleProduct = product.slice(firstProductIndex,lastProductIndex)

  
  if(totalpage<1){
    totalpage=1
  }

  useEffect(()=>{
    dispatch(fetchProductsThunk())
  },[])


  const next=()=>{
    if(currentPage<totalpage){
      dispatch(nextPage())
    }
  }

  const prev=()=>{
    if (currentPage>1){
      dispatch(prevPage())
    }
  }


 console.log(product)


  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {
              loading ?
                <h2>
                  <Spinner animation="border" role="status">
              </Spinner>
              loading
              </h2>
              :
              <>
                {
                  error ? 
                    <h2 className='text-danger'>{error}</h2>
                  :
                  <>
                    {
                      visibleProduct?.map(item =>(

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
                                <button className='btn' onClick={()=>dispatch(addToWishlist(item))}>
                                <i className="fa-solid fa-heart-circle-plus" style={{color: "#ed0707",}} />
                                </button>
                                <button className='btn'>
                                <i className="fa-solid fa-cart-plus" style={{color: "#34b790",}} onClick={()=>dispatch(addToCart(item))}/>
                                </button>
                          </div>
                         
                        </div>
                      </div>
                      ))
                    }
                    
                  </>
                }
              </>
}
          </div>
        </div>
      </section >

      <div className='text-center'>
        <button className='btn ' onClick={prev}>
        <i className="fa-solid fa-angles-left" />
        </button>
        {' '}
        {currentPage}/{totalpage}
        {' '}
        <button className='btn' onClick={next}>
        <i className="fa-solid fa-angles-right" />
        </button>
      </div>
    </>
  )
}

export default Home
