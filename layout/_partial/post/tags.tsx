import React from 'react'
import { getRandomInt } from './helper'

function tagStyle(i?: number) {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "teal", "indigo", "lime", "gray"]
    const color = colors[i ?? getRandomInt(colors.length)]
    return {
        margin: "auto .25rem", 
        "--my-bg": `var(--my-${color}-1)`,
        "--my-border": `var(--my-${color}-3)`,
        "--my-color": `var(--my-${color}-7)`
    }
}

export default function Tags({
    page: {tags},
    url_for
}: HexoProps) {
    return (
        <>
        {tags?.data.map((tag, index) => (
            <span key={index} 
                style={tagStyle(index)}
                className="x-tag" 
                data-href={url_for(tag.path)}>
                {tag.name}
            </span>
        ))}
        </>
    )
}

