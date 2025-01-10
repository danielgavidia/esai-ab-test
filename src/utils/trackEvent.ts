import { db } from "@/firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// Function to log events to Firestore
export const trackEvent = async (variant: string, eventType: string) => {
  try {
    await addDoc(collection(db, "events"), {
      variant,
      eventType,
      timestamp: Timestamp.now(),
    });
    console.log("Event tracked successfully!");
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};
