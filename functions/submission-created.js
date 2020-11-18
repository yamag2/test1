exports.handler = function(event, context, callback) {
  console.log('event.body==>'+event.body);
  var payload = JSON.parse(unescape(event.body));
  console.log('payload==>'+payload);
  console.log('payload[0]==>'+payload[0]);
};