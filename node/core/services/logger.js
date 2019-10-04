const url = 'https://logger.io/log';

const log = message => console.log(`Writing to ${url} message: ${message}`);

module.exports.log = log;

/**
 * Export under a different name
 */
module.exports.endPoint = url;
