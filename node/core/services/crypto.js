const crypto = require('crypto');

const secret = 'foo!bar!baz!123'

const encrypt = value => crypto.createHash('sha256', secret).update(value).digest('hex');

module.exports = encrypt;
