import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import CardLink from "../components/CardLink";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { faExpand, faWandMagic } from "@fortawesome/free-solid-svg-icons";

const Cards = [
  {
    icon: faExpand,
    title: "Guides",
    url: "docs/guides/getting-started/what-is-ezexchange",
  },
  {
    icon: faWandMagic,
    title: "Tutorials",
    url: "docs/tutorials/getting-started",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={"hero hero--primary"}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title} Hub Resources
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Hub | Documentation and Tutorials`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className="card-container">
        {Cards.map((card) => (
          <CardLink
            key={card.title}
            url={card.url}
            title={card.title}
            icon={card.icon}
          />
        ))}
      </main>
    </Layout>
  );
}
