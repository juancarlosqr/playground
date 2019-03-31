const sillyname = require('sillyname')

const helloMessage = () => {
  const name = sillyname().split(' ')
  return {
    first_name: name[0],
    last_name: name[1],
  }
}

module.exports = {
  helloMessage
}
