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
                    <Button color="danger" className="button" onClick={props.del}><div className="font-button">Delete</div></Button>
                    <Button color="success" className="font button left"  onClick={props.update}>Update</Button>
                </CardBody>
            </Card>

        </>
    )
}

export default BookCard;

