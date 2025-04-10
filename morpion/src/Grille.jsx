// grille.jsx
import React from "react";
import Case from "./case";

export default function Grille({ cases, onClick }) {
    return (
        <div className="grid">
            {cases.map((value, i) => (
                <Case key={i} value={value} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}
