import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../store/actions/Products/index';
import { IRootState } from '../index';
import { useThunkDispatch } from '../store/hooks';
import { useSelector, useDispatch } from "react-redux";
import IProduct from '../types/IProduct';
import Loading from '../components/UI/Loading';
import NavBar from '../components/Header/NavBar';
import { productsReducer } from '../store/reducers/Products/productsReducer';
import ICategory from '../types/ICategory';

const ProductPage = (): JSX.Element => {

    const dispatch = useThunkDispatch();
    const product = useSelector<IRootState, IProduct>(state => state.products.product);  
    const loading = useSelector<IRootState, boolean>(state => state.products.loading);  
    const categories = useSelector<IRootState, ICategory[]>(state => state.categories.categories);

    interface ParamTypes {
        id: string
    }

    let {id} = useParams<ParamTypes>();

    useEffect(() => {
        dispatch(getProductById(id));
    }, []);

    return (

        <div>
            <NavBar categories = {categories}/>
            {!loading? (
                <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-5 font-sans ">
                    <img className="w-2/4 h-auto" src={product.image} alt={product.title} />
                    <p className="my-3 text-lg font-semibold tracking-wide"> {product.title} </p>
                    <p className="w-2/4 leading-relaxed"> {product.description} </p>
                </div>
            ) : <Loading/>}
            
            
        </div>
    )
    
}

export default ProductPage;