import Image from "next/image"

export default function Header() {
    return (
        <div className="flex rounded-b-lg shadow-md h-16 items-center justify-between md:justify-end md:flex-row-reverse bg-[#FFFFFF]">
            <h1 className="ml-10 md:ml-1 font-medium">ToDo</h1>
            <Image className="mr-10 md:ml-10 md:mr-2" src={"/icon.png"} alt="pfp" width={40} height={40}/>
        </div>
    )
}