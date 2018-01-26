import React from "react";
import { Link } from 'react-router-dom'

//bulma ui
import { Section } from 'reactbulma'
import { Container } from 'reactbulma'
import { Title } from 'reactbulma'
import { SubTitle } from 'reactbulma'
import { Input } from 'reactbulma'
import { Button } from 'reactbulma'

const LandingPage = () =>
  <div>

    <Section>
      <Container>
        <Title>Sign up!</Title>
        <SubTitle>
          A faster route to the best <strong>vegetarian food</strong>.
        </SubTitle>
      </Container>
    </Section>

      <Section>
          <Container>
              <div>
                  <label htmlFor="medium">Enter email to create account</label>
                  <Input medium id="medium" />
              </div>
              <div>
                  <label htmlFor="medium">Enter password</label>
                  <Input medium id="medium" />
              </div>
          </Container>
      <Container>
          <div>
              <Button primary><Link to="/home">Next</Link></Button>
          </div>
      </Container>

      </Section>
  </div>;

export default LandingPage;
