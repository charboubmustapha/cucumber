import React from 'react'
import Keyword from './Keyword'
import Description from './Description'
import { messages } from 'cucumber-messages'
import StepList from './StepList'
import { H2, Indent, PlainWeightSpan, Section } from './html'
import IBackground = messages.GherkinDocument.Feature.IBackground

interface IProps {
  background: IBackground
}

const Background: React.FunctionComponent<IProps> = ({ background }) => {
  return (
    <Section>
      <H2>
        <Keyword>{background.keyword}:</Keyword> <PlainWeightSpan>{background.name}</PlainWeightSpan>
      </H2>
      <Indent>
        <Description description={background.description}/>
        <StepList steps={background.steps || []}/>
      </Indent>
    </Section>
  )
}

export default Background
