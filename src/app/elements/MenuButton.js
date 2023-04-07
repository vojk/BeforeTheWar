import Plus from './../svg/plus.svg'
import vals from "../func/def_vals";

export default function MenuButton(props) {
    const handleClick = event => {
        let text = props.id.replace("_button", "_menu")
        // 👇️ toggle isActive state on click
        document.getElementById(text).classList.toggle("hidden")
    };

    return (
        <div className={"p-3 bg-blue-950 bg-opacity-40 rounded-xl cursor-pointer w-72"} onClick={handleClick}>
                <span className={"flex items-center justify-between gap-4 ml-1"}>
                    <div className={"flex gap-4 items-center"}>
                        <img src={props.img} alt=""/>
                        <p className={"text-xl"}>{props.text}</p>
                    </div>
                    <div className={props.buyMenu ? "block" : "hidden"}>
                        <p className={"flex text-xl"}><img src={Plus} alt="" className={"w-4"}/><span id={"howMuchToAdd"}>{vals.amount_to_add}</span></p>
                    </div>
                </span>
        </div>
    )
}
