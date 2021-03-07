import React from "react";
import HeaderCrtimg from "../../assets/imgs/headercrt.svg"
import './HeaderCrt.scss'

const HeaderCrt = () => (
    <>
        <section className="headercrt-contents">
            <div className="contents-crt">
                <img src={HeaderCrtimg} alt="filterland"></img>
            </div>
        </section>
    </>
)

export default HeaderCrt