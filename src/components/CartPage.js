import React from 'react'

import {useSelector} from 'react-redux';
import {selectfood} from '../features/Food/foodSlice';
import ListRecpie from './ListRecpie';

function CartPage() {
    
  const cart=useSelector(selectfood);
  React.useEffect(() => {
    console.log(cart)
  }, [cart])
    return (
        <div>
            <ListRecpie data={cart} sortby={false} animate={true}/>
        </div>
    )
}

export default CartPage
