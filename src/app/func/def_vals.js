const default_vals = {
    i: 0, // initialize to zero, but you can choose any other initial value
    clickPower: 1,
    puska_vz24: 0,
    pistol_vz27: 0,
    cs_jezek: 0,
    amount_to_add: 1
};

const vals = default_vals

if (localStorage.getItem("amount") !== 0) {
    vals.i = +localStorage.getItem("amount");
}

if (localStorage.getItem("clickPower") > 1) {
    vals.clickPower = +localStorage.getItem("clickPower")
}

if (localStorage.getItem("puska_vz24") !== 0) {
    vals.puska_vz24 = +localStorage.getItem("puska_vz24")
}

if (localStorage.getItem("pistol_vz27") !== 0) {
    vals.pistol_vz27 = +localStorage.getItem("pistol_vz27")
}

if (localStorage.getItem("cs_jezek") !== 0) {
    vals.cs_jezek = +localStorage.getItem("cs_jezek")
}

export default vals