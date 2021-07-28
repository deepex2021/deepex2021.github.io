# 行情相关
##  获取所有交易对行情
获取所有交易对行情

```
curl https://openapi.deepex.live/open/api/get_allticker
```
### HTTP请求: 
- GET /open/api/get_allticker


> 响应

```json
{
    "code": "0",
    "msg": "suc",
    "data": {
    "ticker": [
        {
            "symbol": "btcusdt",
            "high": "11156.757",
            "vol": "25335.3953627840650451",
            "last": "10963.688",
            "low": "10842.3909",
            "buy": 10958.77,
            "sell": 10968,
            "change": "-0.0158573641955148",
            "rose": "-0.0158573641955148"
        },
        {
            "symbol": "wtusdt",
            "high": "0.1531",
            "vol": "13960810.11",
            "last": "0.15207",
            "low": "0.150962",
            "buy": 0.151699,
            "sell": 0.152843,
            "change": "-0.0061368939082015",
            "rose": "-0.0061368939082015"
        },
        ...
    ]
}
 ```


### 请求参数: 
* 该接口不进行签名校验
* 参数:无

### 响应数据: 
| 字段 | 实例   | 解释                                                                                                                                                                                                                                    |
| ---- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code | 0      |
| msg  | "suc"  | code>0失败                                                                                                                                                                                                                              |
| data | 如上图 | 返回值说明<br>date: 返回数据时服务器时间 <br>symbol: 交易对（交易对1(base)简称_交易对2(quote)简称） <br>buy: 买一价 <br>high: 最高价 <br>last: 最新成交价 <br>low: 最低价 <br>sell: 卖一价 <br>vol: 成交量(最近的24小时)<br>rose:涨跌幅 |

## 获取K线数据
获取K线数据

```
curl https://openapi.deepex.live/open/api/get_records?symbol=btcusdt&period=15
```

### HTTP请求:

GET /open/api/get_records


> 响应

```json
{
    "code": "0",
    "msg": "suc",
    "data": [
        [
            1595727000,  //时间，秒
            9674.4758,   //Open
            9675.8867,   //High
            9652.9081,   //Low
            9654.2835,   //Close
            369.67841    //成交量
        ],
        [
            1595727900,
            9654.2835,
            9658.4342,
            9652.6404,
            9658.0308,
            159.483355
        ],
        [
            1595728800,
            9658.0308,
            9658.9791,
            9641.8814,
            9649.003,
            80.145183
        ],
        ...
    ]
}
```
### 请求参数:
* 该接口不进行签名校验

| 参数   | 填写类型 | 说明                                     |
| ------ | -------- | ---------------------------------------- |
| symbol | 必填     | 交易对，bchbtc             |
| period | 必填     | 单位为分钟，比喻1分钟则为1，一天则为1440 |

### 响应数据:

| 字段 | 实例   | 解释       |
| ---- | ------ | ---------- |
| code | 0      |
| msg  | "suc"  | code>0失败 |
| data | 如上图 |


##  获取当前行情
获取当前行情

```
curl https://openapi.deepex.live/open/api/get_ticker?symbol=btcusdt
```

### HTTP请求:
- GET /open/api/get_ticker

> 响应

```json
{
    "code": "0",
    "msg": "suc",
    "data": {
        "high": "11156.757",
        "vol": "25397.4778447840650451",
        "last": "10958.1839",
        "low": "10842.3909",
        "buy": 10952.15,
        "sell": 10964.4335,
        "rose": "-0.0163514332972378",
        "time": 1514448473626
    }
}
```

### 请求参数:
* 该接口不进行签名校验

| 参数   | 填写类型 | 说明                          |
| ------ | -------- | ----------------------------- |
| symbol | 必填     | 交易对，btcusdt |


### 响应数据:

| 字段 | 实例   | 解释       |
| ---- | ------ | ---------- |
| code | 0      |
| msg  | "suc"  | code>0失败 |
| data | 如上图 |


## 获取行情成交记录
获取交易对的实时成交记录(最大返回200条最新成交记录)

```
curl https://openapi.deepex.live/open/api/get_trades?symbol=btcusdt
```

### HTTP请求:
- GET /open/api/get_trades

> 响应

```json
{
    "code": "0",
    "msg": "suc",
    "data": [
        {
            "symbol": "btcusdt",
            "count_coin": "USDT",
            "amount_precision": 6,
            "base_coin": "BTC",
            "price_precision": 4
        },
        {
            "symbol": "wtusdt",
            "count_coin": "USDT",
            "amount_precision": 2,
            "base_coin": "WT",
            "price_precision": 6
        },
        {
            "symbol": "ltcusdt",
            "count_coin": "USDT",
            "amount_precision": 4,
            "base_coin": "LTC",
            "price_precision": 2
        },
        ...
    ]
}
```
### 请求参数:

* 该接口不进行签名校验

| 参数   | 填写类型 | 说明                         |
| ------ | -------- | ---------------------------- |
| symbol | 必填     | 交易对，bchbtc |

### 响应数据:

| 字段 | 实例   | 解释       |
| ---- | ------ | ---------- |
| code | 0      |
| msg  | "suc"  | code>0失败 |
| data | 如上图 |


##  获取各个币对的最新成交价
获取各个币对的最新成交价

```
curl https://openapi.deepex.live/open/api/market
```

### HTTP请求:

- GET /open/api/market

> 响应

```json
{
    "code": "0",
    "msg": "suc",
    "data": {
        "btcusdt": 15000,
        "ethusdt": 800，
        "eosusdt": 200
        ... ...
    }   
}
```
### 请求参数:
* 该接口不进行签名校验

### 响应数据:

| 字段 | 实例                            | 解释       |
| ---- | ------------------------------- | ---------- |
| code | 0                               |
| msg  | "suc"                           | code>0失败 |
| data | 如右: |



##  查询买卖盘深度
查询买卖盘深度

```
curl https://openapi.deepex.live/open/api/market_dept?symbol=btcusdt&type=step0
```

### HTTP请求:
- GET /open/api/market_dept


> 响应

```json
{
    "code": "0",
    "msg": "suc",
    "data": { 
        "tick":{
            "asks":[//卖盘，价格由小到大
                [10968.4775,0.9332],
                [10985.9564,0.1222],
                [10993.3291,0.2778],
                [10995.8029,0.5882],
                [10998.8093,0.2982],
                ...
            ],
            "bids":[//买盘, 价格由大到小
                [10953.0857,0.1532],
                [10950,0.0226],
                [10942.8882,0.3178],
                [10941.0563,0.1862],
                [10938.2499,0.0912],
                ...
            ],
            "time": 1595995928119
        }
    }
}
```

### 请求参数:
* 该接口不进行签名校验

| 参数   | 填写类型 | 说明                                                            |
| ------ | -------- | --------------------------------------------------------------- |
| symbol | 必填     | 交易对，ethbtc                                    |
| type   | 必填     | 深度类型，step0, step1, step2（合并深度0-2）；step0时，精度最高 |

### 响应数据:

| 字段 | 实例   | 解释       |
| ---- | ------ | ---------- |
| code | 0      |
| msg  | "suc"  | code>0失败 |
| data | 如上图 |


## 查询系统支持的所有交易对及精度
查询系统支持的所有交易对及精度

```
curl https://openapi.deepex.live/open/api/common/symbols
```

### HTTP请求:

- GET /open/api/common/symbols


> 响应

```json
{
    "code": "0",
    "msg": "suc",
    "data": [
        {
        "symbol": "btcusdt",
        "count_coin": "USDT",
        "amount_precision": 6,
        "base_coin": "BTC",
        "price_precision": 4
        },
        {
        "symbol": "wtusdt",
        "count_coin": "USDT",
        "amount_precision": 2,
        "base_coin": "WT",
        "price_precision": 6
        },
        {
        "symbol": "wptusdt",
        "count_coin": "USDT",
        "amount_precision": 4,
        "base_coin": "WPT",
        "price_precision": 6
        },
        ...
    ]
}
```

### 请求参数:
* 参数:无

### 响应数据:

| 字段 | 实例   | 解释                                                                                                                                              |
| ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| code | 0      |
| msg  | "suc"  | code>0失败                                                                                                                                        |
| data | 如上图 | symbol 交易对<br>base_coin 基础币种<br>count_coin 计价货币<br>price_precision 价格精度位数（0为个位）<br>amount_precision 数量精度位数（0为个位） |

