import styled from "styled-components";
import React from "react";

const Model = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0 , 85%);
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  overflow: hidden;
  z-index: 100;
`;

const ImageDiv = styled.div`
  margin: 15px;
`;

const ModelImg = styled.img`
  width: auto;
  height: auto;
  max-height: ${(props) => (props.h700 ? "700px" : "800px")};
  margin: 0 auto;
`;

const Cross = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 15px;
  cursor: pointer;
  border-radius: 40px;
  padding: 0;
  width: 40px;
  height: 40px;

  & box-icon {
    fill: #ff5d61;
    width: 26px;
    height: 26px;
  }
`;

const ImagePopup = ({ setModel, Image }) => {
  return (
    <Model>
      <ImageDiv>
        <ModelImg src={Image} />
      </ImageDiv>
      <Cross onClick={() => setModel(false)}>
        <box-icon name="x"></box-icon>
      </Cross>
    </Model>
  );
};

export default ImagePopup;
