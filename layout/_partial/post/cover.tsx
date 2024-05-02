import React, { CSSProperties } from 'react'
import { getRandomInt } from './helper';
import Tags from './tags';

const style: CSSProperties = {
    display: "inline-block", 
    maxWidth: "100%",
    border: "1px solid transparent",
    borderRadius: "0.45rem",
}

export default function Cover(props: HexoProps) {
    const { page, theme, url_for, date, date_xml, config } = props;
    if (theme.post_background.enabled && !(page?.nocover)) {
        const images = theme.post_background.images
        // random select image from images
        const image = theme.post_background.images[getRandomInt(images.length)]
        const src = page?.cover?.startsWith("./") ? page?.cover : url_for(page?.cover ?? image)
        return (
            <img alt="" 
                style={style} 
                src={src} />
        )
    }
    return null
}