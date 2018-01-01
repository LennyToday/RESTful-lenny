# RESTful-**_Lenny_** 
Providing ( ͡° ͜ʖ ͡°) to a hack near you!

![RESTful Lenny](https://i.imgur.com/LzBTC4r.png)

_A **Lenny** API_. Use this to bring **_Lenny_** face to your applications!

---

To run the API, see SETUP.md.

---

# API Documentation #

* [Get the original **_Lenny_**](#original-lenny)
* [Get a random **_Lenny_**](#random-lenny)
* [Customise your **_Lenny_**](#customise-lenny)

<br>
<a name="original-lenny"></a>

## Original **_Lenny_** 

http://lenny.today/api/v1/lenny

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

___
<br>
<a name="random-lenny"></a>

## Random **_Lenniez_**

#### Request
**http://lenny.today/api/v1/random**

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
<a name="customise-lenny"></a>

## Customise **_Lenny_**

### Example Request
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


### Description
When getting a random **_Lenny_**, you can specify what characters to use for the different parts of the face.<br>
Any parts of the face you don't specify will be random.

**Facial Features**
* leftear
* rightear
* ears (overrides leftear and rightear)
* lefteye
* righteye
* eyes (overrides lefteye and righteye)
* mouth 

Make sure to [URL Encode](https://www.google.co.uk/search?q=url+encoder) your query parameters. (Your web browser will do this for you _most_ of the time)
