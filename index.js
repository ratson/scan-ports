'use strict'

const _ = require('lodash')
const pMap = require('p-map')
const connectPort = require('connect-port')

module.exports = async (host, ports, { concurrency = 1 } = {}) => {
  const connected = await pMap(
    ports,
    async port => {
      try {
        const socket = await connectPort({ host, port })
        socket.destroy()
        return true
      } catch (err) {
        return false
      }
    },
    { concurrency },
  )
  return _.zipObject(ports, connected)
}
