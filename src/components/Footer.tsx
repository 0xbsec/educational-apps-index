import React from 'react'
import styled from 'styled-components';
import GithubIcon from './icons/GithubIcon';

const Footer = styled.div`
  background-color: #0078D4;
  height: 100px;
  color: white;
  margin-top: 50px;
  border-radius: .25rem;
  text-align: center;
`;

const GithubLink = styled(GithubIcon)`
  fill: white;
  width: 2em;
  height: 2em;
  display: inline-block;
  vertical-align: center;
`;

export default () => (
  <Footer>
    &copy; هدف الموقع فهرسة التطبيقات المفيدة. جميع الحقوق محفوظة للمبرمجين الأصليين.
    <br />
    الموقع مفتوح المصدر: <a href="https://gitub.com/0xbsec/educational-apps-index"><GithubLink /></a>
  </Footer>
)