import React from 'react';
import logo from './logo.svg';
import Piano from './components/piano/Piano';
import MainMenu from './components/MainMenu';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <MainMenu />
            <Container>
                <Piano />
            </Container>
        </div>
    );
}

export default App;
