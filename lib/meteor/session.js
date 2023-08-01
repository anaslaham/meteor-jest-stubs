const Session = jest.fn();

Session.prototype.set = jest.fn();
Session.prototype.setDefault = jest.fn();
Session.prototype.equals = jest.fn();
Session.prototype.get = jest.fn();

module.exports = { Session };
