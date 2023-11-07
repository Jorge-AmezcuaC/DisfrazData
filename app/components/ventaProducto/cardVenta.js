"use client"

import Image from "next/image"
import './card.css'
import { useState, useEffect } from "react"

export default function CardVenta() {
    const [data, setData] = useState()
    console.log(data);


    return(
        <div className="vt-card">
            <div className="vt-left">
                    
            </div>
            <div className="vt-rigth">
                <div className="vt-info">
                    <h3 className="vt-title"></h3>
                    <p className="ct-desc"></p>
                    <div className="vt-groupLabel">
                        <label className="vt-label">Talla</label>
                        <label className="vt-label">Cantidad</label>
                        <label className="vt-label">SubTotal</label>
                    </div>
                    <div className="vt-groupInfo">
                        <p className="vt-text"></p>
                        <p className="vt-text"></p>
                        <p className="vt-text">$</p>
                    </div>
                </div>
                <button className="vt-delete">Eliminar</button>
            </div>
        </div>
    )
}