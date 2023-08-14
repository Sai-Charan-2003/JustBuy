import React from "react";
import "./footer.css";
import {
    FaCopyright
} from "react-icons/fa";

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item2 d-inline m-auto">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FaCopyright />
                    <span style={{ paddingLeft: 5 }}>
                        All Rights
                        Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default footer;