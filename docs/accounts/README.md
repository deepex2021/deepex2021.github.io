# 账户相关


## 资产余额

获取用户资产余额

### HTTP请求: 
- GET /open/api/user/account


> 响应 

```json
{
    "code": "0",
    "msg": "suc",
    "data": {
        "total_asset":16822,
        "coin_list": [
            {
                "coin":"btc",
                "normal":32323.233,
                "locked":32323.233,
                "btcValuatin":112.33
            },
            {
                "coin":"ltc",
                "normal":68.2,
                "locked":69.2,
                "btcValuatin":112.33
            },       
        ]
    }
}
```

### 请求参数

| 参数    | 填写类型 | 说明    |
| ------- | -------- | ------- |
| api_key | 必填     | api_key |
| time    | 必填     | 时间戳  |
| sign    | 必填     | 签名    |

### 响应数据

| 字段 | 实例  | 解释       |
| ---- | ----- | ---------- |
| code | 0     |            |
| msg  | "suc" | code>0失败 |
| data | 如上图: |
