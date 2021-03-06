import React from 'react';
import IProduct from '../../types/IProduct';
import ProductCard from './ProductCard';

interface IProductListProps {
    products: IProduct [],
    environment?: string
}

const ProductList = (props:IProductListProps): JSX.Element => {

    return (
        <div className="max-w-7xl mx-auto px-8 pb-5">
            <div className="grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                
                {props.products.map((product) => {
                    
                    return (
                        <ProductCard 
                            key={product.id}
                            id = {product.id}
                            title = {product.title}
                            image = {product.image}
                            price = {product.price}
                            stock={product.amount}
                            promotion = {product.promotion}
                            environment = {props.environment}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;

