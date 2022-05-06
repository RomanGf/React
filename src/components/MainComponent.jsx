import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import React ,{ Component } from 'react';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes:DISHES,
            selectedDish:null
        }
    }

    onDishSelected(dishId) {
        this.setState({selectedDish: dishId});
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
        return (
        <div>
            <Header />
            <Menu dishes={this.state.dishes} 
                onClick={(dishId) => this.onDishSelected(dishId)}/>
            <div>
            {this.renderDishDetail(this.state.selectedDish)}
            </div>
            <Footer />    
        </div>
        )
    }
}

export default Main;
