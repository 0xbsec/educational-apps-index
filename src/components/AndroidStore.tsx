import React from 'react'
import { StorePropsType } from './types'
import AndroidStoreBadge from './icons/AndroidStoreBadge'

const AndroidStore = (props: StorePropsType) => (
  <a href={props.url}>
    <AndroidStoreBadge />
  </a>
)

export default AndroidStore;