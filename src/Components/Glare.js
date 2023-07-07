import React from "react";
import styled from "styled-components";


const GlareDiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    #fff 46.66%,
    #fff 96.15%
  );
  width: 100%;
  height: 62px;
`;

const Glare = () => {
  return <GlareDiv />;
};

export default Glare;
