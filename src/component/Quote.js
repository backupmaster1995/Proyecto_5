import React from 'react'
import styled from "@emotion/styled";
import Spinner from "./Spinner"

const QuoteContainer = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    margin-top: 15rem;
    max-height: 240px;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

`;

const Loading = styled.p`
    color: white;
    margin-top: 10px
`;

export default function Quote({randomQuote}) {
    return (
        Object.keys(randomQuote).length < 1
        ?
        <>
            <Spinner/>
            <Loading>Cargando...</Loading>
        </>
        :
        <QuoteContainer>
            <h1>{randomQuote.quote}</h1>
            <p>{randomQuote.author}</p>
        </QuoteContainer>
    )
}
