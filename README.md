# RESTful-**_Lenny_**
Providing ( ͡° ͜ʖ ͡°) to a hack near you!

![RESTful Lenny](http://i.imgur.com/LzBTC4r.png)

---
## Get the original **_Lenny_**
If no limit is specified, only 1 will be returned.<br>
The maximum amount is 500.<br>
#### Request
Method: _GET_<br>
Authentication: _None_
> http://lenny.today/api/v1/lenny?limit=5

#### Successful Response
HTTP Status Code: 200 OK<br>
Content-Type: application/json

**Example Response Body**
```json
[
  {
    "face": "( ͡° ͜ʖ ͡°)"
  },
  {
    "face": "( ͡° ͜ʖ ͡°)"
  },
  {
    "face": "( ͡° ͜ʖ ͡°)"
  },
  {
    "face": "( ͡° ͜ʖ ͡°)"
  },
  {
    "face": "( ͡° ͜ʖ ͡°)"
  }
]
```

#### Error Response
HTTP Status Code: 400 BAD REQUEST<br>
Content-Type: application/json

**Example Response Body**<br>
If you try to request too many **_Lenniez_**.
```json
{
  "ლ(⏓益⏓ლ)": "┬─┬ノ( ´ᗝ`ノ)"
}
```

---
<br>

## Get random **_Lenniez_**
If no limit is specified, only 1 will be returned.<br>
The maximum amount is 500.<br>
The seed uniquely identify the generated **_Lenny_**.

#### Request
Method: _GET_<br>
Authentication: _None_
> http://lenny.today/api/v1/random?limit=5

#### Successful Response
HTTP Status Code: 200 OK<br>
Content-Type: application/json

**Example Response Body**
```json
[
  {
    "seed": 821691682,
    "face": "ᕮ・□・ᕭ"
  },
  {
    "seed": 1128195852,
    "face": "ᕙ(  ͌ ε   ͌)ᕗ"
  },
  {
    "seed": 3640482282,
    "face": "(ง⪦ᨎ⪧)ง"
  },
  {
    "seed": 1997991881,
    "face": "ᑫxロxᑷ"
  },
  {
    "seed": 3152860005,
    "face": "(づ■⍊■)づ"
  }
]
```

#### Error Response
HTTP Status Code: 400 BAD REQUEST<br>
Content-Type: application/json

**Example Response Body**<br>
If you try to request too many **_Lenniez_**.
```json
{
  "ლ(⏓益⏓ლ)": "┬─┬ノ( ´ᗝ`ノ)"
}
```
---
<br>

## Get a **_Lenny_** for a specified seed
Use the seed returned by the **random** endpoint.

If no limit is specified, only 1 will be returned.<br>
The maximum amount is 500.<br>
#### Request
Method: _GET_<br>
Authentication: _None_
> http://lenny.today/api/v1/lenny/seed/4266279875?limit=2

#### Successful Response
HTTP Status Code: 200 OK<br>
Content-Type: application/json

**Example Response Body**
```json
[
  {
    "seed": 4266279875,
    "face": "(づ♥⍊♥)づ"
  },
  {
    "seed": 4266279875,
    "face": "(づ♥⍊♥)づ"
  }
]
```

#### Error Response
HTTP Status Code: 400 BAD REQUEST<br>
Content-Type: application/json

**Example Response Body**<br>
If you try to request too many **_Lenniez_**.
```json
{
  "ლ(⏓益⏓ლ)": "┬─┬ノ( ´ᗝ`ノ)"
}
```

---
<br>