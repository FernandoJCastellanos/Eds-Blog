
import Link from "next/link"
import logo from "../../../assets/logo.png"
import Image from "next/image"
import { SearchBar } from "../SearchBar"

import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react"





export const MainMenuMobile = ({items}) => {


    const [isOpen, setOpen] = useState(false)

    function burgerClick(){
        setOpen(!isOpen)
      }
    
    return (
        <div className="flex justify-evenly items-center">
            <div className="bg-blue-gray-900 text-white px-5 w-[100%] h-[64px] sticky top-0 z-[21] flex justify-evenly items-center">
                <Link href={"/"}>
                    <div className=" pl-5 h-[100%] w-[150px] flex flex-1" >
                        <Image src={logo} alt="edsLogo" className="h-[100%] w-[100%]" height={500} width={500} />
                    </div>
                </Link>
                <div onClick={burgerClick} className="flex flex-1 justify-end">
                    <Hamburger toggled={isOpen} size={25}/>
                </div>
            </div>
            <div className= {`absolute z-20 bg-blue-gray-900 text-white w-[350px] py-10 gap-5 top-[64px] flex flex-col justify-center items-center transition-all duration-500 ${isOpen ? "" : "top-[-240px]"}`}>
                <div className="">
                        <SearchBar />
                </div>
                <div className="">
                    {(items || []).map((item) => (
                        <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
                            <div>
                                <Link href={item.destination} className="p-5 block text-center">
                                    {item.label}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}