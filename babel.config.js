module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "nativewind/babel"],
    // If you use Reanimated, its plugin must be listed last.
    plugins: ["expo-router/babel", "react-native-reanimated/plugin"],
  };
};
