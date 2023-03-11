import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { removeCartProduct, setCartProducts } from '../slices/cartSlice';
import axios from 'axios';
import { useState } from 'react';
import '../Styles/Cards.css'
import { Button } from 'react-bootstrap';
import { clearCart, addProductToCart } from '../slices/cartSlice';
import { addNewOrder, clearOrders } from '../slices/ordersSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart.cartProducts)
  const user = useSelector(state => state.users.userData.username)
  const orders = useSelector(state => state.orders.ordersData)
 
  let totalAmount = 0
  for (let i of products) totalAmount += (+i.price)

  const remove = (ele) => {
    dispatch(removeCartProduct(ele))
  }

  const handleOrder = (x) => {
    
    let date = new Date().toDateString();
    dispatch(addNewOrder({ orders: x, amount: totalAmount,date:date }))
    dispatch(clearCart());
    alert("Order Placed Successfully")
  }
  return (
    <div>
      <h1 className='code text-center m-2'> My Cart</h1>

      <div className='mt-5 row row-cols-sm-1 row-cols-lg-4 row-cols-md-3 mb-5'>
        {
          products.map(ele =>
            <div className='col'>
              <Card style={{ width: '18rem' }} className="cardbg">
                <Card.Img variant="top" src={ele.image} />
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text>
                    <p>
                      {ele.features}
                    </p>
                    <h4>{ele.price}</h4>
                    <button className="btn homeCardButton" onClick={()=>remove(ele)}>Remove from Cart</button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
        }
      </div>
      {products.length > 0 ?
       <div className="row mt-5 mb-5">
        <div className="col col-sm-6 col-md-5 col-lg-4 p-5 text-center"> <h4>Total Price  : {totalAmount}</h4></div>
        <div className="col col-sm-6 col-md-5 col-lg-2 p-5 text-center">
          <button className="btn homeCardButton" onClick={()=>handleOrder(products)}> Buy Now</button>
        </div>
       </div>
        :
        <></>
      }
    </div>
  )
}

export default Cart