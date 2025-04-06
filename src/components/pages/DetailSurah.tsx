import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardDetailSurah from "../atoms/CardDetailSurah";
import BackIcon from "../../assets/icons/BackIcon";
import SurahCard from "../atoms/SurahCard";
import { DetailSurahProps } from "../../lib/type";
import AyatCard from "../molecule/AyatCard";
import Avatar from "../../assets/project/avatar.jpg";

const namaQori = [
  {
    id: 1,
    name: "Abdullah",
  },
  {
    id: 2,
    name: "Abdullah",
  },
  {
    id: 3,
    name: "Abdurrahman",
  },
  {
    id: 4,
    name: "Ibrahim",
  },
]

const ComponentQori = () => {
  return (
    <div className="bg-primary p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <img className="size-20 rounded-full" src={Avatar} alt="Avatar" />
        <p>Nama Qori</p>
      </div>
    </div>
  );
};

export default function DetailSurah() {
  const { id } = useParams();
  const numberId = Number(id);
  const navigate = useNavigate();
  const [isAyat, setIsAyat] = useState<DetailSurahProps[]>([]);
  const [isDetailSurah, setIsDetailSurah] = useState<DetailSurahProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate("/home");
  };

  // const {data} = getDetailSurah(numberId);
  // console.log(data);

  useEffect(() => {
    const fetchDetailSurah = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/${numberId}`,
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
        setIsDetailSurah(data.data);
        setIsAyat(data.data.ayat);
        console.log("DATAAAAA ==> ", data.data);
        console.log("DATAAAAA AYYYYATTT==> ", data.data.ayat);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchDetailSurah();
  }, [id]);

  console.log(id);
  console.log(typeof numberId);
  // console.log(isAyat);
  console.log(isDetailSurah);

  return (
    <div className="min-h-screen flex flex-col px-6 py-7">
      <div className="flex justify-between mb-8">
        <button
          className="bg-secondary size-12 rounded-2xl hover:cursor-pointer hover:bg-secondary/75"
          onClick={handleBack}
        >
          <BackIcon fill="none" className="mr-1" />
        </button>

        <section className="flex flex-col grow text-center mr-6">
          <h1 className="font-bold  grow text-center text-2xl">
            {isDetailSurah.namaLatin}
          </h1>
          <span className=" text-md text-slate-600 text-center">
            {isDetailSurah.arti}
          </span>
        </section>
      </div>

      <div>
        <div className="mb-4 text-secondary font-semibold flex justify-between">
          <p className="text-lg my-auto">Qari Bacaan</p>
          <p className="bg-secondary text-primary p-2 rounded-xl text-sm">
            Pilih Qari
          </p>
        </div>
        <div className="mb-4 flex flex-row gap-3 hover:cursor-pointer">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <ComponentQori />
            </div>
          ))}
        </div>
      </div>

      <CardDetailSurah
        isLoading={isLoading}
        nama={isDetailSurah.namaLatin}
        arti={isDetailSurah.arti}
        tempatTurun={isDetailSurah.tempatTurun}
        jumlahAyat={isDetailSurah.jumlahAyat}
      />
      <section className="mt-8">
        {isAyat.map((data, index) => (
          <div key={index} className="mb-4">
            <AyatCard
              nomorAyat={data.nomorAyat}
              textArab={data.teksArab}
              latinnya={data.teksLatin}
              indonya={data.teksIndonesia}
            />
          </div>
        ))}
      </section>

      {/* {isAyat.map((data) => (
        <div key={data.nomorAyat} className="mt-8">
          <SurahCard namaArab={data.teksLatin} nomorSurah={data.nomorAyat} />
        </div>
      ))} */}

      {/* <SurahCard
        // namaArab={data.nama}
        // nomorSurah={data.nomor}
        // namaSurah={data.namaLatin}
        // jumlahAyat={data.jumlahAyat}
        // diturunkan={data.tempatTurun}
        artiSurah={isAyat.arti}
      /> */}
      {/* {isAyat.map((data) => (
        <div className="mt-8 w-full">
          <SurahCard
            // namaArab={data.nama}
            // nomorSurah={data.nomor}
            // namaSurah={data.namaLatin}
            // jumlahAyat={data.jumlahAyat}
            // diturunkan={data.tempatTurun}
            artiSurah={data.arti}
          />
        </div>
      ))} */}
    </div>
  );
}
