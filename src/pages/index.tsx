import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import {Redirect} from '@docusaurus/router';

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section>
      <div className={clsx(styles.flexZone, styles.firstSection)}>
        <div className={styles.text}>
          <h1 className="hero__title"></h1>
          <p>Hermes Protocol is a notification system, that is free to use. It allows users to receive up to date information regarding wallet transactions, NFT sales, prices and governance polls.</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="https://hermesprotocol.io/"
            >
              WebApp
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="docs/intro"
            >
              Docs
            </Link>
          </div>
        </div>
        <div className={styles.sectionLogo}>
          <img
            src="./img/hermes-camel.svg"
            className={styles.imgLogo}
          />
        </div>
      </div>
    </section>
  );
}

// export default function Home(): JSX.Element {
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return <Redirect to="/docs/intro"/>
  // return (
  //   <Layout>
  //     <main>
  //       <HomepageHeader />
  //       <HomepageFeatures />
  //     </main>
  //   </Layout>
  // );
}
