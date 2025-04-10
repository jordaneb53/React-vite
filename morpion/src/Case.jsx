// case.jsx
import React from "react";

export default function Case({ value, onClick }) {
    return (
        <button className="case" onClick={onClick}>
            {value}
        </button>
    );
}

