# RESTful-lenny
Providing ( ͡° ͜ʖ ͡°) to a hack near you!

![RESTful Lenny](http://i.imgur.com/LzBTC4r.png)

---
## Get the original Lenny
#### Request
Method: _GET_<br>
Authentication: _None_
> _&lt;PLACEHOLDER&gt;_/api/v1/lenny

#### Successful Response
HTTP Status Code: 200 OK<br>
Content-Type: application/json

#### Example Response Body
```json
{
    "face": "( ͡° ͜ʖ ͡°)"
}
```
---
<br>
## Get a random Lenny
If no limit is specified, only 1 will be returned.<br>
The maximum amount is 500.
#### Request
Method: _GET_<br>
Authentication: _None_
> _&lt;PLACEHOLDER&gt;_/api/v1/random?limit=5

#### Successful Response
HTTP Status Code: 200 OK<br>
Content-Type: application/json

#### Example Response Body
```json
[
    {
        "face": "୨❍‸❍୧"
    },
    {
        "face": "ᕕ(ȍᗝȍ)ᕗ"
    },
    {
        "face": "ᖗx人xᖘ"
    },
    {
        "face": "ᕙ(◕ヮ◕)ᕗ"
    },
    {
        "face": "ʕ ﾟ ³ ﾟʔ"
    }
}
```
---