import {Bridge} from '../index'

describe(`open api`, () => {

  it(`demo`, async () => {
    let bridge = new Bridge("pluginA")

    let apis = bridge.getBridge()

    bridge.setBridge({
      getUser: async () =>{ return {nick: "a"} }
    })

    let user = await apis.getUser()

    expect(user).toEqual({nick: "a"})
  })

  it(`empty`, async () => {

    let bridge = new Bridge("pluginA")

    let apis = bridge.getBridge()
    let user = await apis.getUser({nick: "a"})

    expect(user).toEqual({"success": true})
  })
})
