import React, { useEffect } from 'react';

import { IRootState } from '../index';
import { useSelector, useDispatch } from "react-redux";
import Loading from '../components/UI/Loading';
import NavBar from '../components/Header/NavBar';
import ICategory from '../types/ICategory';
import IOrderItem from '../types/IOrderItem';
import OrderItem from '../components/OrderItem/OrderItem';

const Cart = (): JSX.Element => {

    //const loading = useSelector<IRootState, boolean>(state => state.categories.loading);  
    const categories = useSelector<IRootState, ICategory[]>(state => state.categories.categories);
    const orderItems = useSelector<IRootState, IOrderItem[]>(state => state.cart.orderItems);

    let initialValue = 0
    const priceSum: number = orderItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.totalPrice, initialValue
    )

    return (
        <div>
            <NavBar categories = {categories}/>
            <div className="max-w-7xl mx-auto mt-10 bg-bg">
                <div className="flex flex-wrap shadow-md my-10">

                    <div className="lg:w-3/4 sm:w-full bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{orderItems.length} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {orderItems.map((item) => {
                                        return (
                                            <OrderItem 
                                                key={item.id}
                                                id = {item.id}
                                                amount ={item.amount}
                                                image = {item.image}
                                                totalPrice = {item.totalPrice}
                                                unitPrice = {item.unitPrice}
                                                title = {item.title}
                                            />
                                        )
                        })}

                        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10 text-primary">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {orderItems.length}</span>
                            <span className="font-semibold text-sm">{priceSum}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 w-full text-sm">
                                <option>Standard shipping - $00.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-secondary px-5 py-2 text-sm text-primaryLight uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{priceSum}</span>
                            </div>
                            <button className="bg-secondary font-semibold py-3 text-sm text-primaryLight uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Cart;