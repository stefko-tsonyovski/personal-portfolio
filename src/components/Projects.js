import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const omcs = [
    {
      title: "OMCS",
      description: "Statistics",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1679320907/fiverr/MicrosoftTeams-image_11_exvjeo.png",
    },
    {
      title: "OMCS",
      description: "Dashboard",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1679320906/fiverr/MicrosoftTeams-image_13_ttsijk.png",
    },
    {
      title: "OMCS",
      description: "Course Details",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1679320907/fiverr/MicrosoftTeams-image_6_wrsfpc.png",
    },
  ];

  const tdt = [
    {
      title: "TennisDreamTeam",
      description: "Match Details",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1678883021/match-details_psacj5.jpg",
    },
    {
      title: "TennisDreamTeam",
      description: "Rankings",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1678883021/ranking_ythjcc.jpg",
    },
    {
      title: "TennisDreamTeam",
      description: "Games",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1678883021/games_1_ixruxo.jpg",
    },
    {
      title: "TennisDreamTeam",
      description: "Fantasy Team Part 1",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1678883021/fantasy_1_hsde2l.jpg",
    },
    {
      title: "TennisDreamTeam",
      description: "Fantasy Team Part 2",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1678883021/fantasy_3_xltpnh.jpg",
    },
    {
      title: "TennisDreamTeam",
      description: "Brackets",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1678883021/brackets_ciqfhe.jpg",
    },
  ];

  const hms = [
    {
      title: "HMS",
      description: "About",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1679320907/fiverr/MicrosoftTeams-image_7_ujcc3o.png",
    },
    {
      title: "HMS",
      description: "Doctors",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1679323645/fiverr/MicrosoftTeams-image_17_rx0nhn_1_ow1zd9.png",
    },
    {
      title: "HMS",
      description: "Mailbox",
      imgUrl:
        "https://res.cloudinary.com/dcvkhhwth/image/upload/v1679323703/fiverr/MicrosoftTeams-image_3_vy5ahe_1_c8rgqi.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Enough talk! Let's see some of our projects:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">OMCS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">TDT</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">HMS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          Online Course Management System or OMCS is a system
                          for managing online courses developed with .NET stack
                          (C#, ASP .NET Core 5.0, Entity Framework Core 5.0,
                          xUnit, Blazor, SignalR, Automapper). It has different
                          modules such as Dashboard, Events Panel, Assignments,
                          Exams, Forum, Q&A, Video Conference and Courses. This
                          project was awarded with 3rd place at John Atanasoff
                          IT tournament and earned excellent mark at NOIT
                          (National Olympiad of Information Technologies)
                        </p>
                        <Row>
                          {omcs.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Welcome to TennisDreamTeam! If you want to test your
                          tennis knowledge, compete with others, participate in
                          leagues or just to have fun, you are at the right
                          place! We offer three different types of games which
                          at the end are used to calculate your total points.
                          The project is developed using native MERN stack
                          (MongoDB, ExpressJS, React Native and Node.js)
                        </p>
                        <Row>
                          {tdt.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Hospital management system (HMS) is a software
                          application designed to streamline and automate the
                          administrative and clinical tasks of a hospital or
                          healthcare facility. The system includes modules for
                          managing patient records, appointment scheduling,
                          billing and invoicing, pharmacy inventory management,
                          and electronic medical records. The aim of HMS is to
                          improve the efficiency and accuracy of healthcare
                          services, reduce paperwork, and enhance patient care.
                        </p>
                        <Row>
                          {hms.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
