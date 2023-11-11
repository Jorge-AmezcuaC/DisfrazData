"use client"

import {FaSearch} from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const InputNav = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    return(
        <div className="navbar-search">
            <button onClick={() => router.push(`/inicio/${search}`)}><FaSearch/></button>
            <input type="search" placeholder="search" onChange={e => setSearch(e.target.value)}/>
        </div>
    )
}

export default InputNav