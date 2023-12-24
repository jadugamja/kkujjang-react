module.exports = function override(config, env) {
  // resolve.extensions 배열에 '.jsx' 추가
  config.resolve.extensions.push(".jsx");

  // babel-loader 설정에서 '.jsx' 확장자를 처리할 수 있도록 함
  config.module.rules[1].oneOf.unshift({
    test: /\.(jsx)$/,
    include: config.module.rules[1].oneOf[1].include,
    loader: require.resolve("babel-loader"),
    options: {
      presets: ["@babel/preset-react"]
    }
  });

  return config;
};
