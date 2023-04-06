import vals from "./def_vals";

const script = {
    updateCounter() {
        document.getElementById("count_text").innerText = vals.i;
        document.getElementById("puska_vz24_amount").innerText = vals.puska_vz24;
        document.getElementById("pistol_vz27_amount").innerText = vals.pistol_vz27;
        document.getElementById("cs_jezek_amount").innerText = vals.cs_jezek;
        document.getElementById("cps_text").innerText = "CPS " + Math.floor(vals.clickPower / 2);
        localStorage.setItem("puska_vz24", vals.puska_vz24)
        localStorage.setItem("pistol_vz27", vals.pistol_vz27)
        localStorage.setItem("cs_jezek", vals.cs_jezek)
        localStorage.setItem("amount", vals.i)
        localStorage.setItem("clickPower", vals.clickPower)
        console.log(vals)
    }
}


export default script