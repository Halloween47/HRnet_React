import React from "react"

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
Recherche : {' '}
<input value={filter || ''} onchange={(e) => setFilter(e.target.value)} />
        </span>
    ) 
}