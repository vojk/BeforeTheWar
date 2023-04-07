export default function MenuButton(props) {
    const handleClick = event => {
        let text = props.id.replace("_button", "_menu")
        // 👇️ toggle isActive state on click
        document.getElementById(text).classList.toggle("hidden")
    };

    return (
        <div className={"p-3 bg-blue-950 bg-opacity-40 rounded-xl cursor-pointer w-72"} onClick={handleClick}>
                <span className={"flex items-center gap-4 ml-1"}>
                    <img src={props.img} alt=""/>
                    <p className={"text-xl"}>{props.text}</p>
                </span>
        </div>
    )
}
