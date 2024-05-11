import "./styles.css";
import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function FooterLink({ to, href, label, ...props }) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

const FooterLogo = ({ url, alt }) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const footer = themeConfig.footer as any;

  const { copyright, links = [], logo = {} } = footer;
  const logoUrl = useBaseUrl(logo.src);

  return (
    <footer className="footer">
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            <div className="col col--5 footer__col">
              <div className="margin-bottom--md footer__logo">
                <img src="/img/logo.svg" alt="Exayn" width="75" />
                <h3>Exayn</h3>
              </div>
              <div className="margin-bottom--md">
                <p className="footer__description">
                  Exayn is a Developer tool.
                </p>
                <p className="footer__description">
                  Help Developers To Ship Faster.
                </p>
              </div>
              <div className="footer__description_icons">
                <a href="https://github.com/Exayn" target="_blank">
                  <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/company/exayn/"
                  target="_blank"
                >
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/Exayn" target="_blank">
                  <FontAwesomeIcon className="icon" icon={faTwitter} />
                </a>
                <a href="https://discord.gg/qr7BWCP6DH" target="_blank">
                  <FontAwesomeIcon className="icon" icon={faDiscord} />
                </a>
              </div>
            </div>
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item"
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {copyright && (
          <div className="text--center">
            <small>{copyright}</small>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
