import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhWSs6UgmIZdNH0H-4Wfc9j20oGvZmxt8",
  authDomain: "vibelychat-16f5b.firebaseapp.com",
  projectId: "vibelychat-16f5b",
  storageBucket: "vibelychat-16f5b.appspot.com",
  messagingSenderId: "472623904635",
  appId: "1:472623904635:web:32c64980f2c05c60f12fde",
  measurementId: "G-8DS5V3NS7D"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

window.uploadVideo = async function () {
  const file = document.getElementById("videoUpload").files[0];
  if (!file) return alert("Choose a video file!");

  const storageRef = ref(storage, `videos/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  showVideo(url);
};

function showVideo(url) {
  const container = document.getElementById("videoContainer");
  container.innerHTML = `<video controls src="${url}"></video>`;
}
