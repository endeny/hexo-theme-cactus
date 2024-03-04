import React from "react";

export default function CopyRight(props: any) {
    const { config, post, url_for, __, is_post } = props;
    if (is_post()) {
        return (
            <div>
                <ul className="post-copyright">
                    <li className="post-copyright-author">
                        <strong>本文作者： </strong>
                        {config?.author || config?.title}
                    </li>
                    <li className="post-copyright-link">
                        <strong>本文链接：</strong>{" "}
                        <a href={url_for(post.permalink)} title={post.title}>
                            {url_for(post.permalink)}
                        </a>
                    </li>
                    <li className="post-copyright-license">
                        <strong>版权声明： </strong>本博客所有文章除特别声明外，均采用{" "}
                        <a
                            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                            rel="noopener"
                            target="_blank"
                        >
                            {" "}
                            ©BY-NC-SA
                        </a>{" "}
                        许可协议。转载请注明出处！
                    </li>
                </ul>
            </div>
        );
    }
    return null;
}
