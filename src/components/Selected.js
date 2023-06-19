import React, {useState} from 'react';
import Select from "react-select";

const Selected = () => {
    const [optionSelected, setOptionSelected] = useState("");
    const options = [
        { value: "identité de marque", label: "identité de marque" },
        { value: "Réseaux sociaux", label: "Réseaux sociaux" },
        { value: "Support print", label: "Support print" },
        { value: "Photo ou vidéo", label: "Photo ou vidéo" },
        { value: "Logo + charte", label: "Logo + charte" },
        { value: "Site web", label: "Site web" },
        { value: "Edition/magazine", label: "Edition/magazine" },
        { value: "Autre", label: "Autre" },
    ];
    let handleChange = (optionSelected) => {
        setOptionSelected(optionSelected.value);
    };
    return (
        <div className="select-group">
        <div className="select-group_child">
            <Select placeholder="Sur quel(s) sujet(s) aimeriez-vous échanger ?" isMulti onChange={handleChange} options={options} />
        </div>
        </div>
    )
}

export default Selected