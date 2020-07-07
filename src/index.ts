import ActionCore from 'action-core'
type Actions = {
  OpenApi: {}
}
type API = { [key: string]: (args?: object) => Promise<any> }
class OpenAPI extends ActionCore<Actions> {
  private apis: API = {}
  private bizCode: string
  private apisProxy: {}
  constructor(bizCode: string) {
    super()
    this.install<object>('OpenApi', async ({ data, target }) => {
      let { apis } = this
      let fn =
        apis[target] ||
        async function(args) {
          console.log('no api', target, args)
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
        set: () => false,
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
    this.openAPI = new OpenAPI(code)
    this.apis = this.openAPI.get()
  }
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
