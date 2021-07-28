# API接入说明

## 请求格式
所有的API请求都是restful，目前只有两种方法：GET和POST。
- GET请求：所有的参数都在路径参数里
- POST请求，所有参数以JSON格式发送在请求主体（body）里

一个合法的请求由以下几部分组成：
- 方法请求地址：即访问服务器地址。https://openapi.deepex.live/open/api/create_order
- 必须和可选参数。

  以下几个参数是所有需要验签接口必须要提供的：
  - API key： 即用户申请的API Key中的Access Key。其字段名为api_key
  - 请求时间：即发起请求的时间。其字段名字为time
  - 签名：签名计算得出的值。其字段名字为sign

所有请求都必须包含以下Header：

- ACCESS-KEY API KEY作为一个字符串。
- ACCESS-SIGN 使用base64编码签名（请参阅签名消息）。
- ACCESS-TIMESTAMP 作为您的请求的时间戳。
- Content-Type  需要统一设置为:'application/x-www-form-urlencoded’。

## 返回格式

所有的接口返回都是JSON格式。在JSON的第一层有3个字段code，msg和data。前两个字段表示请求状态和描述，实际的业务数据在data字段里。

```json
{
    "code": "0",
    "msg": "suc",
    "data": // per API response data in nested JSON object
}

```
以下是一个返回格式的样例：

| 字段 | 数据类型  | 描述       |
| ---- | -----  | ---------- |
| code | string | 返回状态 |
| msg  | string | 状态或错误描述 |
| data | object | 业务数据  |


## 错误信息

**HTTP状态码**

HTTP常见的错误码如下：
- 400 Bad Request – Invalid request forma 请求格式无效

- 401 Unauthorized – Invalid API Key 无效的API Key

- 403 Forbidden – You do not have access to the requested resource 请求无权限

- 404 Not Found 没有找到请求

- 429 Too Many Requests 请求太频繁被系统限流

- 500 Internal Server Error – We had a problem with our server 服务器内部错误

**业务状态码**

如果失败，response body 带有错误描述信息, 对应的状态码描述如下：

| 状态码 | 说明                             | 备注                       |
| ------ | -------------------------------- | -------------------------- |
| 0      | 成功                             | code=0 成功， code >0 失败 |
| 1      | 系统错误                         |                            |
| 2      | 参数错误                         |                            |
| 3      | 用户未登录                       |                            |
| 4      | 余额不足                         |                            |
| 5      | 下单失败                         |                            |
| 6      | 数量小于最小值                   |                            |
| 7      | 数量大于最大值                   |                            |
| 8      | 订单取消失败                     |                            |
| 9      | 交易被冻结                       |                            |
| 11     | 短信验证码错误或过期             |                            |
| 12     | 未知的代币代号                   |                            |
| 14     | 验证码错误                       |                            |
| 19     | 可用余额不足                     |                            |
| 21     | 谷歌验证码错误或过期             |                            |
| 22     | 订单不存在                       |                            |
| 25     | 价格或数量精度超过最大限制       |                            |
| 26     | 用户不存在                       |                            |
| 28     | 邮箱验证码错误或过期             |                            |
| 31     | 价格或者金额小于最小值           |                            |
| 32     | 价格超出当日涨跌停范围，无法下单 |                            |
| 33     | 订单委托量超出最大限制           |                            |
| 34     | 下单超过频率限制                 |                            |
| 10069  | 涨跌停限制币对,不允许下市价单    |                            |
| 100100 | 用户名或密码错误                 |                            |
| 100101 | 用户登陆锁定两小时               |                            |
| 100102 | 用户被冻结                       |                            |
| 101115 | 当前交易量超出用户单日交易上限   |                            |
| 101117 | 当前币种不允许市价交易           |                            |
| 101999 | 该币种未开启                     |                            |


## 标准规范

### <span id="b1">时间戳</span> 
除非另外指定，API中的所有时间戳均以微秒为单位返回。

请求签名中的ACCESS-TIMESTAMP的单位是秒，允许用小数表示更精确的时间。请求的时间戳必须在API服务时间的30秒内，否则请求将被视为过期并被拒绝。如果本地服务器时间和API服务器时间之间存在较大的偏差，那么我们建议您使用通过查询API服务器时间来更新http header。

###  <span id="b2">例子</span> 
`1524801032573`

###  <span id="b3">数字</span> 
为了保持跨平台时精度的完整性，十进制数字作为字符串返回。建议您在发起请求时也将数字转换为字符串以避免截断和精度错误。

整数（如交易编号和顺序）不加引号。

###  <span id="b4">限流</span>  
如果请求过于频繁系统将自动限制请求，并在http header中返回429 too many requests状态码。

REST API

- 公共接口：我们通过IP限制公共接口的调用：每2秒最多6个请求。

- 私人接口：我们通过用户ID限制私人接口的调用：每秒最多10个请求。

- 某些接口的特殊限制在具体的接口上注明

