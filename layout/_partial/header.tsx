import React from 'react';

const HeaderComponent: React.FC<any> = ({ theme, config, url_for, gravatar, __ }) => {
  return (
    <header id="header">
      <a href={url_for("/")}>
        {theme.logo && theme.logo.enabled && (
          <div id="logo" style={{ backgroundImage: `url(${theme.logo.gravatar ? (theme.gravatar?.email ? gravatar(theme.gravatar.email) : `https://www.gravatar.com/avatar/${theme.gravatar?.hash}`) : url_for(theme.logo.url || '')})` }}></div>
        )}
        <div id="title">
          <h1>{config.title}</h1>
        </div>
      </a>
      <div id="nav">
        <ul>
          <li className="icon">
            <a href="#" aria-label={__('icons.menu')}><i className="fas fa-bars fa-2x"></i></a>
          </li>
          {theme.nav && Object.entries(theme.nav).map(([i, navItem]: any) => (
            <li key={i}>
              <img alt={i} src={url_for(navItem.icon || '')}/>
              <a href={url_for(navItem.path || '')}>{__('nav.'+i).replace("nav.", "")}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;