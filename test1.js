var os = require('os');

function getInterfaceName() {
    var val = 'eth';
    var platform = os.platform();
    if (platform === 'darwin') {
        val = 'en';
    } else if (platform === 'win32') {
        val = null;
    }
    return val;
}

const address = new Function()

address.interface = function (family, name) {
    var interfaces = os.networkInterfaces();
    var noName = !name;
    name = name || getInterfaceName();
    family = family || 'IPv4';
    for (var i = -1; i < 8; i++) {
        var interfaceName = name + (i >= 0 ? i : ''); // support 'lo' and 'lo0'
        // console.log(4321, interfaces)
        var items = interfaces[interfaceName];
        // console.log(666666, items)
        if (items) {
            // console.log(1234, items)
            for (var j = 0; j < items.length; j++) {
                var item = items[j];
                if (item.family === family) {
                    return item;
                }
            }
        }
    }
    
    if (noName) {
        // filter 127.0.0.1, get the first ip
        for (var k in interfaces) {
            var items = interfaces[k];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.family === family && item.address !== '127.0.0.1') {
                    return item;
                }
            }
        }
    }
    return;
};

address.ip = function (interfaceName) {
    var item = address.interface('IPv4', interfaceName);
    return item && item.address;
};

console.log(address.ip())
