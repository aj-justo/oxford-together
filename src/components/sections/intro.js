import React from "react"
import styled from "styled-components"

import { oxfordHubPhoneSupportForm } from "../../constants"
import { Section, Container } from "../global"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { ButtonLink, HeaderButton } from "../helpers/header"

const Features = () => (
  <React.Fragment>
    <Section id="intro">
      <StyledContainer>
        <Subtitle>Oxford Together</Subtitle>
        <SectionTitle>A Community Response to Covid</SectionTitle>
        <p>
          Oxford Together is a new collaboration to build a community response
          to Covid. It’s time to get together to ensure we can provide support
          to the most vulnerable in our communities, and make sure that we are
          looking out for one another during this time.
        </p>
        <p>
          Become a community champion and help others across the city by
          checking in on those who are at high-risk on your street, or a phone
          champion making phone calls to check in on those who are
          self-isolating.
        </p>
        <p>
          Sparing just a few minutes of your day can make a huge difference to
          someone who is at high-risk or already ill.
        </p>
        <p>
          If you're self-isolating or at high risk, you can refer yourself to
          get community support, or{" "}
          <AnchorLink href="#support-forms">
            sign up for regular phone check-ins
          </AnchorLink>
          . For any questions, please email{" "}
          <a href="mailto:hello@oxfordtogether.org">hello@oxfordtogether.org</a>
          .
        </p>
      </StyledContainer>
    </Section>
    <Section id="support-forms">
      <Subtitle>Get Support</Subtitle>
      <SectionTitle>Sign up for Support</SectionTitle>
      <StyledContainer>
        <FeaturesGrid id="support-forms">
          <FeatureItem>
            <ButtonLink href={oxfordHubPhoneSupportForm} target="_blank">
              <HeaderButton>Register for phone check-ins</HeaderButton>
            </ButtonLink>
          </FeatureItem>
          <FeatureItem>
            <ButtonLink href={oxfordHubPhoneSupportForm} target="_blank">
              <HeaderButton>Get practical support</HeaderButton>
            </ButtonLink>
          </FeatureItem>
        </FeaturesGrid>
      </StyledContainer>
    </Section>
  </React.Fragment>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 100px auto 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 auto;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
