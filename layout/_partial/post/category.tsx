import React from "react"

export default function Category(props: any) {
    const { page, list_categories } = props;
    if (page.categories && page.categories.length) {
        return (
        <div className="article-category">
            <i className="fas fa-archive"></i>
            {list_categories(page.categories, { show_count: false, style: 'link', separator: ' › ' })}
        </div>
        )
    }
    return null
}

