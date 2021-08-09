import React from 'react'

export default function Frase({frase}) {
    return (
        
            Object.keys(frase).length < 1
            ?
            <p>Loading.....</p>
            :
            <div>
                <h2>{frase.quote}</h2>
                <p>{frase.author}</p>
            </div>
    )
}
