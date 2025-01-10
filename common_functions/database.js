import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Registers the best time in Firestore with the player's pseudo.
 * Before sending, it checks if the new score is better than the current largest time in all levels.
 * @param {number} time - The player's best time in seconds.
 * @param {string} pseudo - The player's pseudo.
 */
export async function sendBestTime(collectionName, time, pseudo) {
    if (time <= 0 || !pseudo || pseudo.trim() === "") {
        console.error("Time or pseudo incorrect.");
        return;
    }

    try {
        // Get all documents in the "collectionName" collection
        const querySnapshot = await getDocs(collection(db, collectionName));

        let highestScoreDoc = null;
        let highestScore = -Infinity;  // Start with the lowest possible value

        // Iterate through all the documents in the collection to find the highest (largest) score
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const currentBestTime = data.bestTime;
            if (currentBestTime > highestScore) {
                highestScore = currentBestTime;
                highestScoreDoc = doc.id; // Keep track of the document with the highest score
            }
        });

        // Compare the new time with the highest score across all levels
        if (time < highestScore) {
            // If the new time is lower (better), update the document with the highest score
            const levelDoc = doc(db, collectionName, highestScoreDoc);
            await setDoc(levelDoc, {
                bestTime: time,
                pseudo: pseudo,
                date: new Date().toISOString(), // Timestamp
            });
        }
    } catch (error) {
        console.error("Error during loading best times:", error);
    }
}

// Attach the function to the window object to reuse-it
window.sendBestTime = sendBestTime;