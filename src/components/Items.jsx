import React, {Fragment} from 'react';
function Items(props) {
    const { img, product, price } = props;
    // console.log(props)
    return (
        <Fragment>
            <div>
                <img src={img} alt="" style={{ width: "100px", height: '100px' }} />
                <br />
                <p>{product}</p>
                <p>${price}</p>
                <button>Add to cart</button>
            </div>
        </Fragment>
    )
}
export default Items;