"use client"
import { useState } from "react"
import './usercard.css'
import Link from "next/link"
import {FaSignOutAlt, FaEnvelopeOpenText} from  "react-icons/fa";

const UserCard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return(
        isOpen ? 
            (
                <div className="usercard-container">
                    <button onClick={close} className="usercard-action2">X</button>
                    <div className="usercard-menu">
                        <h3 className="usercard-name">Mi Usuario</h3>
                        <Link href="/inicio/admin/outstock"><button className="usercard-button"><FaEnvelopeOpenText size={15}/>Aleta de OutStock</button></Link>
                        <Link href="/"><button className="usercard-button"><FaSignOutAlt size={15}/>LogOut</button></Link>
                    </div>
                </div>
            )
        :
            <button onClick={open} className="usercard-action1"></button>
    )
}

export default UserCard