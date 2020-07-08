[mii-open-api](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [Bridge](_index_.bridge.md)

# Class: Bridge

## Hierarchy

* **Bridge**

## Index

### Constructors

* [constructor](_index_.bridge.md#constructor)

### Properties

* [apis](_index_.bridge.md#private-apis)
* [client](_index_.bridge.md#client)
* [openAPI](_index_.bridge.md#private-openapi)
* [server](_index_.bridge.md#server)

### Methods

* [getAPI](_index_.bridge.md#getapi)
* [getBridge](_index_.bridge.md#getbridge)
* [setBridge](_index_.bridge.md#setbridge)

## Constructors

###  constructor

\+ **new Bridge**(`code`: string): *[Bridge](_index_.bridge.md)*

*Defined in [src/index.ts:62](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *[Bridge](_index_.bridge.md)*

## Properties

### `Private` apis

• **apis**: *[API](../modules/_index_.md#api)*

*Defined in [src/index.ts:62](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L62)*

___

###  client

• **client**: *Client*

*Defined in [src/index.ts:69](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L69)*

___

### `Private` openAPI

• **openAPI**: *[OpenAPI](_index_.openapi.md)*

*Defined in [src/index.ts:61](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L61)*

___

###  server

• **server**: *Server*

*Defined in [src/index.ts:70](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L70)*

## Methods

###  getAPI

▸ **getAPI**(): *object*

*Defined in [src/index.ts:74](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L74)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (`args?`: undefined | object): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

___

###  getBridge

▸ **getBridge**(): *object*

*Defined in [src/index.ts:77](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L77)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (`args?`: undefined | object): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

___

###  setBridge

▸ **setBridge**(`apis`: [API](../modules/_index_.md#api)): *void*

*Defined in [src/index.ts:71](https://github.com/jincdream/mii-open-api/blob/08f4c5f/src/index.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`apis` | [API](../modules/_index_.md#api) |

**Returns:** *void*
