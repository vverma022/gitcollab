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
  apiKey: "AIzaSyBbElJSrFwCVrnAU5jbiV48bxMikVOABwc",
  authDomain: "gitcollab-5adcf.firebaseapp.com",
  projectId: "gitcollab-5adcf",
  storageBucket: "gitcollab-5adcf.firebasestorage.app",
  messagingSenderId: "553510098263",
  appId: "1:553510098263:web:e0d9c259ff38160e709a12",
  measurementId: "G-NJ0N01VC7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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