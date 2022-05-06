import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import React ,{ Component } from 'react';
import Home from './HomeComponent';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes:DISHES,
        }
    }

    

    

    renderDishDetail(dishId){
        if (dishId != null) {
            return(
            <DishDetail 
            dish={this.state.dishes.filter((d) => d.id === dishId)[0]} />)
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                <Redirect to='/home' />
            </Switch>
            {/* <div>
            {this.renderDishDetail(this.state.selectedDish)}
            </div> */}
            <Footer />    
        </div>
        )
    }
}

export default Main;
