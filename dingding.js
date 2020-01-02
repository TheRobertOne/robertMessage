var request = require('request');

function get_access_token() {
  request('https://oapi.dingtalk.com/gettoken?appkey=dingsqk5c7abvirvjhwv&appsecret=yJRz5O3fP5Y27qOTtexSJfQDC8d59c5CPF0afQoU76L2xcYMAUnmT57FxAIHDjP4', function (error, response, body) {
    var result = JSON.parse(body)['result'];
    console.log(999, JSON.parse(body))
    alert(JSON.parse(body).access_token)
        // if (!error && response.statusCode == 200) {
            
        // }
    })
    // })
}

get_access_token()