[mii-open-api](globals.md)

# mii-open-api

[Bridge](docs/classes/_index_.bridge.md)

## Demo

#### 行为交互
```js
// 创建实例
const bridge = new Bridge('pluginA')

// 注入API
bridge.setBridge({
  getUser: async () => {
    return { nick: 'a' }
  },
})

// 获取API对象
const apis = bridge.getBridge()

// 调用API
const user = await apis.getUser()
console.log(user)
```

#### 数据交互
```js
// 创建实例
const bridge = new Bridge('pluginA')
// client, server具体的文档可以看https://github.com/search?l=JavaScript&q=jinter&type=Repositories
const { client, server } = bridge

/**
 *  根据服务路径注册服务
 */

// 注册get请求
server.onGet({
  path: "/test/get"
}, async (body)=>{
  console.log(body)
  return { someData: {} }
})

// 注册post请求
server.onGet({
  path: "/test/post"
}, async (data)=>{
  console.log(data)
  return { success: true }
})

// get数据
client.get({
  path: "/test/get/",
  data: {}
}).then(res=>{
  console.log(res)
})

// post数据
client.post({
  path: "/test/post",
  body: {}
}).then(res=>{
  console.log(res)
})
```
