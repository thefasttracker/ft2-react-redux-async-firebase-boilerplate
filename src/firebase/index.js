import firebase from "firebase";
import { config } from '../../config/config'

	

firebase.initializeApp(config);



firebase.database().ref().set({
	appName: 'ft2_Site'
})

// export const githubProvider = new firebase.auth.GithubAuthProvider()
// export const firebaseRef = firebase.database().ref()
// export default firebase