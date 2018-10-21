import React from 'react'
import styled from 'styled-components';

const NavBar = styled.div`
  background-color: #0078D4;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  border-radius: .25rem;
`;

export default () => (
  <NavBar>
    <h1>مكتبة التطبيقات</h1>
  </NavBar>
)