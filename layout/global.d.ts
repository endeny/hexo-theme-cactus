import Theme from "./theme"

interface HexoProps {
    page: {
        title: string
        author?: string
        date: any
        lang: string
        updated: any,
        comments: boolean
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
    theme: Theme.Config
    url_for: any
    date: any
    date_xml: any
    config: {
        author?: string
        date_format: string
    }
    // to localize strings
    __: (key: string) => string|undefined
}