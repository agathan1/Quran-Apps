import React from "react";
import { SurahCardProps } from "../../lib/type";

export default function SurahCard({
  nomorSurah,
  namaLatin,
  artiSurah,
  jumlahAyat,
  diturunkan,
  namaArab,
}: SurahCardProps) {
  return (
    <div className="text-primary bg-secondary rounded-xl hover:cursor-pointer shadow-black ">
      <div className="p-4 flex flex-row gap-4">
        {/* <div className="bg-primary text-secondary size-8 rounded-full">
        </div> */}
          <p className="bg-primary text-secondary font-bold size-10 flex justify-center items-center rounded-full shrink-0">
            {nomorSurah}
          </p>
        <div className="flex flex-col w-full gap-4">
          <section className="flex flex-row justify-between text-xl">
            <p className="font-bold">{namaLatin}</p>
            <p className="font-bold">{namaArab}</p>
          </section>
          <section className="font-semibold">
            <p className="text-lg">{artiSurah}</p>
            <p className="text-lg">
              {jumlahAyat} Ayat | <span>{diturunkan}</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
