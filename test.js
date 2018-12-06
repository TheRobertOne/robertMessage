var request = require('request');

var title = 'tv/s1/1-36-My-Colorful-Birthday';

var text = 'tv/s'+title.slice(0,1)+'/'+title;
var messageUrl = 'https://courses.abctime.com/'+text+'/debug.html';
var content = {
    "msgtype": "link",
    "link": {
        "text":text,
        "title": title,
        "picUrl": "",
        "messageUrl": messageUrl
    }
}
// var content = {
//     "msgtype": "text",
//     "text": {
//         "content": title
//     }
// }
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
        // console.log('body1', body1);
    }
})