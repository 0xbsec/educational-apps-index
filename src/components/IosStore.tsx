import React from 'react'
import { StorePropsType } from './types'
import IosStoreBadge from './icons/IosStoreBadge'

const IosStore = (props: StorePropsType) => (
  <a href={props.url}>
    <IosStoreBadge />
  </a>
)

export default IosStore;