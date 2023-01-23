import Image from "next/image"

export default function Header() {
    return (
        <div className="flex rounded-b-lg shadow-md h-16 items-center justify-between bg-[#FFFFFF]">
            <h1 className="ml-4 font-medium">Welcome</h1>
            <Image className="mr-5" src={"/icon.png"} alt="pfp" width={40} height={40}/>
        </div>
    )
}