var request = require('request');
var schedule = require('node-schedule');

function scheduleCronstyle(){
    // schedule.scheduleJob('0 0 9 * * *', function(){
    request('http://192.168.30.240:7755/DailyReport', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(666, body)
            var temp = body.replace(/\\n/g, '\n');
            console.log(777, temp)
            var content = {
                "msgtype": "text",
                "text": {
                    "content": temp
                },
                "at": {
                    "atMobiles": [
                        // "13670184792"
                    ],
                    "isAtAll": true
                }
            }
            var  options = {
                method: 'post',
                url: 'https://oapi.dingtalk.com/robot/send?access_token=bc56764d715a56643323a209102b6c1af29a54e2c2be221368c8c8b4cf2f0a5a',
                json: content,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            };
            
            request(options, function (err, res, body1) {
                if (err) {
                    console.log('err', err)
                }else {
                    console.log('body1', body1);
                }
            })
        }
    })
    // })
}

scheduleCronstyle();