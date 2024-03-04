import React from 'react';

interface Page {
  total: number;
  prev?: any;
  prev_link?: string;
  current: number;
  next?: any;
  next_link?: string;
  // 其他可能的属性...
}

interface Props {
  page: Page;
  url_for: (url: string) => string;
  __: (key: string, ...args: any[]) => string;
}

const PaginationComponent: React.FC<Props> = ({ page, url_for, __ }) => {
  if (page.total <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      {page.prev && (
        <a href={url_for(page.prev_link || '')}>
          <i className="fas fa-angle-left"></i>
        </a>
      )}
      <span className="page-number">{__('pagination.page', page.current, page.total)}</span>
      {page.next && (
        <a href={url_for(page.next_link || '')}>
          <i className="fas fa-angle-right"></i>
        </a>
      )}
    </div>
  );
};

export default PaginationComponent;