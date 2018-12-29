var request = require('request');
var schedule = require('node-schedule');
var dayjs = require('dayjs');

function scheduleCronstyle(){
    // schedule.scheduleJob('0 0 9 * * *', function(){
    return
    request('http://v.juhe.cn/weather/index?cityname=2235&dtype=&format=&key=e0b4645d92d6676912c335816b3e9888', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)['result'];
            var temp = '各位老师早上好，现在气温是'+result['sk']['temp']+'摄氏度。今天气温在'+result['today']['temperature']+'之间，'+result['today']['weather']+'，'+result['today']['wind']+'。'+result['today']['dressing_advice'];
            var content = {
                "msgtype": "text",
                "text": {
                    "content": temp
                },
                "at": {
                    "atMobiles": [
                        "13670184792"
                    ],
                    "isAtAll": false
                }
            }
            var  options = {
                method: 'post',
                url: 'https://oapi.dingtalk.com/robot/send?access_token=44d54c2c17954aaa400f8019567e75980acc0e18465004245da6d0650dcbd582',
                json: content,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            };
            
            request(options, function (err, res, body1) {
                console.log(options)
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

(function scheduleCronstyle1() {
	schedule.scheduleJob('0 * * * * *', function () {
		var url = 'http://api.goseek.cn/Tools/holiday?date=' + dayjs().format('YYYYMMDD');
		var content = {
			msgtype: "text",
			text: {
				content: null
			}
		}
		request(url, function (error, response, body) {
			if (JSON.parse(body).data === 0) {
				content['text']['content'] = '今天是上班日'
			} else if (JSON.parse(body).data === 1) {
				content['text']['content'] = '今天是周末'
			} else if (JSON.parse(body).data === 2) {
				content['text']['content'] = '今天是节假日'
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
                console.log(options)
                if (err) {
                    console.log('err', err)
                }else {
                    console.log('body1', body1);
                }
            })
        })
	})
})()

// (function scheduleCronstyle1() {
// 	console.log(dayjs().format('YYYYMMDD'))
// })()
// scheduleCronstyle();