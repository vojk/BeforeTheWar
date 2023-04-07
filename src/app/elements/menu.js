import shop_cart from './../svg/shopping-cart.svg'
import research from './../svg/search.svg'
import MenuButton from "./MenuButton";
import Button from "./BuyButton";
import React from "react";

function menu() {
    return (
        <div className={"p-4 flex flex-col gap-2"}>
            <MenuButton img={shop_cart} text={"Nákup"} id={"buy_button"}></MenuButton>
            <div className={"flex flex-col gap-2"} id={"buy_menu"}>
                <Button type={"Puška vz. 24"} id={"puska_vz24"} power={"1"}/>
                <Button type={"Pistol vz. 27"} id={"pistol_vz27"} power={"4"}/>
                <Button type={"ČS ježek"} id={"cs_jezek"} power={"6"}/>
            </div>
            <MenuButton img={research} text={"Výzkum"}></MenuButton>
        </div>
    )
}

export default menu