import React from 'react';
import Share from './share';

const ActionsDesktopComponent: React.FC<any> = (props) => {
  const { theme, page, url_for, toc, __ } = props;
  const scrollToTop = `() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }`;

  return (
    <div id="header-post">
      <a id="menu-icon" href="#" aria-label={__('icons.menu')}><i className="fas fa-bars fa-lg"></i></a>
      <a id="menu-icon-tablet" href="#" aria-label={__('icons.menu')}><i className="fas fa-bars fa-lg"></i></a>
      <a id="top-icon-tablet" href="#" aria-label={__('icons.top')} data-onclick={scrollToTop} style={{ display: 'none' }}><i className="fas fa-chevron-up fa-lg"></i></a>
      <span id="menu">
        <span id="nav">
          <ul>
            {theme.nav && Object.entries(theme.nav).map(([i, navItem]: any) => (
              <li key={i}><a href={url_for(navItem.path || '')}>{__('nav.'+i).replace("nav.", "")}</a></li>
            ))}
          </ul>
        </span>
        <br/>
        <span id="actions">
          <ul>
            {page.prev && (
              <li><a className="icon" aria-label={__('post.desktop.previous')} href={url_for(page.prev.path || '')}><i className="fas fa-chevron-left" aria-hidden="true" data-onmouseover="$('#i-prev').toggle();" data-onmouseout="$('#i-prev').toggle();"></i></a></li>
            )}
            {page.next && (
              <li><a className="icon" aria-label={__('post.desktop.next')} href={url_for(page.next.path || '')}><i className="fas fa-chevron-right" aria-hidden="true" data-onmouseover="$('#i-next').toggle();" data-onmouseout="$('#i-next').toggle();"></i></a></li>
            )}
            <li><a className="icon" aria-label={__('post.desktop.back_to_top')} href="#" data-onclick={scrollToTop}><i className="fas fa-chevron-up" aria-hidden="true" data-onmouseover="$('#i-top').toggle();" data-onmouseout="$('#i-top').toggle();"></i></a></li>
            <li><a className="icon" aria-label={__('post.desktop.share')} href="#"><i className="fas fa-share-alt" aria-hidden="true" data-onmouseover="$('#i-share').toggle();" data-onmouseout="$('#i-share').toggle();" data-onclick="$('#share').toggle();return false;"></i></a></li>
          </ul>
          <span key="prev" id="i-prev" className="info" style={{display: "none"}}>{__('post.desktop.previous')}</span>
          <span key="next" id="i-next" className="info" style={{display: "none"}}>{__('post.desktop.next')}</span>
          <span key="top" id="i-top" className="info" style={{display: "none"}}>{__('post.desktop.back_to_top')}</span>
          <span key="share" id="i-share" className="info" style={{display: "none"}}>{__('post.desktop.share')}</span>
        </span>
        <br/>
        <div id="share" style={{ display: 'none' }}>
          <Share {...props} iconClassName="" />
        </div>
        <div id="toc" dangerouslySetInnerHTML={{ __html: toc(page.content || '') }} />
      </span>
    </div>
  );
};

export default ActionsDesktopComponent;