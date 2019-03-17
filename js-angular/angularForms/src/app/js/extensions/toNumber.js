String.prototype.toNumber = function () {
  return parseFloat(this.replace(/,/g, ''));
};