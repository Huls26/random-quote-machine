import React from 'react'
// import H1Text from "../../../../components/h1/H1Text";
import H1Text from "@components/h1/";

export default function QuoteDispaly(prop) {
    const quote = prop.quote;
    const author = prop.author;
    const color = prop.color;

    return (
        <section id="text-box" >
            <H1Text quote={ quote } author={ author } color = { color } />
        </section>
    )
}
