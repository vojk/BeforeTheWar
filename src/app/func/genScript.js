import vals from "./def_vals";

const script = {
    updateCounter() {
        document.getElementById("count_text").innerText = vals.i;
        document.getElementById("puska_vz24_amount").innerText = vals.puska_vz24;
        document.getElementById("puska_vz24_price_display").innerText = vals.puska_vz24_price;
        document.getElementById("pistol_vz27_amount").innerText = vals.pistol_vz27;
        document.getElementById("pistol_vz27_price_display").innerText = vals.pistol_vz27_price;
        document.getElementById("cs_jezek_amount").innerText = vals.cs_jezek;
        document.getElementById("cs_jezek_price_display").innerText = vals.cs_jezek_price;
        document.getElementById("cps_text").innerText = "CPS " + Math.floor(vals.clickPower / 2);
        localStorage.setItem("puska_vz24", vals.puska_vz24)
        localStorage.setItem("puska_vz24_price", vals.puska_vz24_price)
        localStorage.setItem("pistol_vz27", vals.pistol_vz27)
        localStorage.setItem("pistol_vz27_price", vals.pistol_vz27_price)
        localStorage.setItem("cs_jezek", vals.cs_jezek)
        localStorage.setItem("cs_jezek_price", vals.cs_jezek_price)
        localStorage.setItem("amount", vals.i)
        localStorage.setItem("clickPower", vals.clickPower)

        console.log(vals)
    }
}


export default script