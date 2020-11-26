const fs = require('fs')
const path = require('path')

exports.handler = function(event, context, callback) {
  console.log('event.body==>'+event.body);
  
  var payload = JSON.parse(event.body);
  console.log('payload==>'+payload);
  
  var data = payload.payload.data;
  console.log('data==>'+data);
  
  var articleno = payload.payload.data.articleno;
  console.log('articleno==>'+articleno);
  
//  console.log('payload[0]==>'+payload[0]);
//    fs.writeFileSync(path.resolve(__dirname, '../comments.json'), JSON.stringify(payload))

};
