import React from "react";

export default function TVImage(props) {
    return (
        <img width="100%" height="100%" alt={props.title} className="tv-img" src={props.src} />
    )
}