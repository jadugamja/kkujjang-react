export const sharedTheme = {
  color: {
    gray100: "#E5E5E5",
    gray200: "#D6D6D6",
    gray300: "#C9C9C9",
    gray400: "#929292",
    gray500: "#7D7D7D",
    error: "#FF6C6C", // 빨강
    success: "#486DFF", // 파랑
    kakao: "#FFDE00"
  },
  fontSize: {
    xxs: "18px",
    xs: "20px",
    s: "22px",
    m: "24px",
    l: "28px",
    xl: "30px",
    xxl: "36px",
    xxxl: "40px"
  }
};

export const webTheme = {
  ...sharedTheme,
  color: {
    ...sharedTheme.color,
    background: "#F1EFE9",
    content: "#FAF9F4",
    button: {
      main: {
        background: "#413014",
        hover: "#947C54",
        text: "#FFF"
      },
      sub: {
        background: "#E5E5E5",
        hover: "#D9D9D9",
        text: "#434343"
      }
    },
    text: {
      main: "#32250F"
    }
  }
};

export const gameTheme = {
  ...sharedTheme,
  color: {
    ...sharedTheme.color,
    background: "#1C1405",
    content: "#79ACEF"
  }
};

export const theme = {
  webTheme,
  gameTheme
};

export default theme;
