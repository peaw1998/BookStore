import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const FormAdd = (props) => {

    const [title, setTitle] = useState('')
    const [imageURL, setImageURL] = useState('')


    return (
        <>
            <div >
                <Form className="form" >
                    <Label className="font br">Add Book</Label>
                    <Input placeholder='Title' className="font br"  onChange={(e) => { setTitle(e.target.value) }} />
                    <Input placeholder='URL' className="font br"  onChange={(e) => { setImageURL(e.target.value) }}/>
                    <Button color="primary" className="font br"  onClick={() =>{ props.onClick({ title, imageURL }) }}>Add</Button>
                </Form>
            </div>

        </>
    )
}

export default FormAdd;