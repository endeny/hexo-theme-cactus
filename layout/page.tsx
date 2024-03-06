import React from 'react';
import Gallery from './_partial/post/gallery';

const Page = (props: any) => {
  const { page, site, _p, tagcloud, list_categories } = props;

  let content;
  if (page.search || page.type === "search") {
    content = <div dangerouslySetInnerHTML={{ __html: '_partial/search' }} />;
  } else if (page.type === "tags") {
    let visibleTags = 0;
    site.tags.forEach((tag: any) => {
      if (tag.length) {
        visibleTags += 1;
      }
    });
    content = (
      <div id="tag-cloud">
        <div className="tag-cloud-title">
          { _p('counter.tag_cloud', visibleTags) }
        </div>
        <div className="tag-cloud-tags">
          <div dangerouslySetInnerHTML={{ __html: tagcloud({min_font: 12, max_font: 30, amount: 300}) }} />
        </div>
      </div>
    );
  } else if (page.type === 'categories') {
    let visibleCategories = 0;
    site.categories.forEach((cat: any) => {
      if (cat.length) {
        visibleCategories += 1;
      }
    });
    content = (
      <div id="categories">
        <div className="category-list-title">
          { _p('counter.categories', visibleCategories) }
        </div>
        <div className="category-list">
          <div dangerouslySetInnerHTML={{ __html: list_categories() }} />
        </div>
      </div>
    );
  } else {
    content = <div dangerouslySetInnerHTML={{ __html: page.content }} />;
  }

  return (
    <article className="post" itemScope itemType="http://schema.org/BlogPosting">
      <Gallery {...props} />
      <div className="content" itemProp="articleBody">
        {content}
      </div>
    </article>
  );
};

export default Page;