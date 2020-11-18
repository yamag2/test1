const fs = require('fs')

exports.handler = function(event, context, callback) {
//  console.log('event.body==>'+event.body);
  var payload = JSON.parse(unescape(event.body));
//  console.log('payload==>'+payload);
//  console.log('payload[0]==>'+payload[0]);

//    fs.writeFileSync(path.resolve(__dirname, './comments.json'), JSON.stringify(payload))


};
