import React from "react";

export default function Tag(props: any) {
    const { page, list_tags } = props;
    if (page.tags && page.tags.length) {
        <div className="article-tag">
            <i className="fas fa-tag"></i>
            {list_tags(page.tags, { show_count: false, style: 'link' })}
        </div>
    }
    return null
}

