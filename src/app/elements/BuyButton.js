import vals from '../func/def_vals.js'
import genScript from "../func/genScript";

function buyButton(props) {
    console.log(vals[props.id + "_price"])
    console.log(props.id + "_price")

    function buy() {
        if (Math.floor(vals[props.id + "_price"]) <= vals.i) {
            vals.i = Math.floor(vals.i - vals[props.id + "_price"]);
            switch (props.id) {
                case "puska_vz24":
                    vals.clickPower = vals.clickPower + +props.power;
                    console.log("Síla: " + vals.clickPower)
                    vals.puska_vz24 = vals.puska_vz24 + vals.amount_to_add;
                    vals[props.id + "_price"] = Math.floor(vals[props.id + "_price"] + 0.10 * vals[props.id + "_price"])
                    break
                case "pistol_vz27":
                    vals.clickPower = vals.clickPower + +props.power;
                    vals.pistol_vz27 = vals.pistol_vz27 + vals.amount_to_add;
                    vals[props.id + "_price"] = Math.floor(vals[props.id + "_price"] + 0.10 * vals[props.id + "_price"])
                    break
                case "cs_jezek":
                    vals.clickPower = vals.clickPower + +props.power;
                    vals.cs_jezek = vals.cs_jezek + vals.amount_to_add;
                    vals[props.id + "_price"] = Math.floor(vals[props.id + "_price"] + 0.10 * vals[props.id + "_price"])
                    break
                default:
                    console.log("Chyba, neexistuje takovej typ")
                    break
            }
        }
        genScript.updateCounter()
    }

    function test_of_this_code() {
        setInterval(function () {
            if (vals[props.id + "_price"] > vals.i && !document.getElementById(props.id).classList.contains("opacity-30")) {
                document.getElementById(props.id).classList.toggle("opacity-30")
            } else if (vals[props.id + "_price"] <= vals.i && document.getElementById(props.id).classList.contains("opacity-30")){
                document.getElementById(props.id).classList.toggle("opacity-30")
            }
        }, 100)
    }

    test_of_this_code()


    return (
        <div
            className={"flex gap-5 flex-col bg-gradient-to-br from-cyan-900 to-cyan-600/0 bg-opacity-30 p-4 rounded-lg border-cyan-900 border-2 shadow-md "}
            id={props.id}>
            <div className={"text-left flex flex-row justify-between"}>
                {props.type} <span id={props.id + "_amount"}>{vals[props.id]}</span>
            </div>
            <div className={"flex flex-row gap-4 justify-between"}>
                <div
                    className={"p-2 bg-gray-900 bg-opacity-20 rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer"}
                    onClick={buy}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <div id={props.id + "_price_display"}>
                    {vals[props.id + "_price"]}
                </div>
            </div>
        </div>
    )
}

export default buyButton;