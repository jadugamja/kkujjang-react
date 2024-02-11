import styled from "styled-components";

const GridBox = styled.div`
  display: grid;
  grid-template-columns: ${({ cols, items, size }) =>
    cols
      ? setGridTemplateColumns(cols)
      : items
        ? setGridTemplateRepeatColumns(items, size)
        : "1fr"};
  grid-template-rows: ${({ rows }) => setGridTemplateRows(rows)};
  grid-gap: ${({ gap }) => setGridGap(gap)};
  grid-auto-flow: ${({ flow }) => setGridAutoFlow(flow)};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  justify-content: ${({ row }) => setJustifyContent(row)};
  align-items: ${({ col }) => setAlignItems(col)};
`;

const setGridTemplateColumns = (cols) => {
  return cols;
};

const setGridTemplateRepeatColumns = (items, size = "1fr") => {
  return `repeat(${items}, ${size})`;
};

const setGridTemplateRows = (rows) => {
  return rows || "auto";
};

const setGridGap = (gap) => {
  return gap || "0";
};

const setGridAutoFlow = (flow) => {
  switch (flow) {
    case "col":
      return "column";
    default:
      return "row";
  }
};

const setJustifyContent = (row) => {
  switch (row) {
    case "center":
      return "center";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    default:
      return "flex-start";
  }
};

const setAlignItems = (col) => {
  switch (col) {
    case "center":
      return "center";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "baseline":
      return "baseline";
    case "stretch":
      return "stretch";
    default:
      return "stretch";
  }
};

export default GridBox;
