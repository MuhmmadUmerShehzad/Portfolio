import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Text } from "../../components/Home/styled";
import { theme } from "../../core/theme";
import { Box } from "./styled";
import about from "../../helper/about.json";
import Button from "../../components/Button";
import profile from "../../assets/down.png";
import { Profile } from "../../components/Home/styled";
import animations from "../../helper/animations.json";

interface AboutData {
  description: string;
  resumeUrl: string;
  skills: {
    languages: { icon: string; techs: string[] };
    frameWorks: { icon: string; techs: string[] };
    skills: { icon: string; techs: string[] };
  };
  education: {
    degree: string;
    years: string;
    institution: string;
    details: string;
  };
  certifications: string[];
  awards: { role: string; org: string }[];
}

const About: React.FC = () => {
  const data = about as AboutData;

  return (
    <Box id="about">
      <Container fluid>
        <Row
          style={{ padding: "0px 3%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Col>
            <Text
              fontSize={theme.fonts?.title.fontSize}
              fontFamilly={theme.fonts?.title.fontFamilly}
              color={theme.colors?.mainText}
              style={{ fontWeight: "bold" }}
            >
              About Me
            </Text>
            <div
              style={{
                height: 0.5,
                margin: "35px 0",
                backgroundColor: "#fff",
                width: "50%",
              }}
            ></div>
            <Text
              className="mt-5 mb-0"
              data-aos={animations.about.description}
              data-aos-duration={animations.about["description-duration"]}
              fontSize={theme.fonts?.subtitle.fontSize}
              fontFamilly={theme.fonts?.title.fontFamilly}
              color={theme.colors?.mainText}
            >
              {data.description}
            </Text>
            <Row>
              <Col lg={"6"}>
                <span
                  onClick={() => {
                    const links = ["/Web_CV.pdf", "/Game_dev_CV.pdf"];
                    links.forEach((href) => {
                      const a = document.createElement("a");
                      a.href = href;
                      a.download = href.replace("/", "");
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                    });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Button title="My Resume" />
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="d-sm-flex d-none align-items-center justify-content-center">
            <Profile
              data-aos={animations.about.image}
              data-aos-duration={animations.about["image-duration"]}
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={profile}
                alt=" Muhammad Umer Shehzad "
                style={{
                  height: 500,
                }}
              />
            </Profile>
          </Col>
        </Row>
        <div
          style={{
            height: 0.5,
            margin: "100px 0",
            backgroundColor: "#fff",
            width: "100%",
          }}
        ></div>
        <Row style={{ padding: "0px 3%" }}>
          <Col lg={"4"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className={data.skills.languages.icon}
                style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
              ></i>{" "}
              Languages
            </p>
            {data.skills.languages.techs.map((language) => (
              <p
                key={language}
                data-aos={animations.about.languages.name}
                data-aos-duration={animations.about.languages.duration}
                style={{
                  color: theme.colors?.mainText,
                }}
              >
                <i
                  className="fas fa-angle-right"
                  style={{
                    color: theme.colors?.activeBtn,
                    marginRight: 10,
                  }}
                ></i>
                {language}
              </p>
            ))}
          </Col>
          <Col lg={"4"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className={data.skills.frameWorks.icon}
                style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
              ></i>{" "}
              Frameworks
            </p>
            <div data-aos={animations.about.frameworks.name}>
              {data.skills.frameWorks.techs.map((framework) => (
                <p key={framework} style={{ color: theme.colors?.mainText }}>
                  <i
                    className="fas fa-angle-right"
                    style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
                  ></i>{" "}
                  {framework}
                </p>
              ))}
            </div>
          </Col>
          <Col lg={"4"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className={data.skills.skills.icon}
                style={{
                  color: theme.colors?.activeBtn,
                  marginRight: 10,
                }}
              ></i>
              Tools
            </p>
            {data.skills.skills.techs.map((skill) => (
              <p
                key={skill}
                data-aos={animations.about.tools.name}
                data-aos-duration={animations.about.tools.duration}
                style={{ color: theme.colors?.mainText }}
              >
                <i
                  className="fas fa-angle-right"
                  style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
                ></i>{" "}
                {skill}
              </p>
            ))}
          </Col>
        </Row>
        <Row style={{ padding: "0px 3%", marginTop: "50px" }}>
          <Col lg={"6"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className="fas fa-graduation-cap"
                style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
              ></i>{" "}
              Education
            </p>
            <div style={{ color: theme.colors?.mainText }}>
              <h5 style={{ fontWeight: "bold" }}>{data.education.degree}</h5>
              <p style={{ fontStyle: "italic", marginBottom: "5px" }}>
                {data.education.institution}
              </p>
              <p style={{ color: theme.colors?.activeBtn, fontSize: "0.9em" }}>
                {data.education.years}
              </p>
              <p style={{ fontSize: "0.95em", opacity: 0.9 }}>
                {data.education.details}
              </p>
            </div>
          </Col>
          <Col lg={"6"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className="fas fa-certificate"
                style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
              ></i>{" "}
              Certifications & Awards
            </p>
            <div style={{ color: theme.colors?.mainText }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {data.certifications.slice(0, 4).map((cert: string) => (
                  <li key={cert} style={{ marginBottom: "5px" }}>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
                    ></i>
                    {cert}
                  </li>
                ))}
              </ul>
              <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
              <div className="d-flex flex-wrap">
                {data.awards.map((award) => (
                  <div
                    key={award.role}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      padding: "10px",
                      margin: "5px",
                      borderRadius: "5px",
                      borderLeft: `3px solid ${theme.colors?.activeBtn}`,
                    }}
                  >
                    <span style={{ fontWeight: "bold", display: "block" }}>
                      {award.role}
                    </span>
                    <span style={{ fontSize: "0.8em", opacity: 0.8 }}>
                      {award.org}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default About;
