import React from "react";

function Footer(props) {
    return (
        <footer>
            <p>Total: {props.total ? props.total : 0}</p>
        </footer>
    );
}

export default Footer;
