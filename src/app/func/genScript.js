import vals from "./def_vals";
import items_json from "../ConfigFiles/items.json"

function calculate_price(id) {
    return Math.floor((vals[id] + (vals.price_multiplayer * vals[id])) * vals.amount_to_add)
}

const script = {
    updateCounter() {
        document.getElementById("count_text").innerText = vals.i;
        document.getElementById("cps_text").innerText = "CPS " + Math.floor(vals.clickPower / 2);

        items_json.map((item) => {
            return function () {
                document.getElementById(item.id + "_amount").innerText = vals[item.id];
                document.getElementById(item.id + "_price_display").innerText = vals.amount_to_add > 1 ? calculate_price(item.id + "_price") : vals[item.id + "_price"];
                localStorage.setItem(item.id, vals[item.id])
                localStorage.setItem(item.id + "_price", vals[item.id + "_price"])
            }
        }).forEach((func) => func());

        localStorage.setItem("amount", vals.i)
        localStorage.setItem("clickPower", vals.clickPower)

        //console.log(vals)
    }
}


export default script