import React from "react";

export default async function getDetailSurah(id: number): Promise<{ datas: React.ReactNode[] }>{
  try {
    const response = await fetch(
      `https://api.quran.com/api/v4/chapters/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // return data;
    return { datas: data };
  } catch (error) {
    console.error(error);
  }
}


// import React, { useState, useEffect } from "react";

// export default async function getDetailSurah(
//   id: number
// ): Promise<{ datas: React.ReactNode[] }> {
//   const [datas, setDatas] = useState<React.ReactNode[]>([]);
//   try {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     setDatas(data);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }

//   return { datas };
// }

// https://equran.id/api/v2/surat/:nomor
