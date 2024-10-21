// src/hooks/useWishlist.js
import { useDispatch, useSelector } from "react-redux";
import { userActions } from '../../redux/reducer';

export const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.user.wishList); // Access wishlist from state

  const isWishlisted = (itemId) => wishlist?.some((wishlistedItem) => wishlistedItem.id === itemId);

  const toggleWishList = (e, watch) => {
    e.stopPropagation();
    if (isWishlisted(watch.id)) {
      dispatch(userActions.removeFromWishList(watch.id));
    } else {
      dispatch(userActions.addToWishList(watch));
    }
  };

  return { wishlist, isWishlisted, toggleWishList };
};
