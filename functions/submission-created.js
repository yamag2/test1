exports.handler = function(event, context, callback) {
  console.log('event.body==>'+event.body);
  var body = event.body.split("payload=")[1];
  console.log('body ==>'+body);
};