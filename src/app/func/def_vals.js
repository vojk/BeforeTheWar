import items_json from "../ConfigFiles/items.json";

const default_vals = {
    i: 0, // initialize to zero, but you can choose any other initial value
    clickPower: 1,
    price_multiplayer: 0.05,
    amount_to_add: 1
};

const vals = default_vals

items_json.map((item) => {
    return function () {
        vals[item.id] = 0
        vals[item.id + "_price"] = item.price
        if (localStorage.getItem(item.id) > 0) {
            vals[item.id] = +localStorage.getItem(item.id)
            vals[item.id + "_price"] = +localStorage.getItem(item.id + "_price")
        }
    }
}).forEach((func) => func());


if (localStorage.getItem("amount") !== 0) {
    vals.i = +localStorage.getItem("amount");
}

if (localStorage.getItem("clickPower") > 1) {
    vals.clickPower = +localStorage.getItem("clickPower")
}


export default vals