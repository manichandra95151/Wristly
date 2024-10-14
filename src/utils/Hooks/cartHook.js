import { useSelector, useDispatch } from "react-redux";
import { userActions } from '../../redux/reducer';

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.user.cartItems);

  // Check if an item is in the cart
  const isAddedToCart = (itemId) => {
    return cartItems?.some(cartItem => cartItem.id === itemId);
  };

  // Toggle item in the cart
  const toggleCartItem = (e, item) => {
    e.stopPropagation();
    if (isAddedToCart(item.id)) {
      dispatch(userActions.removeFromCart(item.id));
    } else {
      dispatch(userActions.addToCart(item));
    }
  };

  return { isAddedToCart, toggleCartItem };
};
