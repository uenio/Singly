import React from 'react';
import logo from './logo.svg';
import Piano from './components/piano/Piano';
import MainMenu from './components/MainMenu';

function App() {
    return (
        <div className="App">
            <MainMenu />
            <br />
            <Piano />
        </div>
    );
}

export default App;
