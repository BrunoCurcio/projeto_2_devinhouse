import { BrowserRouter, Switch, Route } from "react-router-dom";
import Companies from "./Components/Companies";
import Login from "./Components/Login";
import Map from "./Components/Map";
import Products from "./Components/Products";
import Header from "./Components/Header";
import StoredProducts from "./Components/Stored_products";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/> 
                <div>
                    <Header/>
                    <Route path="/map" component={Map}/>   
                    <Route path="/companies" component={Companies}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/stored" component={StoredProducts}/>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;