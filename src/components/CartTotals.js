import React from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton';

export default function CartTotals({value,history}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto 
                    col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className="btn btn-outline-danger 
                            text-uppercase mb-3 px-5" type="button"
                            onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal:</span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax:</span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total:</span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <PaypalButton total={cartTotal} clearCart={clearCart}
                        history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}