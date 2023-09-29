
import Link from "next/link"
import logo from "../../../assets/logo.png"
import Image from "next/image"
import { SearchBar } from "../SearchBar"


export const MainMenu = ({items}) => {


//  console.log(items)

    return (
        <div className="bg-blue-gray-900 text-white px-5 h-[64px] sticky top-0 z-20 flex justify-evenly items-center">
            <Link href={"/"}>
                <div className=" pl-5 h-[100%] w-[150px] flex flex-1" >
                    <Image src={logo} alt="edsLogo" className="h-[100%] w-[100%]" height={500} width={500} />
                </div>
            </Link>
            <div className="flex flex-1 justify-center">
                <SearchBar />
            </div>
            <div className="flex">
                {(items || []).map((item) => (
                    <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
                        <div>
                            <Link href={item.destination} className="p-5 block">
                                {item.label}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}