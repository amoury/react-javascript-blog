import React from 'react';
import { Container, Section, Hero, Title, Subtitle, HeroBody } from "bloomer";

const FeaturedPost = props => {

  const styles = { backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${props.post.imageUrl})` };
  
  return (
  <Section className={"container"}>
    <Hero
      isColor="dark"
      isSize="medium"
      isBold
      style={ styles }
    >
      <HeroBody>
        <Container>
          <Title tag="h1">{props.post.title}</Title>
          <Subtitle tag="h2">{props.post.excerpt}</Subtitle>
        </Container>
      </HeroBody>
    </Hero>
  </Section>
)};

export default FeaturedPost;