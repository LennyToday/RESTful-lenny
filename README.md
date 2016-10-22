# RESTful-**_Lenny_** 
Providing ( ͡° ͜ʖ ͡°) to a hack near you!

![RESTful Lenny](http://i.imgur.com/LzBTC4r.png)

_A **Lenny** API_. Use this to bring **_Lenny_** face to your applications!

---

# API Documentation #

* [Get the original **_Lenny_**](#original-lenny)
* [Get a random **_Lenny_**](#random-lenny)
* [Get a **_Lenny_** for a specific seed](#lenny-for-seed)
* [Customise your **_Lenny_**](#customise-lenny)

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

___
<br>
<a name="customise-lenny"></a>
## Customise **_Lenny_**
When getting a random or the original **_Lenny_**, you can specify what characters to use for the different parts of the face.

If you're generating the **original** **_Lenny_**, any parts of the face you don't specify will use the original **_Lenny_** face parts.

If you're generating a **random** **_Lenny_**, any parts of the face you don't specify will be random.

### Query Parameters
**All of these are optional.**<br>
Make sure to [URL Encode](http://meyerweb.com/eric/tools/dencoder/) your query parameters. (Your web browser will do this for you _most_ of the time)

| Name | Description | Example | **_Lenny_** |
|---|---|---|---|
| limit | Specify how many copies of the face to return. 500 max. | http://lenny.today/api/v1/lenny?limit=25 | ( ͡° ͜ʖ ͡°) |
| ears | What characters to use for both ears | [http://lenny.today/api/v1/lenny?ears=%C2%A3](http://lenny.today/api/v1/lenny?ears=%C2%A3) | £ ͡° ͜ʖ ͡°£ |
| leftear | What characters to use the left ear | [http://lenny.today/api/v1/lenny?leftear=%3C%5B](http://lenny.today/api/v1/lenny?leftear=%3C%5B) | &lt;[ ͡° ͜ʖ ͡°) |
| rightear | What characters to use the right ear | [http://lenny.today/api/v1/lenny?rightear=%5D%3E](http://lenny.today/api/v1/lenny?rightear=%5D%3E) | ( ͡° ͜ʖ ͡°]&gt; |
| eyes | What characters to use for both eyes | [http://lenny.today/api/v1/lenny?eyes=%E2%B4%B2](http://lenny.today/api/v1/lenny?eyes=%E2%B4%B2) | (ⴲ ͜ʖⴲ) |
| lefteye | What characters to use for the left eye | [http://lenny.today/api/v1/lenny?lefteye=%E2%96%A0](http://lenny.today/api/v1/lenny?lefteye=%E2%96%A0) | (■ ͜ʖ ͡°) |
| righteye | What characters to use for the left eye | [http://lenny.today/api/v1/lenny?righteye=%E2%9C%BF](http://lenny.today/api/v1/lenny?righteye=%E2%9C%BF) | ( ͡° ͜ʖ✿) |
| mouth | What characters to use for the mouth | [http://lenny.today/api/v1/lenny?mouth=%E2%8D%8A](http://lenny.today/api/v1/lenny?mouth=%E2%8D%8A) | ( ͡°⍊ ͡°) |


#### Example Request
Generate a **_Lenny_** with _ for the mouth and [ for the left ear.

`GET http://lenny.today/api/v1/lenny?mouth=_&leftear=%5B`

**Response**

HTTP Status Code: 200 OK<br>
Content-Type: application/json

**Example Response Body**
```json
[
  {
    "face": "[ ͡°_ ͡°)"
  }
]
```

<br>

#### Example Request
Generate 5 different **_Lenniez_** with ᨓ for the mouth and * for the eyes.

`GET http://lenny.today/api/v1/random?mouth=%E1%A8%93&eyes=*&limit=5`

**Response**

HTTP Status Code: 200 OK<br>
Content-Type: application/json

**Example Response Body**
```json
[
  {
    "seed": 1471673626,
    "face": "ヽ(*ᨓ*)ﾉ"
  },
  {
    "seed": 411656373,
    "face": "ᕮ*ᨓ*ᕭ"
  },
  {
    "seed": 3789943703,
    "face": "ᕙ(*ᨓ*)ᕗ"
  },
  {
    "seed": 1478520394,
    "face": "ლ(*ᨓ*ლ)"
  },
  {
    "seed": 4262060905,
    "face": "|*ᨓ*|"
  }
]
```
