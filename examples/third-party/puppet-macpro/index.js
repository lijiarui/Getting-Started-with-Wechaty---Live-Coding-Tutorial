/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-console */
const { Wechaty } = require('wechaty')
const { PuppetMacpro } = require('wechaty-puppet-macpro')
const qrTerm = require('qrcode-terminal')

// Please change the token below to the one that you are given.
const WECHATY_PUPPET_MACPRO_TOKEN = 'puppet_macpro_xxxxxxxxxxxx'

const puppet = new PuppetMacpro({
  token: WECHATY_PUPPET_MACPRO_TOKEN,
})

const bot = new Wechaty({
  puppet,
  name: 'your_bot_name',
})

// 运行 wechaty
bot
  .on('scan', async (qrcode) => {
    await qrTerm.generate(qrcode, { small: true })
  })
  .on('login', user => {
    console.log(`User ${user} login.`)
  })
  .on('message', message => {
    console.log(`Message: ${message}`)
  })
  .start()
