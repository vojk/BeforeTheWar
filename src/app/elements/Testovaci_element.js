import vals from '../func/def_vals.js'
import genScript from '../func/genScript.js'

function counter() {
    vals.i = vals.i + vals.clickPower;
    genScript.updateCounter()
}

function Testovaci_element() {
    return (
        <div className={"p-4"}>
            <p id={"count_text"} className={"text-xl p-4"}>{vals.i}</p>
            <span onClick={counter}
                  className={"cursor-pointer select-none bg-gradient-to-tl from-cyan-500/25 to-blue-500/25 p-2 pe-9 pl-9 rounded-xl bg-opacity-25 hover:drop-shadow-xl"}>Klikni na mě</span>
            <p className={"text-xl mt-2.5"} id={"cps_text"}>CPS {Math.floor(vals.clickPower / 2)}</p>
        </div>
    )
}

export default Testovaci_element