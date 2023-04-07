import vals from '../func/def_vals.js'
import genScript from '../func/genScript.js'

function counter() {
    vals.i = vals.i + vals.clickPower;
    genScript.updateCounter()
}

function InfoPanel() {
    return (
        <div className={"p-4 flex flex-col items-center"}>
            <p id={"count_text"} className={"text-xl p-4"}>{vals.i}</p>
            <span onClick={counter}
                  className={"flex cursor-pointer select-none bg-gradient-to-tl from-cyan-500/25 to-blue-500/25 p-4 rounded-xl bg-opacity-25 border-blue-950 border aspect-square items-center hover:drop-shadow-xl w-fit h-fit"}>
                CSK
            </span>
            <p className={"text-xl mt-2.5"} id={"cps_text"}>CPS {Math.floor(vals.clickPower / 2)}</p>
        </div>
    )
}

export default InfoPanel