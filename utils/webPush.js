import 'firebase/messaging'
import firebase from 'firebase/app'
import localforage from 'localforage'

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token')
  },

  init: async function () {
    firebase.initializeApp({
        apiKey: "AIzaSyCJLx_GiMFhDwsuZ9tRRynPejX0bsao-vM",
        authDomain: "velocity-d2bb3.firebaseapp.com",
        projectId: "velocity-d2bb3",
        storageBucket: "velocity-d2bb3.appspot.com",
        messagingSenderId: "253884187163",
        appId: "1:253884187163:web:614cb634b88adcb93ceebe"
    })

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false
      }

      const messaging = firebase.messaging()
      await Notification.requestPermission()
      const token = await messaging.getToken()

      localforage.setItem('fcm_token', token)
      console.log('fcm_token', token)
    } catch (error) {
      console.error(error)
    }
  },
}

export { firebaseCloudMessaging }