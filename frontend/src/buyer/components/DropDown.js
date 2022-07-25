import React from "react";
import { DropDownContainer } from "../styles/DropDownStyles";
import { NavLink } from "react-router-dom";

const DropDown = () => {

    return (

        <DropDownContainer>

            <span>PRODUCTS

                <div className="dropdown-content">
                    <button><NavLink className="nav-link" to="/category-headphones">Headphones</NavLink></button>
                    <button><NavLink className="nav-link" to="/category-speakers">Speakers</NavLink></button>
                    <button><NavLink className="nav-link" to="/category-earphones">Earphones</NavLink></button>
                </div>

            </span>

        </DropDownContainer>

    )

}

export default DropDown
