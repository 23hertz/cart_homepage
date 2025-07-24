// import { collection, addDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// const addItem = async () => {
//   try {
//     await addDoc(collection(db, "cart"), {
//       email: "iPhone",
//       password: "adeori123",
//     });
//     console.log("Test item added!");
//   } catch (error) {
//     console.error("Error adding item:", error);
//   }
// };

// import React from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// const Inputs = () => {
//   const addItem = async () => {
//     try {
//       await addDoc(collection(db, "cart"), {
//         email: "iPhone",
//         password: "adeori123",
//       });
//       console.log("Test item added to Firestore");
//     } catch (error) {
//       console.error("Error adding item:", error);
//     }
//   };

//   return (
//     <div className="flex justify-center mt-6">
//       <button
//         onClick={addItem}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Add Test Item
//       </button>
//     </div>
//   );
// };

// export default Inputs;

"use client";

import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Inputs = () => {
  const addItem = async () => {
    try {
      await addDoc(collection(db, "cart"), {
        email: "iPad",
        password: "a23",
      });
      console.log("Test item added to Firestore");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={addItem}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Test Item
      </button>
    </div>
  );
};

export default Inputs;
