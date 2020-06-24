import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (

            <div className="Navbar">
                <ul className = "Listnavbar">
                    <li className = "Link">
                        <NavLink to="Memy"> Memy </NavLink>
                    </li>
                    <li className = "Link">
                        <NavLink to="PopularneMemy"> Popularne memy </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;