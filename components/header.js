import Image from "next/image"

export default function Header() {
    return (
        <div className="flex rounded-b-lg shadow-md h-16 items-center justify-between">
            <h1 className="ml-4 font-medium">Welcome, Rares</h1>
            <Image className="mr-5" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"} alt="pfp" width={40} height={40}/>
        </div>
    )
}