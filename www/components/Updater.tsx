import { useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { useStyledTheme } from '../hooks'

const variants = {
  from: {
    scale: 1,
    opacity: 0.75
  },
  to: {
    scale: 3,
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 10
    }
  }
}

const UpdaterBase = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ color }): string => color};
  border-radius: 10rem;
`

const Circle = styled(motion.div)`
  position: absolute;
  z-index: -1 !important;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme, color }): string => color};
  border-radius: 10rem;
`

function Circles({ total, color }): JSX.Element {
  const circlesToShow = useRef([])
  const largestSoFar = useRef(total - 1)

  if (
    !circlesToShow.current.map((c): number => c.total).includes(total) &&
    (circlesToShow.current.length === 0 ||
      circlesToShow.current[circlesToShow.current.length - 1].time < Date.now() - 0.25 * 1000) &&
    total > largestSoFar.current
  ) {
    circlesToShow.current = circlesToShow.current.concat([{ total, time: Date.now() }])
    largestSoFar.current = total
  }

  return (
    <>
      {circlesToShow.current.map(
        (i): JSX.Element => (
          <Circle
            color={color}
            key={i.total}
            variants={variants}
            initial="from"
            animate="to"
            onAnimationComplete={(): void => {
              circlesToShow.current = circlesToShow.current.filter((c): boolean => c.total !== i.total)
            }}
          />
        )
      )}
    </>
  )
}

export default function Updater({ team, total, ...rest }): JSX.Element {
  const theme = useStyledTheme()

  return (
    <UpdaterBase color={theme.colors[team]} {...rest}>
      <Circles total={total} color={theme.colors[team]} />
    </UpdaterBase>
  )
}
