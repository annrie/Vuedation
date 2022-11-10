import {FirebaseApp} from './app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export const FirebaseAuth: firebase.auth.Auth = FirebaseApp.auth()
