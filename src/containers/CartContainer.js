import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as Message from "../constants/Message";
import CartResult from "../components/CartResult";
import { actChangeMessage, actRemoveProductInCart, actUpdateProductInCart } from "../actions";

class CartContainer extends Component {
  showCartItem = (cart) => {
    var { onDeleteProductInCart,onChangeMessage,onUpdateProductInCart } = this.props;
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart ={onUpdateProductInCart}
          ></CartItem>
        );
      });
    }
    return result;
  };

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.isRequired,
    })
  ).isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProductInCart:PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage : (message) =>{
      dispatch(actChangeMessage(message))
    },
    onUpdateProductInCart :(product,quantity)=>{
      dispatch(actUpdateProductInCart(product,quantity))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
