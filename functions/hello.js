exports.handler = function(event, context, callback) {
  console.log('this is fxxin test.');
  callback(null, {
    statusCode: 200,
    body: "Hi, World"
  });
};