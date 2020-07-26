import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
// import firebase from '../Services/firebase'

class MentorForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            module: "",
            email: "",
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(event) {
        let value = event.target.value
        let inputName = event.target.name
        console.log([inputName])
        this.setState({ [inputName]: value })
        console.log(value)
    }

    onSubmitHandler(){
        let name = this.state.name
        let module = this.state.module
        let email = this.state.email

        let mentorObjet = {name, module, email}

        console.log(mentorObjet)

        let url = 'https://react-vercel-9aa66.firebaseio.com/mentors.json';
        let data = mentorObjet;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( res => res.json())
        .catch(error => console.error('Error: ',error))
        .then(response => console.log('Success: ',response))
    }

    componentDidMount(){
        // console.log('Hola ustedes')
        fetch('https://react-vercel-9aa66.firebaseio.com/.json')
        .then(
            response => {
                response.json().then(
                    json => {
                        console.log(json)
                    }
                )
            }
        )
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="12">
                        <Form className="bg-dark text-white p-3 mt-3 border rounded">
                            <FormGroup>
                                <Label for="exampleEmail">Nombre:</Label>
                                <Input type="text" name="name" placeholder="with a placeholder" onChange={this.onChangeHandler} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Modulo</Label>
                                <Input type="text" name="module" placeholder="with a placeholder" onChange={this.onChangeHandler} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" placeholder="with a placeholder" onChange={this.onChangeHandler} />
                            </FormGroup>
                            <Button onClick={this.onSubmitHandler}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MentorForm;
