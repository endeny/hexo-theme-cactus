declare namespace Theme {
    interface NavItem {
        path: string;
        icon: string;
    }

    interface SocialLinks {
        github: string;
        mail: string;
    }

    interface PostsOverview {
        show_all_posts: boolean;
        post_count: number;
        sort_updated: boolean;
    }

    interface Archive {
        sort_updated: boolean;
    }

    interface Post {
        show_updated: boolean;
    }

    interface Copyright {
        start_year: number;
        end_year?: number;
    }

    interface Error404 {
        enabled: boolean;
        title: string;
        description: string;
    }

    interface Logo {
        enabled: boolean;
        width: number;
        height: number;
        url: string;
        gravatar: boolean;
        grayout: boolean;
    }

    interface Favicon {
        url: string;
        gravatar: boolean;
    }

    interface Favicons {
        desktop: Favicon;
        android: Favicon;
        apple: Favicon;
    }

    interface OpenGraph {
        fb_app_id?: string;
        fb_admins?: string;
        twitter_id?: string;
        google_plus?: string;
    }

    interface MathJax {
        enabled: boolean;
    }

    interface Disqus {
        enabled: boolean;
        shortname: string;
    }

    interface Utterances {
        enabled: boolean;
        repo: string;
        issue_term: string;
        label: string;
        theme: string;
    }

    interface Giscus {
        enabled: boolean;
        src: string;
        repo: string;
        repoId: string;
        category: string;
        categoryId: string;
        mapping: string;
        strict: number;
        reactionsEnabled: number;
        emitMetadata: number;
        inputPosition: string;
        theme: string;
        lang: string;
        loading: string;
    }

    interface GoogleAnalytics {
        enabled: boolean;
        id: string;
    }

    interface BaiduAnalytics {
        enabled: boolean;
        id: string;
    }

    interface CloudflareAnalytics {
        enabled: boolean;
        id: string;
    }

    interface UmamiAnalytics {
        enabled: boolean;
        id: string;
        host: string;
    }

    interface Gravatar {
        email: string;
        hash: string;
    }

    interface CDN {
        enable: boolean;
        jquery: string;
        clipboard: string;
        font_awesome: string;
        justified_gallery_css: string;
        justified_gallery_js: string;
    }

    interface Sitemap {
        path: string[];
        rel: boolean;
        tags: boolean;
        categories: boolean;
    }

    interface PostBackground {
        enabled: boolean;
        images: string[];
    }

    interface Config {
        projects_url: string;
        direction: string;
        nav: Record<string, NavItem>;
        social_links: SocialLinks;
        tags_overview: boolean;
        posts_overview: PostsOverview;
        archive: Archive;
        post: Post;
        copyright: Copyright;
        error_404: Error404;
        logo: Logo;
        favicon: Favicons;
        highlight: string;
        colorscheme: string;
        page_width: number;
        rss: string;
        style: boolean;
        open_graph: OpenGraph;
        mathjax: MathJax;
        disqus: Disqus;
        utterances: Utterances;
        giscus: Giscus;
        google_analytics: GoogleAnalytics;
        baidu_analytics: BaiduAnalytics;
        cloudflare_analytics: CloudflareAnalytics;
        umami_analytics: UmamiAnalytics;
        gravatar: Gravatar;
        cdn: CDN;
        sitemap: Sitemap;
        post_background: PostBackground;
    }
}

export = Theme;