import React from 'react'

export default function Title(props: any) {
    const { post, index, class_name, url_for } = props;
    if (index) {
        if (post.link) {
            return <a className={class_name} href={url_for(post.link)} target="_blank" itemProp="url">{post.title}</a>
        } else if (post.title) {
            return <a className={class_name} href={url_for(post.path)}>{post.title}</a>
        } else {
            return <a className={class_name} href={url_for(post.path)}>Untitled</a>
        }
    } else {
        return (
            <h1 className={class_name} itemProp="name headline">
                {post.title}
            </h1>
        )
    }
}
