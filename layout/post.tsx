import React from "react";
import Comments from "./_partial/comments";
import Gallery from "./_partial/post/gallery";
import Title from "./_partial/post/title";
import Date from "./_partial/post/date";
import Category from "./_partial/post/category";
import Tag from "./_partial/post/tag";
import Copyright from "./_partial/copyright";
import ADs from "./_partial/post/ads";
import Cover from "./_partial/post/cover";

export default function Post(props: any) {
  const { page, config } = props;
  return (
    <>
      <article className="post" itemScope itemType="http://schema.org/BlogPosting">
        <header>
          <Title post={page} index={false} class_name="posttitle" />
          <div className="meta">
            <span
              className="author"
              itemProp="author"
              itemScope
              itemType="http://schema.org/Person"
            >
              <span itemProp="name">
                ✍️ {page.author ? page.author : config.author}
              </span>
            </span>
            <Date {...props} post={page} class_name="postdate" />
            <Category {...props} />
            <Tag {...props} />
          </div>
        </header>
        <Gallery {...props} />
        <Cover {...props} />
        <div className="content" itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: page.content }} />
        <ADs adsense={props.theme.adsense} />
        <Copyright {...props} post={page} index={false}/>
      </article>
      <Comments {...props} />
    </>
  );
}
