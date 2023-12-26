const path = require("path");

module.exports = function override(config) {
  // resolve.extensions 배열에 '.jsx' 추가
  config.resolve.extensions.push(".jsx");

  // babel-loader 설정에서 '.jsx' 확장자를 처리할 수 있도록 함
  config.module.rules[1].oneOf.unshift({
    test: /\.(jsx)$/,
    include: config.module.rules[1].oneOf[1].include,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [
        [
          "@babel/preset-react",
          {
            runtime: "automatic"
          }
        ]
      ]
    }
  });

  // 웹팩 alias 설정 추가 (절대 경로)
  config.resolve.alias = {
    ...config.resolve.alias,
    // @: "src" 폴더를 가리키는 별칭
    ["@"]: path.resolve(__dirname, "src")
  };

  return config;
};
