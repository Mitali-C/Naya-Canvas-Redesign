import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Row, Container} from 'react-bootstrap';
import NavBar from './components/navbar/NavBar';
import FabricatingZone from './components/fabricating-zone/FabricatingZone';
import DesigningZone from './components/designing-zone/DesigningZone';
import Canvas from './components/canvas/Canvas';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Container
                className='vh-100 d-flex flex-column content-wrapper'
                fluid
            >
                <Row className='h-100 content-container'>
                    <div>
                        <NavBar></NavBar>
                    </div>
                    <div className='main-content'>
                        <Router>
                            <Switch>
                                <Route
                                    path='/fabricating-zone'
                                    component={FabricatingZone}
                                />
                                <Route
                                    path='/designing-zone'
                                    component={DesigningZone}
                                />
                                <Route path='/'>
                                    <Canvas></Canvas>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default App;
