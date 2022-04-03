importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCJLx_GiMFhDwsuZ9tRRynPejX0bsao-vM",
    authDomain: "velocity-d2bb3.firebaseapp.com",
    projectId: "velocity-d2bb3",
    storageBucket: "velocity-d2bb3.appspot.com",
    messagingSenderId: "253884187163",
    appId: "1:253884187163:web:614cb634b88adcb93ceebe"
});

firebase.messaging();

//background notifications will be received here
firebase.messaging().setBackgroundMessageHandler((payload) => {
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
    icon: '/logo.png',
  };
  registration.showNotification(title, options);
});
