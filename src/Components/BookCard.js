import React from 'react'
import {
    Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


const BookCard = (props) => {
    return (
        <>
            <Card className="font">
                <img className="img" src={props.imageURL} />
                <CardBody>
                    <CardTitle>  {props.title}</CardTitle>
                    <Button color="danger" className="button"><div className="font-button">See more</div></Button>
                </CardBody>
            </Card>

        </>
    )
}

export default BookCard;

