import shop_cart from './../svg/shopping-cart.svg'
import research from './../svg/search.svg'
import MenuButton from "./MenuButton";
import Button from "./BuyButton";
import React from "react";
import ResearchWindow from "./ResearchWindow";
import items_json from "../ConfigFiles/items.json"

function menu() {
    return (
        <div className={"p-4 flex flex-col gap-2"}>
            <MenuButton img={shop_cart} text={"Nákup"} id={"buy_button"} buyMenu={true}></MenuButton>
            <div className={"flex flex-col gap-2"} id={"buy_menu"}>
                {items_json.map((items_json) => (
                    <Button type={items_json.name} id={items_json.id} power={items_json.power}/>
                ))}
            </div>
            <MenuButton img={research} text={"Výzkum"} id={"research_button"} buyMenu={false}></MenuButton>
            <div id={"research_menu"}>
                <ResearchWindow></ResearchWindow>
            </div>
        </div>
    )
}

export default menu