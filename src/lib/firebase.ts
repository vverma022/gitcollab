// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import { resolve } from "path";
import { rejects } from "assert";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTH_DOMAIN ,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID ,
  appId: process.env.APP_ID,
  measurementId: process.env.MESUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file: File, setProgress?: (progress: number) => void ){
    return new Promise((resolve, reject) => {
        try {
        const storageRef = ref(storage, file.name)    
        const uplaodTask = uploadBytesResumable(storageRef,file)

        uplaodTask.on(`state_changed`, snapshot => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            if(setProgress) setProgress(progress)
                switch(snapshot.state){
            case 'paused': 
            console.log('Upload Paused'); break;
            case 'running': 
            console.log('Upload is Running'); break;

        }
    }, error => {
        reject(error)
    }, () => {
         getDownloadURL(uplaodTask.snapshot.ref).then(downloadUrl => {
            resolve(downloadUrl)
         })
    })
} catch(error) {
    console.error(error)
    reject(error)
}
    })

}