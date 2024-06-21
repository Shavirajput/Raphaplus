import styled from "styled-components";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const ImageIcon = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const CopyrightPharma = styled.div`
  position: relative;
  line-height: 200%;
  z-index: 1;
`;
const Footer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-12xs);
`;
const HomeRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 76px 63px 19px;
  box-sizing: border-box;
  gap: 277px;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: 14px;
  color: #000;
  font-family: var(--font-inter);
  @media screen and (max-width: 975px) {
    gap: 138px;
    padding-left: var(--padding-12xl);
    padding-right: var(--padding-12xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 700px) {
    gap: 69px;
  }
`;

const HOME = () => {
  return (
    <HomeRoot>
      <ImageIcon alt="" src="/image@2x.png" />
      <FrameComponent1 />
      <FrameComponent />
      <Footer>
        <CopyrightPharma>
          Copyright © Pharma | Designed by rapha plus
        </CopyrightPharma>
      </Footer>
    </HomeRoot>
  );
};

export default HOME;
