module.exports = {
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "timers": require.resolve("timers-browserify"),
      },
    },
  }; 