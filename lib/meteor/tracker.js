const Tracker = jest.fn();

Tracker.prototype.autorun = jest.fn();
Tracker.prototype.nonreactive = jest.fn();
Tracker.Dependency = jest.fn().mockImplementation(() => {
    return {
        changed: jest.fn(),
        depend: jest.fn(),
    };
});

module.exports = {
    Tracker,
};
