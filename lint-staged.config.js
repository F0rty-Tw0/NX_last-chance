module.exports = {
  '*': (filesArray) => {
    const files = filesArray.join();

    return [
      `nx affected --target=lint --parallel=5 --files=${files}`,
      `nx affected --target=stylelint --parallel=5 --files=${files}`,
      `nx format --target=write --parallel=5 --files=${files}`,
      `nx affected --target=test --parallel=5 --ci --files=${files}`,
    ];
  },
};
