import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classes from './UserDetailsForm.module.css'

const UserDetailsForm = () => {
    return (
        <Form className={classes.formBody}>
            <FormGroup>
                <Label for="fName">Name</Label>
                <Input type="text" name="name" id="fName" placeholder="Enter your name"  required/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Table Number</Label>
                <Input type="number" name="tableNumber" id="fTableNumber" placeholder="Enter your table number"  required/>
                <FormText>Table number is written on table.</FormText>
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword">Whatsapp Number</Label>
                <Input size="10" type="number" name="whatsappNumber" id="fWhatsappNumber" placeholder="Enter your whatsapp number" required/>
                <FormText>Enter 10 digit without '+91'</FormText>
            </FormGroup>
        </Form>
    );
}

export default UserDetailsForm;