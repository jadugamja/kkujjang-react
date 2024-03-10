export const sharedTheme = {
  colors: {
    gray100: "#E5E5E5", // 아주 옅은 회색
    gray200: "#D6D6D6", // 옅은 회색
    gray300: "#C9C9C9", // 회색
    gray400: "#C1C1C1", // 조금 짙은 회색
    gray500: "#929292", // 짙은 회색
    gray600: "#7D7D7D", // 더 짙은 회색
    gray700: "#4E4E4D", // 아주 짙은 회색
    error: "#FF6C6C", // 빨강
    success: "#486DFF", // 파랑
    paleBlueGray: "#B6C6DD", // 채도 낮은 파랑
    kakao: "#FFDE00"
  },
  fontSize: {
    xxxxs: "14px",
    xxxs: "18px",
    xxs: "20px",
    xs: "21px",
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
  colors: {
    ...sharedTheme.colors,
    background: "#fff",
    content: "#FAF9F4",
    button: {
      main: {
        background: "#413014",
        hover: "#554730",
        text: "#FFF"
      },
      sub: {
        background: "#E5E5E5",
        hover: "#D9D9D9",
        text: "#434343"
      }
    },
    text: {
      main: "#32250F",
      sub: "#363636"
    }
  }
};

export const gameTheme = {
  ...sharedTheme,
  colors: {
    ...sharedTheme.colors,
    background: "#1C1405",
    content: "#79ACEF",
    text: {
      main: "#32250F",
      sub: "#363636"
    }
  }
};

export const theme = {
  webTheme,
  gameTheme
};

export default theme;
