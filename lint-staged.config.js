module.exports = {
  '*': (filesArray) => {
    const files = filesArray.join();

    return [
      `nx affected --target=lint --parallel=3 --files=${files}`,
      `nx affected --target=stylelint --parallel=3 --files=${files}`,
      `nx format --target=write --parallel=3 --files=${files}`,
      `nx affected --target=test --parallel=3 --ci --files=${files}`,
    ];
  },
};
