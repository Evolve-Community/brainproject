import StyledWindow from "components/system/Window/StyledWindow";
import styled from "styled-components";

const StyledPDF = styled.div`
  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  top: 40px;

  ${StyledWindow} & {
    height: ${({ theme }) =>
      `calc(100% - ${theme.sizes.titleBar.height} - 40px) !important`};
  }

  canvas {
    box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
    margin: 4px 4px 0;
  }
`;

export default StyledPDF;
