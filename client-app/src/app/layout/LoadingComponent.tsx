import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

interface Props {
  inverted?: boolean
  content?: string
}

export default function LoadingComponent(props: Props) {
  const { inverted, content } = props
  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  )
}
