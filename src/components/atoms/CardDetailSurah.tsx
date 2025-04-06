import React from "react";
import Skeleton from "./Skeleton";

type DetailSurahProps = {
  nama?: string;
  arti?: string;
  tempatTurun?: string;
  jumlahAyat?: number;
  isLoading?: boolean;
};

export default function CardDetailSurah({
  arti,
  nama,
  tempatTurun,
  jumlahAyat,
  isLoading,
}: DetailSurahProps) {
  return (
    <div className="bg-secondary rounded-2xl">
      <div className="px-4 pt-4">
        <section className="flex flex-col mb-2 gap-2">
          {isLoading ? (
            // [...Array(2)].map((_, index) => (
            //   <Skeleton className="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-4" />
            // ))
            <>
              <Skeleton className="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2" />
              <Skeleton className="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-[40%]" />
            </>
          ) : (
            <>
              <p className="font-bold text-2xl text-primary">{nama}</p>
              <p className="font-medium text-xl text-primary">{arti}</p>
            </>
          )}
        </section>
        <hr className="border-1 border-primary mb-2 " />
        <section className="flex flex-col mb-6">
          {isLoading ? (
            <div className="">
              <Skeleton className="h-2 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2" />
              <span>
                <Skeleton className="h-2 bg-gray-200 rounded-lg dark:bg-gray-700" />
              </span>
            </div>
          ) : (
            <p className="font-semibold text-xl text-primary">
              {tempatTurun} | <span>{jumlahAyat} Ayat</span>
            </p>
          )}
        </section>
      </div>
      <section className="bg-primary w-full rounded-b-2xl">
        <div className="p-4 flex justify-between">
          <p className="text-secondary font-bold text-xl">Tentang Surah</p>
          <p className="shrink-0">➡️</p>
        </div>
      </section>
    </div>
  );
}
