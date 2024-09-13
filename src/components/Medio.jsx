import React, { Component } from "react";
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './medi.css'



export default class Medio extends Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Container className="my-4">
                    <h2 className="mb-3">Computer and Laptop</h2>
                    <h1 className="mb-5">Accesories</h1>
                    <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        <br />
                        Accusamus asperiores ratione quisquam autem? Suscipit voluptates 
                        <br />cum eveniet ea quia asperiores nulla non dolor! Illo omnis eos <br />debitis aut consequatur tempora!</p>
                    
                </Container>
            </div>
        );
    }
}
