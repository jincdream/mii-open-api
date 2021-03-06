import ActionCore from 'action-core'
import { Client, Server } from 'jinter'
type Actions = {
  OpenApi: {}
}
type API = { [key: string]: (args?: object) => Promise<any> }
export class OpenAPI extends ActionCore<Actions> {
  private apis: API = {}
  private bizCode: string
  private apisProxy: {}
  constructor(bizCode: string, apis: API = {}) {
    super()
    this.apis = apis
    this.install<object>('OpenApi', async ({ data, target }) => {
      let { apis } = this
      let fn =
        apis[target] ||
        async function(args: object) {
          console.warn('no api', target, args)
          return { success: true }
        }
      let rz = await fn(data)
      return rz
    })
    this.bizCode = bizCode
    this.apisProxy = this.init()
  }
  set(apis: API) {
    this.apis = apis
  }
  get() {
    return this.apisProxy
  }
  init() {
    return new Proxy(
      {},
      {
        set: (obj, props: string) => {
          throw new Error(`[mii-open-api]: Can't rewrite the "${props}" api!`)
        },
        defineProperty: () => false,
        getPrototypeOf: () => null,
        setPrototypeOf: () => false,
        deleteProperty: () => false,
        apply: () => false,
        get: (obj: object, props: string) => {
          return async (data?: object) => {
            return await this.run({
              type: 'OpenApi',
              target: props,
              bizCode: this.bizCode,
              data,
            })
          }
        },
      }
    )
  }
}
export class Bridge {
  private openAPI: OpenAPI
  private apis: API
  constructor(code: string) {
    this.server = new Server(code)
    this.client = new Client(code)
    this.openAPI = new OpenAPI(code)
    this.apis = this.openAPI.get()
  }
  public client: Client
  public server: Server
  setBridge(apis: API) {
    this.openAPI.set(apis)
  }
  getAPI() {
    return this.apis
  }
  getBridge() {
    return this.apis
  }
}
