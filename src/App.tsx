import React from 'react'
import { hot } from 'react-hot-loader'
import Category from 'components/Category'
import applicationsData from 'data/applications'
import styled from 'styled-components';
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

const constructCategories = (data) => (
  data.map((category, index) => (
    <Category
      key={index}
      name={category.name}
      applications={category.applications}
    />
  ))
)

const Content = styled.div`
  background-color: #F0F8FF;
`;

const App = () => (
  <Content>
    <NavBar />
    {constructCategories(applicationsData)}
    <Footer />
  </Content>
)

export default hot(module)(App)
