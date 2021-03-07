import React, { useState} from "react";
import './HamburgerButton.scss';
import { MdClose } from "react-icons/md"



export default function HamburgerButton(props) {
    const [navbarOpen] = useState(false)
    return (
        <>
            <section>
                <nav className="navBar">
                <MdClose style={{ color: "#00000", width: "40px", height: "40px" }} />
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li className="list_sibebar">Products</li>
                    <li className="list_sibebar">Use Cases</li>
                    <li className="list_sibebar">Developers</li>
                  </ul>
                </nav>
            </section>
        </>
    )

}
 