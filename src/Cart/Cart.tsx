import CartItem from "../CartItem/CartItem";

//Styles
import { Wrapper } from "./Cart.styles";
//Types
import { CartItemType } from "../App";
type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return <Wrapper></Wrapper>;
};
