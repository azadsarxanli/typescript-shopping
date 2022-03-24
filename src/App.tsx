import { useState } from "react";
import { useQuery } from "react-query";

//?components
import Item from "./Item/Item";
import Drawer from "@material-ui/core/Drawer";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core";
//styles
import { Wrapper } from "./App.styles";
import "./App.scss";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};
const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <CircularProgress className="circular-progress" />;
  if (error) return <div>Something went wrong</div>;
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12}></Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
