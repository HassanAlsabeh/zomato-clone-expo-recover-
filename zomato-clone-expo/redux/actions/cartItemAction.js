import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const fetchCartItem = (userId, restaurantId) => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get(
        `/cartItem/getitems/${userId}/${restaurantId}`
      );
      const data = response.data.data;
      dispatch({ type: ActionTypes.CARTITEMFETCH, payload: data });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log("eeeeeee", err.message);
    }
  };
};

export const checkout = (
  cart_items,
  restaurant_id,
  user_id,
  total_price,
  address,
  navigation
) => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.post(
        `/cartItem/checkout`,
        {
          cart_items,
          restaurant_id,
          user_id,
          total_price,
          address,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = response.data;
      if (data.success) {
        dispatch({ type: ActionTypes.CHECKOUT, payload: data.data });
        navigation.navigate("OrderCompleted");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log("eeeeeee", err.message);
    }
  };
};
