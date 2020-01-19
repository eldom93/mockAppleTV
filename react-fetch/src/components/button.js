import React from "react";

export default function Button(props) {
    return (
<button key={Number.random} value={props.title}>Add</button>
);
}
