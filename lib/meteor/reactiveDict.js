const ReactiveDict = jest.fn();

ReactiveDict.prototype.get = jest.fn();
ReactiveDict.prototype.set = jest.fn();

module.exports = {
    ReactiveDict,
};
