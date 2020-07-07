import { Bridge, OpenAPI } from '../index'

describe(`open api`, () => {
  it(`demo`, async () => {
    let bridge = new Bridge('pluginA')

    let apis = bridge.getBridge()

    bridge.setBridge({
      getUser: async () => {
        return { nick: 'a' }
      },
    })

    let user = await apis.getUser()

    expect(user).toEqual({ nick: 'a' })
  })

  it(`empty`, async () => {
    let bridge = new Bridge('pluginA')

    let apis = bridge.getBridge()
    let user = await apis.getUser({ nick: 'a' })

    expect(user).toEqual({ success: true })
  })

  it(`OpenAPI`, async () => {
    let openAPI = new OpenAPI('pluginA', {
      getUser: async () => {
        return { nick: 'a' }
      },
    })
    let bridge = new Bridge('pluginA')
    let apis = bridge.getBridge()
    bridge.setBridge(openAPI.get())
    let user = await apis.getUser()
    expect(user).toEqual({ nick: 'a' })
  })

  it(`hacker`, async () => {
    let openAPI = new OpenAPI('pluginA', {
      getUser: async () => {
        return { nick: 'a' }
      },
    })
    let bridge = new Bridge('pluginA')
    let apis = bridge.getBridge()
    bridge.setBridge(openAPI.get())
    expect(() => {
      apis.getUser = async () => {
        return { nick: 'b' }
      }
    }).toThrowError(
      new Error(`[mii-open-api]: Can't rewrite the "getUser" api!`)
    )
    let user = await apis.getUser()
    expect(user).toEqual({ nick: 'a' })
  })
})
