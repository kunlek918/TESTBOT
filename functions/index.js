const functions = require('firebase-functions');


 exports.BLACKCATBOT = functions.https.onRequest((req, res) => {
    res.send('สวัสดีค่ะ');
 }
);
