import React from 'react';
import styled, { keyframes } from 'styled-components';

const Placeholder = styled.div`
  background: #f8f8f8;
  height: 200px;
  margin: 10px 0;
  padding-top: 80px;
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
`;

const rotate = keyframes`
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1.0); }
`;

const Rect = styled.div`
  background-color: #999;
  height: 100%;
  width: 6px;
  display: inline-block;

  animation: ${rotate} 1.2s infinite ease-in-out;
`;

const Rect1 = styled(Rect)``;

const Rect2 = styled(Rect)`
  animation-delay: -1.1s;
`;

const Rect3 = styled(Rect)`
  animation-delay: -1.0s;
`;

const Rect4 = styled(Rect)`
  animation-delay: -0.9s;
`;

const Rect5 = styled(Rect)`
  animation-delay: -0.8s;
`;

export default () => {
  return (
    <Placeholder>
      <Spinner>
        <Rect1 />
        <Rect2 />
        <Rect3 />
        <Rect4 />
        <Rect5 />
      </Spinner>
    </Placeholder>
  );
}