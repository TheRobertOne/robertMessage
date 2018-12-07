var request = require('request');
var schedule = require('node-schedule');

function scheduleCronstyle(){
    // 18520829095
    schedule.scheduleJob('0 0 16 * * *', function(){
        request('http://api.goseek.cn/Tools/holiday', function (error, response, body) {
            if (JSON.parse(body).data === 0) {
                var content = {
                    "msgtype": "text",
                    "text": {
                        "content": 'KK哥，现在是北京时间16:00，辛苦修改我们的H5。康桑哈密达 (o^^o)'
                    },
                    "at": {
                        "atMobiles": [
                            "18520829095"
                        ],
                        "isAtAll": false
                    }
                }
                var  options = {
                    method: 'post',
                    url: 'https://oapi.dingtalk.com/robot/send?access_token=e9de94209a6e5c3e86276760408fe89c0fc7837ee49bf89f25dc425e0117c519',
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
    })
}

function scheduleCronstyle1(){
    schedule.scheduleJob('0 0 17 * * *', function(){
        request('http://api.goseek.cn/Tools/holiday', function (error, response, body) {
            if (JSON.parse(body).data === 0) {
                var content = {
                    "msgtype": "text",
                    "text": {
                        "content": '各位研发老C, 龙哥熊妹提醒各位: 17:00, 我们开始剪辑录屏课啦～ 翻牌子今儿到此结束～'
                    },
                    "at": {
                        "isAtAll": true
                    }
                }
                var  options = {
                    method: 'post',
                    url: 'https://oapi.dingtalk.com/robot/send?access_token=ca950c0616667abe38a22d9dc063c78cf48235a6b288184e16aa7afd92894761',
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
    })
}

scheduleCronstyle();
scheduleCronstyle1();