import './filters.css'
import {FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Filters() {
    return(
        <div className="filters-container">
            <button className="filters-close"><FaCaretLeft color='#fff' size={30}/></button>
            <div className="filters-header">
                <h3 className="filters-title">Filtros</h3>
            </div>
            <div className="filters-tallas">
                <label className="filters-label">Talla</label>
                <button className="filters-clear">X</button>
                <select defaultValue={'M'} className="filters-select">
                    <option value={'XL'} className="filters-option">XL</option>
                    <option value={'X'} className="filters-option">X</option>
                    <option value={'M'} className="filters-option">M</option>
                    <option value={'S'} className="filters-option">S</option>
                    <option value={'XS'} className="filters-option">XS</option>
                </select>
            </div>
            <div className="filters-precio">
                <label className="filters-label">Precio</label>
                <button className="filters-clear">X</button>
                <input type="number" placeholder="Min" className="filters-input"/>
                <input type="number" placeholder="Max" className="filters-input"/>
            </div>
            <button className="filters-apply">Aplicar Filtros</button>
        </div>
    )
}