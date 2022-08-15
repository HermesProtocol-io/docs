import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx(styles.flexZone, styles.firstSection)}>
        <div>
          <h1 className="hero__title">Hermes Protocol</h1>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="https://hermesprotocol.io/"
            >
              WebApp
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Docs
            </Link>
          </div>
        </div>
        <div className={styles.sectionLogo}>
          <img
            src="./img/icons/hermes-icon-camel.svg"
            className={styles.imgLogo}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
