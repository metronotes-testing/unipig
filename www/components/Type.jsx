import styled from 'styled-components'
import { transparentize } from 'polished'
import GradientText from '../components/GradientText'

// HEADING

const StyledHeading = styled.p`
  color: ${({ theme }) => theme.colors.greys[6]};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 16px;
  width: 100%;
`

export function Heading({ children, ...rest }) {
  return <StyledHeading>{children}</StyledHeading>
}

// TITLE

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-weight: 600;
  padding-bottom: 12px;
  color: ${({ color }) => (color ? color : 'initial')} !important;
`

const StyledGradientTitle = styled(GradientText)`
  margin: 0;
  font-size: ${({ size }) => (size ? size + 'px' : '4rem')};
  font-weight: 600;
  padding-bottom: 12px;
`

export function Title({ children, textStyle, ...rest }) {
  if (textStyle === 'gradient') {
    return <StyledGradientTitle {...rest}>{children}</StyledGradientTitle>
  } else {
    return <StyledTitle {...rest}>{children}</StyledTitle>
  }
}

// BODY

const StyledGradientBody = styled(GradientText)`
  width: 100%;
  font-size: 24px;
  line-height: 162.7%;
`

const StyledBody = styled.p`
  width: 100%;
  font-size: ${({ size }) => (size ? size + 'px' : '24px')};
  margin: 0.25rem;
  color: ${({ color }) => (color ? color : 'initial')} !important;
`

export function Body({ children, textStyle, ...rest }) {
  if (textStyle === 'gradient') {
    return <StyledGradientBody {...rest}>{children}</StyledGradientBody>
  } else {
    return <StyledBody {...rest}>{children}</StyledBody>
  }
}

// DESC

const StyledDesc = styled.p`
  color: ${({ theme }) => transparentize(0.2, theme.colors.textColor)};
  font-size: 16px;
  line-height: 183.5%;
  max-width: 250px;
`

export function Desc({ children, ...rest }) {
  return <StyledDesc {...rest}>{children}</StyledDesc>
}

// BUTTON

const StyledButtonText = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

export function ButtonText({ children, ...rest }) {
  return <StyledButtonText>{children}</StyledButtonText>
}
