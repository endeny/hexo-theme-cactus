import React from 'react'

interface CoverProps {
    page: {
        nocover?: boolean
        cover?: string
    }
    theme: {
        post_background: {
            enabled: boolean
            images: string[]
        }
    }
    url_for: any
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default function Cover(props: CoverProps) {
    const { page, theme, url_for } = props;
    if (theme.post_background.enabled && !(page?.nocover)) {
        const images = theme.post_background.images
        // random select image from images
        const image = theme.post_background.images[getRandomInt(images.length)]
        const src = url_for(page?.cover ?? image)
        return (
            <img alt="" style={{maxWidth: "100%"}} src={src} />
        )
    }
    return null
}