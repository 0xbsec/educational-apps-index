import React from 'react'
import AppCard from './AppCard'
import { CategoryPropsType } from '../types'
import styled from 'styled-components';

const constructApplications = (applications) => (
  applications.map((application, index) => (
    <AppCard
      key={index}
      title={application.title}
      description={application.description}
      avatar={application.avatar}
      android_link={application.android_link}
      ios_link={application.ios_link}
    />
  ))
)

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryName = styled.h2`
  padding-right: 30px;
  color: white;
  background-color: #5959AB;
  height: 40px;
  line-height: 40px;
  max-width: 400px;
  min-width: 200px;
  border-radius: 15px 50px;
  margin-right: 5px;
`;

export default (props: CategoryPropsType) => (
  <div>
    <CategoryName>{props.name}</CategoryName>
    <Row>
      {constructApplications(props.applications)}
    </Row>
  </div>
)