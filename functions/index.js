const functions = require('firebase-functions');
const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ykMEkl3aNiK/bKmCSs+IpuZtQmdPQ4stWI5RPHvepvg+MakYKpihEZcyMZPUJKrNY7Z42WDGTO8pTe8gbb+FnQXtJ2ElBBqg7uxnvU4ywqU+SvVLywO6MicaRWFPim0AixYSW9BH9Qk7SYPMs9CwiwdB04t89/1O/w1cDnyilFU=`
};

exports.LineBot = functions.https.onRequest((req, res) => {
  if (req.body.events[0].message.type !== 'text') {
    return;
  }
  reply(req.body);
});

const reply = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: bodyResponse.events[0].message.text
        }
	  ]
    })
  });
};