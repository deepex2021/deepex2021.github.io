# 快速开始

## 接入准备
如需使用API，请先登录网页端，通过【用户中心】-【API】创建一个API key，再据此文档详情进行开发和交易。

您可以点击 [这里](https://www.deepex.live/personal/apiManagement) 创建 API Key。

每个用户可创建5组API Key，每组API key可以绑定5个不同的IP地址。API key一旦绑定了IP地址，则只能从绑定的IP地址使用该API key调用API接口。出于安全考虑，强烈建议您为API key绑定相应的IP地址。

创建成功后请务必记住以下信息：

- `API Key`  API 访问密钥
- `Secret Key` 签名认证加密所使用的密钥

## 接口类型
DEEP为用户提供两种接口，您可根据自己的使用场景和偏好来选择适合的方式进行查询行情、交易。

**REST API**

REST，即Representational State Transfer的缩写，是一种流行的互联网传输架构。它具有结构清晰、符合标准、易于理解、扩展方便的，正得到越来越多网站的采用。其优点如右：

- 在RESTful架构中，每一个URL代表一种资源；
- 客户端和服务器之间，传递这种资源的某种表现层；
- 客户端通过四个HTTP指令，对服务器端资源进行操作，实现“表现层状态转化”。 

交易或资产等一次性操作，建议开发者使用REST API进行操作

**WebSocket API**

WebSocket是HTML5一种新的协议（Protocol）。它实现了客户端与服务器全双工通信，通过一次简单的握手就可以建立客户端和服务器连接，服务器可以根据业务规则主动推送信息给客户端。

市场行情和买卖深度等信息，建议开发者使用WebSocket API进行获取。

### 接口鉴权

以上两种接口均包含公共接口和私有接口两种类型。

公共接口可用于获取基础信息和行情数据。公共接口无需认证即可调用。

私有接口可用于交易管理和账户管理。每个私有请求必须使用您的API Key进行签名验证。

## 接入URLs

**REST API**

`https://openapi.deepex.live`

**WebSocket**

`wss://ws.deepex.live/kline-api/ws`

为保证API服务的稳定性，建议使用日本AWS云服务器进行访问。如使用中国大陆境内的客户端服务器，连接的稳定性将难以保证。


## 签名认证

**签名说明**

API 请求在通过 internet 传输的过程中极有可能被篡改，为了确保请求未被更改，除公共接口（基础信息，行情数据）外的私有接口均必须使用您的 API Key 做签名认证，以校验参数或参数值在传输途中是否发生了更改。

**签名步骤(推荐)**
    
1、请求方法（GET 或 POST），后面添加换行符 “\n”

例如： `GET\n`

2、访问域名，后面添加换行符 "\n"

例如：`openapi.deepex.live\n`

3、访问接口路径，后面添加换行符 "\n"

例如：`/open/api/create_order\n`

4、将接口参数以其参数名的字典序升序进行排序并使用字符 "&" 连接
例如：

`api_key=b80609d133fd8baa0999f232c7d24331&price=17&side=BUY&symbol=abcusdt&time=1596253598000&type=1&volume=10`

5、组成最终要进行签名的字符串
例如：

`GET\n`

`openapi.deepex.live\n`

`/open/api/create_order\n`

`api_key=b80609d133fd8baa0999f232c7d24331&price=17&side=BUY&symbol=abcusdt&time=1596253598000&type=1&volume=10`

6、用最终 “请求字符串” 和你的密钥 (Secret Key) 生成一个数字签名
1. 将上一步得到的请求字符串和 API 私钥作为两个参数，调用HmacSHA256哈希函数来获得哈希值。
2. 将此哈希值用base-64编码，得到的值作为此次接口调用的数字签名。
   
`89ADx5A3TLyMWVQj8Gqp+N6w+ivaA8I5Oi2SuYtKKYo=`

7、将数字签名加入到请求参数中
`sign=89ADx5A3TLyMWVQj8Gqp+N6w+ivaA8I5Oi2SuYtKKYo=`


**签名步骤(向后兼容)**

出于安全考虑，不建议使用该签名方法

生成待签名的字符串
    -   [open-api Demo](#open-api-java)
    
1、先将参数以其参数名的字典序升序进行排序

2、遍历排序后的字典，将所有参数按"keyvalue"格式拼接在一起（非空参数）

`api_key1234567time1596250406402type1`

3、在上述参数字符串后面拼接上用户的Secret Key
`api_key1234567time1596250406402type109d133fd8baa0999f232c7d24331`

4、对上述字符串进行MD5得出签名字符串

`sign = md5("api_key1234567time1596250406402type109d133fd8baa0999f232c7d24331")`
