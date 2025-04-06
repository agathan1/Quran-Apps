import React from "react";

export default async function getSurah() {
  const response = await fetch(import.meta.env.VITE_API_URL);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await response.json();
//   console.log(response);

  return response;
}
