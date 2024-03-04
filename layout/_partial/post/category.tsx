import React from "react"

export default function Category(props: any) {
    const { page, list_categories } = props;
    if (page.categories && page.categories.length) {
        return (
        <div class="article-category">
            <i class="fas fa-archive"></i>
            {list_categories(page.categories, { show_count: false, style: 'link', separator: ' › ' })}
        </div>
        )
    }
    return null
}

