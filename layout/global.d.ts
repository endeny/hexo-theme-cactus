interface HexoProps {
    page: {
        title: string
        author?: string
        date: any
        lang: string
        updated: any,
        tags?: {
            data: {
                name: string
                path: string
                permalink: string
                length: number
                slug: string
            }[]
        }
        nocover?: boolean
        cover?: string
    }
    theme: {
        post: {
            show_updated: boolean
        }
        post_background: {
            enabled: boolean
            images: string[]
        }
    }
    url_for: any
    date: any
    date_xml: any
    config: {
        author?: string
        date_format: string
    }
}