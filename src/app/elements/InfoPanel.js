import vals from '../func/def_vals.js'
import genScript from '../func/genScript.js'
import dollar_sign from '../svg/dollar-sign.svg'

function counter() {
    vals.i = vals.i + vals.clickPower;
    genScript.updateCounter()
}

export default function InfoPanel() {
    return (
        <div className={"p-4 flex flex-col items-center"}>
            <p className={"text-xl p-4"}><span id={"count_text"}>{vals.i}</span> $</p>
            <span onClick={counter}
                  className={"flex cursor-pointer select-none bg-gradient-to-br from-cyan-500/25 to-blue-500/0 p-6 rounded-full bg-opacity-25 border-cyan-800 border aspect-square items-center hover:drop-shadow-xl w-fit h-fit"}>
                <img src={dollar_sign} alt=""/>
            </span>
            <p className={"text-xl mt-2.5"} id={"cps_text"}>CPS {Math.floor(vals.clickPower / 2)}</p>
        </div>
    )
}
