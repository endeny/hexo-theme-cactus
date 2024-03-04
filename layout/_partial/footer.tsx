import React from "react";

export default function Footer(props: any) {
  const { config, theme, __, url_for } = props;
  const endYear =
    theme?.copyright && theme?.copyright?.end_year
      ? theme.copyright.end_year
      : new Date().getFullYear();
  const startYear =
    theme.copyright && theme.copyright.start_year
      ? theme.copyright.start_year
      : new Date().getFullYear();
  return (
    <footer id="footer">
      <div>
        <div className="copyright">
          <span>💐 Zip Alveolus</span>
          <span>🍒 blog.ourfor.top</span>
        </div>
      </div>
      <div>
        <div className="footer-left">
          {__("footer.copyright")} &copy;
          {startYear >= endYear ? endYear : startYear + "-" + endYear}
          {config.author || config.title}
        </div>
        <div className="footer-right">
          <nav>
            <ul>
              {Object.entries(theme.nav).map(([key, value]: any) => {
                return (
                  <li>
                    <a href={url_for(value.path)}>
                      {__("nav." + key).replace("nav.", "")}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
