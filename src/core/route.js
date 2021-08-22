import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/home/HomeScreen";
import LayananScreen from "../screens/layanan";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/produk" component={ProductScreen} />
      <Route path="/layanan" component={LayananScreen} />
    </Switch>
  );
}

export default Routes;
