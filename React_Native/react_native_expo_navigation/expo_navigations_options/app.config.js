export default ({ config }) => ({
  ...config,
  nodeModulesPaths: ["../../node_modules", "node_modules"],
  watchFolders: ["../../node_modules"],
});
