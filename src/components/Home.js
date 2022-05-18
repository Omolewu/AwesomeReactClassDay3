import React from 'react'
import Header from './common/Header';
import Items from './Items';
import { products } from "./Data/Products";
function Home() {

    return (
        <React.Fragment>
            <Header></Header>
            {products.map((value, index) => {
                const { img, product, price } = value;
                return <Items key={index} img={img} price={price} product={product} />
                //  return <Items key={index} {...value} />

            })}

        </React.Fragment>
    )
}
export default Home;