import React from "react";
import styled from "styled-components";
import { Span, LinkSpan, Folder, Icons } from "./Setup";

const Container = styled.div`
  @media (max-width: 769px) {
    order: 1;
  }
`;

const Group = styled.div`
  margin: 0;
`;

const WriteUp = styled.p`
  padding: 18px 0 0 !important;
  line-height: 1.5;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: column;
  margin-bottom: 35px;
`;

const Content = () => {
  return (
    <Container>
      <Nav>
        <h1>Hey!</h1>
      </Nav>

      <WriteUp>
        I'm <span>Abraham Ugbeshe</span>, best called Klef! I build stuff that
        works on the web!{" "}
        <span role="img" aria-label="emoji">
          😉
        </span>
      </WriteUp>

      <Group>
        <WriteUp>
          My passion for problem solving began since my 10th grade and that have
          made me better today than I was yesterday. I code, build, design &
          scale full-stack web applications.
        </WriteUp>

        <WriteUp>
          I am a <span>focused driven developer</span>, and I currently work at{" "}
          <LinkSpan
            variant="default"
            href="https://www.roybarber.com"
            target="_blank"
          >
            RBCUK LTD
          </LinkSpan>
          , United Kingdom.
        </WriteUp>

        <WriteUp>
          I love my work, it has allowed me to understand development of digital
          products and how it affects our users.
        </WriteUp>
      </Group>

      <div className="box">
        <ul className="directory-list">
          <Folder>Languages</Folder>
          <ul className="tools">
            <Icons variant="javascript">
              <span>
                <i className="fab fa-js-square" />
              </span>
              <span>JavaScript</span>
            </Icons>
            <Icons variant="php">
              <span>
                <i className="fab fa-php" />
              </span>
              <span className="tool">PHP</span>
            </Icons>
            <Icons variant="python">
              <span>
                <i className="fab fa-python" />
              </span>
              <span className="tool">Python</span>
            </Icons>
            <Icons variant="mysql">
              <span>
                <i className="fas fa-database" />
              </span>
              <span className="tool">MySQL</span>
            </Icons>
          </ul>
        </ul>
      </div>

      <div className="box">
        <ul className="directory-list">
          <Folder>Frameworks</Folder>
          <ul className="tools">
            <Icons variant="nodejs">
              <span>
                <i className="fab fa-node-js" />
              </span>
              <span>Node JS</span>
            </Icons>
            <Icons variant="laravel">
              <span>
                <i className="fab fa-laravel" />
              </span>
              <span className="tool">Laravel</span>
            </Icons>
            <Icons variant="python">
              <span>
                <i className="fab fa-python" />
              </span>
              <span className="tool">Flask</span>
            </Icons>
            <Icons variant="vuejs">
              <span>
                <i className="fab fa-vuejs" />
              </span>
              <span className="tool">Vue</span>
            </Icons>
          </ul>
        </ul>
      </div>

      <Group>
        <WriteUp>
          Previously, I've worked with startups and participate in community
          driven initiatives. I worked multiple roles; ranging from being a
          Backend, DevOps to Full-stack developer. These days, I am more focused
          on experimentation, strategy, analysis and backend implementation of
          products.
        </WriteUp>

        <WriteUp>
          Where can you see my work?{" "}
          <Span
            variant="default"
            href="mailto:abraham@gmail.com?subject=Hello Klef!"
          >
            Email me
          </Span>{" "}
          and I will prepare work samples relevant to your project with
          accompanying details.
        </WriteUp>

        <WriteUp>
          Aside from work, I produce a lot of beats with my favorite DAW{" "}
          <LinkSpan
            variant="default"
            href="https://www.image-line.com/flstudio/"
            target="_blank"
          >
            FLStudio
          </LinkSpan>{" "}
          and I love hanging out with my friends like{" "}
          <LinkSpan
            variant="default"
            href="https://www.instagram.com/darth_villain/"
            target="_blank"
          >
            Toochi
          </LinkSpan>
          ,{" "}
          <LinkSpan
            variant="default"
            href="https://www.instagram.com/dips_________/"
            target="_blank"
          >
            Ajala
          </LinkSpan>
          ,{" "}
          <LinkSpan
            variant="default"
            href="https://instagram.com/hadassah__o"
            target="_blank"
          >
            My Oga Sir
          </LinkSpan>{" "}
          and{" "}
          <LinkSpan
            variant="default"
            href="https://www.instagram.com/iamsope__/"
            target="_blank"
          >
            Moshee
          </LinkSpan>
          . I also love ice cream.
        </WriteUp>

        <WriteUp>
          I’m mostly available on{" "}
          <Span
            variant="default"
            href="mailto:abrahamugbeshe@gmail.com?subject=Hello Klef!"
          >
            email
          </Span>{" "}
          and{" "}
          <Span variant="default" href="https://instagram.com/klefcodes">
            instagram
          </Span>{" "}
          . You can send me a message and I’ll reply as soon as I can.
        </WriteUp>
      </Group>
    </Container>
  );
};

export default Content;
