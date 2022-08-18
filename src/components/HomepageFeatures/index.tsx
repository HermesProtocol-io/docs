import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  svg: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy and simple",
    svg: "./img/make-it-your-own.svg",
    description: (
      <>
        {/* Your experience should be effortless, so we've built an interface in an
        intuitive way which you can configure and optimise over time. */}
      </>
    ),
  },
  {
    title: "Tailored For You",
    svg: "./img/tailored-for-you.svg",
    description: (
      <>
        {/* Log in with your wallet or social account, enable the dApps you want and
        subscribe to the type of notifications that are important to you. */}
      </>
    ),
  },
  {
    title: "Connect everything and everyone",
    svg: "./img/infinitely-scalable.svg",
    description: (
      <>
        {/* Notification are just the tip of the Iceberg. Wallet-to-Wallet
        messaging, P2P Transactions, airdrop-as-notifications and much more. */}
      </>
    ),
  },
];

function Feature({ title, svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={svg} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
