import cloud from './../svg/cloud-lightning.svg'
import ResearchButton from "./research_comps/ResearchButton";

export default function ResearchWindow() {
    return (
        <div className={"grid grid-cols-3 bg-blue-950/40 rounded-xl p-4 gap-4 justify-items-center"}>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
            <ResearchButton ico={cloud}></ResearchButton>
        </div>
    )
}