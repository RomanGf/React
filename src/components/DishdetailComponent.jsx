import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish(dish) {
        return (
            <Card>
                <div className='d-flex flex-md-row flex-column'>
                    <div className='col-md-5'>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle heading='true'>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </div>
                    {RenderComments(dish.comments)}
                </div>
            </Card>
         )
    }

    function RenderComments(comments) {
        if (comments != null) {
            return(
                <CardBody>
                <h4>Comments</h4>
                <CardText>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                {comment.comment}
                                <div className='my-3'>
                                -- {comment.author}, {new Date(comment.date).toDateString()}
                                </div>
                            </div>
                        )
                    }) }
                </CardText>
            </CardBody>   
        )}
        else {
            return <div></div>
        }
    }


    const DishDetail = (props) => {
        return RenderDish(props.dish)
    }
    // render() {
    //     return this.renderDish(this.props.dish)            
    // }


export default DishDetail;