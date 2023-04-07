import './styles/App.css';
import './styles/output.css';
import Test from './elements/InfoPanel';
import Menu from './elements/menu';
import React from "react";
import cps from './func/cps';
import click_listener from './func/amount_to_buy_handler'

function App() {
    click_listener()
    cps()
    return (
        <div className="App">
            <header className="App-header">
                <Test/>
                <div className={"flex absolute top-0 right-0 h-screen overflow-scroll"}>
                    <Menu></Menu>

                </div>
            </header>
        </div>
    );
}

export default App;
