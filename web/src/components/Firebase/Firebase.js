import { AuthProvider } from '@redwoodjs/auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseClientConfig = {
  apiKey: 'AIzaSyC1OyFjWoVHev9v2IWXxlmSFFynRtfPXQE',
  authDomain: 'redwood-playground-auth.firebaseapp.com',
  databaseURL: 'https://redwood-playground-auth.firebaseio.com',
  projectId: 'redwood-playground-auth',
  storageBucket: 'redwood-playground-auth.appspot.com',
  messagingSenderId: '753019137918',
  appId: '1:753019137918:web:c1db32964121ad6cbb8d2f',
}

const firebaseClient = ((config) => {
  firebase.initializeApp(config)
  return firebase
})(firebaseClientConfig)

export default (props) => {
  return <AuthProvider client={firebaseClient} type="firebase" {...props} />
}
