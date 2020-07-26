import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Table } from 'reactstrap';
// import firebase from '../Services/firebase'

class MentorList extends Component {
    constructor() {
        super();
        this.state = {
            mentorlist: {},
        }
    }

/*    onChangeHandler(event) {
        let value = event.target.value
        let inputName = event.target.name
        console.log([inputName])
        this.setState({ [inputName]: value })
        console.log(value)
    }
*/
    componentDidMount() {
        console.log('Hola ustedes')
        fetch('https://react-vercel-9aa66.firebaseio.com/mentors.json')
            .then(
                response => {
                    response.json().then(
                        json => {
                            console.log(json)
                            this.setState({ mentorlist: json })
                        }
                    )
                }
            )
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="6">
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Modulo</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.state.mentorlist).map((key, index) => {
                                        let mentorname = this.state.mentorlist[key].name;
                                        let mentoremail = this.state.mentorlist[key].email;
                                        let mentormodule = this.state.mentorlist[key].module;

                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{mentorname}</td>
                                                <td>{mentormodule}</td>
                                                <td>{mentoremail}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MentorList;
