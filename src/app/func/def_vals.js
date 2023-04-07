const default_vals = {
    i: 0, // initialize to zero, but you can choose any other initial value
    clickPower: 1,
    puska_vz24: 0,
    puska_vz24_price: 100,
    pistol_vz27: 0,
    pistol_vz27_price: 150,
    cs_jezek: 0,
    cs_jezek_price: 250,
    amount_to_add: 1
};

const vals = default_vals

if (localStorage.getItem("amount") !== 0) {
    vals.i = +localStorage.getItem("amount");
}

if (localStorage.getItem("clickPower") > 1) {
    vals.clickPower = +localStorage.getItem("clickPower")
}

if (localStorage.getItem("puska_vz24") > 0) {
    vals.puska_vz24 = +localStorage.getItem("puska_vz24")
    vals.puska_vz24_price = +localStorage.getItem("puska_vz24_price")
}

if (localStorage.getItem("pistol_vz27") > 0) {
    vals.pistol_vz27 = +localStorage.getItem("pistol_vz27")
    vals.pistol_vz27_price = +localStorage.getItem("pistol_vz27_price")
}

if (localStorage.getItem("cs_jezek") > 0) {
    vals.cs_jezek = +localStorage.getItem("cs_jezek")
    vals.cs_jezek_price = +localStorage.getItem("cs_jezek_price")
}

export default vals