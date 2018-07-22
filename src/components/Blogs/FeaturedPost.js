import React from 'react';
import { Container, Section, Hero, Title, Subtitle, HeroBody } from "bloomer";

const FeaturedPost = (props) => (
  <Section className={"container"}>
      <Hero isColor="dark" isSize="medium" isBold>
        <HeroBody>
          <Container>
            <Title tag="h1">Medium Title</Title>
            <Subtitle tag="h2">Medium Subtitle</Subtitle>
          </Container>
        </HeroBody>
      </Hero>
    </Section>
);

export default FeaturedPost;