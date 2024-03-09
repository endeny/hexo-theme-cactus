import React from 'react'
import { getRandomInt } from './helper';
import Tags from './tags';

export default function Cover(props: HexoProps) {
    const { page, theme, url_for, date, date_xml, config } = props;
    if (theme.post_background.enabled && !(page?.nocover)) {
        const images = theme.post_background.images
        // random select image from images
        const image = theme.post_background.images[getRandomInt(images.length)]
        const src = url_for(page?.cover ?? image)
        return (
            <img alt="" style={{display: "inline-block", maxWidth: "100%"}} src={src} />
        )
    }
    return null
}