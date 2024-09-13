import React, {Component} from "react";
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Botones extends Component {

    render() {
        
        return(
            <div><Container className="my-4">
                <Button variant="primary" className="me-2">Button 1</Button>
                <Button variant="secondary">Button 2</Button></Container></div>
        )
    }
}