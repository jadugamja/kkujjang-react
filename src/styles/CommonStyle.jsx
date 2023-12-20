import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  ${(props) => setDirection(props.dir)}
  ${(props) => setHorizontalAlign(props.row)}
  ${(props) => setVerticalAlign(props.col)}
`;

export const Gradation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #00000000);
  z-index: -1;
`;

export const SubmitButtonWrapper = styled(FlexBox)`
  width: 100%;
  height: 75px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: inherit;
  background-color: ${(props) => props.theme.color.button.main.background};
  color: ${(props) => props.theme.color.button.main.text};
  font-size: ${(props) => props.theme.fontSize.xl};
`;

// flex-box의 flex-direction 설정
const setDirection = (dir) => {
  switch (dir) {
    case "col":
      return `
              flex-direction: column;
          `;
  }
};

// flex-box 안의 justify-content 값 설정
const setHorizontalAlign = (row) => {
  switch (row) {
    case "center":
      return `
              justify-content: center;
          `;
    case "start":
      return `
              justify-content: flex-start;
          `;
    case "end":
      return `
              justify-content: flex-end;
          `;
    case "between":
      return `
              justify-content: space-between;
          `;
  }
};

// flex-box 안의 align-items 값 설정
const setVerticalAlign = (col) => {
  switch (col) {
    case "center":
      return `
              align-items: center;
          `;
    case "start":
      return `
              align-items: flex-start;
          `;
    case "end":
      return `
              align-items: flex-end;
          `;
    case "baseline":
      return `
              align-items: baseline;
          `;
    case "stretch":
      return `
              align-items: stretch;
          `;
  }
};
