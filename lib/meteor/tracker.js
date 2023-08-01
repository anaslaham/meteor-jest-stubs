const Tracker = jest.fn();

Tracker.prototype.autorun = jest.fn();
Tracker.prototype.nonreactive = jest.fn();
Tracker.prototype.Dependency = jest.fn();

Tracker.prototype.Dependency.changed = jest.fn();
Tracker.prototype.Dependency.depend = jest.fn();

module.exports = {
    Tracker,
};
