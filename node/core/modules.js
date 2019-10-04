/*
console.log(module);
*/

/**
 * named export. Exports an object
 */
const logger = require('./services/logger');

/**
 * default export. Exports a functions
 */
const crypto = require('./services/crypto');

logger.log(crypto('passw0rd!_'));
