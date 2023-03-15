import React from "react";
import { BiServer } from "react-icons/bi";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="orange">services</span>
        </h4>
        <h1>What I <span className="orange">Do</span></h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BiServer}
            title={"Database"}
            disc={`PostgreSQL and NoSQL database management as Postgres, MySQL, MongoDB, Creation of database schemas`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Back-end"}
            disc={`ORM management, MVC, routing, API's, authorizations, authentication, validations, framework, template engines`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"web designer"}
            disc={`UX/UI designer with knowledge of html, css, react, redux, js, tailwindcss, pug with some projects`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
