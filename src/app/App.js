import './styles/App.css';
import './styles/output.css';
import Test from './elements/Testovaci_element';
import Button from './elements/Buy_Button';
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
                <div className={"flex flex-col gap-2 absolute top-0 right-0"}>
                    <Button price={"100"} type={"Puška vz. 24"} id={"puska_vz24"} power={"1"}/>
                    <Button price={"150"} type={"Pistol vz. 27"} id={"pistol_vz27"} power={"4"}/>
                    <Button price={"250"} type={"ČS ježek"} id={"cs_jezek"} power={"6"}/>
                </div>


            </header>
        </div>
    );
}

export default App;
