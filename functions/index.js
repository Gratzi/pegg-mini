const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// ogRewrite
// fetches pegg card database record, sets index.html meta tags.
//
exports.ogRewrite = functions.https.onRequest((req, res) => {
  const userId = req.url.split("/")[2];
  const cardId = req.url.split("/")[3];
  console.log(req.url);
  admin.database().ref('public/' + userId + '/' + cardId).once('value', (snapshot) => {
    var card = snapshot.val();
    const question = card.question.replace(/'/g, '&#39;').replace(/"/g, '&quot;');
    const image = card.pref.answer.image.url;
    const firstName = card.userName;
    const doc =
      "<!DOCTYPE html><html lang='en'><head>"+
      "<link rel='icon' type='image/x-icon' href='/static/favicon.ico'/>" +
      "<meta name=viewport content='width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no'>" +
      "<meta property='fb:app_id' content='1410524409215955'>" +
      "<meta property='og:url' content='https://pegg-staging.firebaseapp.com" + req.url + "'/>" +
      // "<meta property='og:type' content='video' />" +
      "<meta property='og:title' content='" + question + "'/>" +
      "<meta property='og:description' content='Pegg " + firstName + "'/>" +
      "<meta property='og:image' content='https://i.imgur.com/V6jGCIMb.jpg'/>"  +
      "<meta property='og:video:url' content='" + image + "'/>"  +
      "<meta property='og:video:secure_url' content='" + image + "'/>"  +
      "<meta property='og:video:type' content='video/mp4'/>"  +
      "<meta property='og:video:width' content='541'/>"  +
      "<meta property='og:video:height' content='541'/>"  +
      "<meta property='og:site_name' content='Pegg - Spark Conversation'/>" +
      "<meta name='twitter:card' content='summary_large_image'>" +
      "<meta name='twitter:site' content='@pegg_us'>" +
      "<meta name='twitter:creator' content='@augustinbralley'>" +
      "<meta name='twitter:title' content='" + question + "'/>" +
      "<meta name='twitter:description' content='Pegg " + firstName + "'>" +
      "<meta name='twitter:text:description' content='" + question + "'>" +
      "<meta name='twitter:image' content='" + image + "'>" +
      "<link href='/static/css/app.b063a4677c255079a58b2b61ab5b3edb.css' rel=stylesheet>" +
      "<script src='/static/js/manifest.fae709982857d00d4874.js'></script>" +
      "<script src='/static/js/vendor.48bfaccb57b68c99b708.js'></script>" +
      "<script src='/static/js/app.369127426603568c23f0.js'></script>" +
      "<title>Pegg - Spark Conversation</title>" +
      "</head><body>"+
      "<div id='app'></div>" +
      "</body></html>"
    // res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).send( doc );
  });
});
