export default function ResearchButton(props) {
    return (
        <div
            className={"w-16 h-16 bg-gradient-to-br from-cyan-800 via-cyan-900/60 via-60% to-cyan-950/0 rounded-3xl flex items.json-center justify-center border-cyan-800 border shadow-lg cursor-pointer"}>
            <img src={props.ico} alt="" className={"w-8"}/>
        </div>
    )
}