import React from 'react'
import AndroidStore from './AndroidStore'
import IosStore from './IosStore'
import LazyLoad from 'react-lazyload';
import Placeholder from './Placeholder';
import styled from 'styled-components';
import { ApplicationCardPropsType } from '../types'

const Card = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  width: 300px;
  padding-top: 1rem;
  margin: 1rem;
`;

const CardImg = styled.img`
  width: 250px;
  height: 250px;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
  vertical-align: middle;
  border-style: none;
  margin: auto;
`;

const CardBody = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`;

const CardTitle = styled.h3`
  text-align: right;
  margin-bottom: .75rem;
`;

const CardDescription = styled.p`
  text-align: right;
  height: 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default (props: AppCardPropsType) => (
  <Card>
    <LazyLoad height={200} placeholder={<Placeholder />} once>
      <CardImg src={props.avatar} alt="Avatar" />
    </LazyLoad>
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
      <Row>
        {props.android_link && <AndroidStore url={props.android_link} />}
        {props.ios_link && <IosStore url={props.ios_link} />}
      </Row>
    </CardBody>
  </Card>
)