import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-flexbox-grid";
import { config } from "react-spring";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { PRESENT, SKILLS } from "../constants/Stack";

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          {" "}
          <h1 className="main-h1 about-h1">
            Hey!My Skill:{" "}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: "inline-block" }}
            />
          </h1>{" "}
          <div className="about-intro">
            <Row>
              <Col md={12}>
                Everything can be good if you are hard....
                <br />
                <br />It is my second generation website 💖
              </Col>
            </Row>
            <hr />
            <h3>What I've worked with so far</h3>{" "}
            <Row style={{ marginTop: 30 }}>
              {" "}
              {PRESENT.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{ textAlign: "center", marginBottom: 40 }}
                >
                  <Icon type={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
            <hr />
            Follow me on{" "}
            <a
              href="https://www.instagram.com/once_wu/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Instagram
            </a>
            . That's where I usually hangout.
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
