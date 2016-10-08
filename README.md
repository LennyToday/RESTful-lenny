# RESTful-**_Lenny_**
Providing ( ͡° ͜ʖ ͡°) to a hack near you!

![RESTful Lenny](http://i.imgur.com/LzBTC4r.png)

---

# API Documentation #

* [Get the original **_Lenny_**](#original-lenny)
* [Get a random **_Lenny_**](#random-lenny)
* [Get a **_Lenny_** for a specific seed](#lenny-for-seed)

<br>
<a name="original-lenny"></a>
## Get the original **_Lenny_**

#### Request
```GET``` **http://lenny.today/api/v1/lenny**

You can request up to 500 copies of the original **_Lenny_** per request using the **limit** query parameter.<br>
E.g. http://lenny.today/api/v1/lenny?limit=25 will return 25 copies.

#### Example Request
`GET http://lenny.today/api/v1/lenny`<br>

**Response**

HTTP Status Code: 200 OK<br>
Content-Type: application/json

**Example Response Body**
```json
[
  {
    "face": "( ͡° ͜ʖ ͡°)"
  }
]
```

### Error Responses
#### Invalid limit
If you try to request too many **_Lenniez_**.

HTTP Status Code: 400 BAD REQUEST<br>
Content-Type: application/json

**Response Body**<br>
```json
{
  "ლ(⏓益⏓ლ)": "┬─┬ノ( ´ᗝ`ノ)"
}
```

___
<br>
<a name="random-lenny"></a>
## Get a random **_Lenny_**

#### Request
```GET``` **http://lenny.today/api/v1/random**

You can request up to 500 **different** **_Lenniez_** per request using the **limit** query parameter.<br>

#### Example Request
`GET http://lenny.today/api/v1/random?limit=5`<br>

**Response**

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

### Error Responses
#### Invalid limit
If you try to request too many **_Lenniez_**.

HTTP Status Code: 400 BAD REQUEST<br>
Content-Type: application/json

**Response Body**<br>
```json
{
  "ლ(⏓益⏓ლ)": "┬─┬ノ( ´ᗝ`ノ)"
}
```

___
<br>
<a name="lenny-for-seed"></a>
## Get a **_Lenny_** for a specified seed
Use the seed returned by the **random** endpoint.

#### Request
```GET``` **http://lenny.today/api/v1/lenny/seed/_seednumber_**

You can request up to 500 copies of the original **_Lenny_** per request using the **limit** query parameter.<br>
E.g. http://lenny.today/api/v1/lenny/seed/4266279875?limit=25 will return 25 copies.



#### Example Request
`GET http://lenny.today/api/v1/lenny/seed/4266279875`<br>

**Response**

HTTP Status Code: 200 OK<br>
Content-Type: application/json

**Example Response Body**
```json
[
  {
    "seed": 4266279875,
    "face": "(づ♥⍊♥)づ"
  }
]
```

### Error Responses
#### Invalid limit
If you try to request too many **_Lenniez_**.

HTTP Status Code: 400 BAD REQUEST<br>
Content-Type: application/json

**Response Body**<br>
```json
{
  "ლ(⏓益⏓ლ)": "┬─┬ノ( ´ᗝ`ノ)"
}
```