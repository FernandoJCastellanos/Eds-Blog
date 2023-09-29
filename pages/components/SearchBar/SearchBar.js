import Link from "next/link"
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { SearchQuery } from "utils/getQuery";
import { useEffect } from "react";
import { useRouter } from 'next/router';



export const SearchBar = () => {

    const [search, setSearchQuery] = useState('');
    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search?search=${search}`);
      };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          // Submit the form when Enter is pressed
          handleSubmit(e);
        }
      };



    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-200 px-3 py-1 rounded-full focus:outline-none text-black"
                onKeyPress={handleKeyPress}
            />
            <Link href={`/search?search=${search}`} >
                <button className="bg-blue-500 text-white px-3 py-1 ml-2 rounded-full">
                    Search
                </button>
            </Link>
        </div>
    )

}