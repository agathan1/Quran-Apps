import { useCallback, useEffect, useState } from "react";
import Profile from "../atoms/Profile";
import CarddDaily from "../atoms/CarddDaily";
import SurahCard from "../atoms/SurahCard";
import { Link } from "react-router-dom";
import getSurah from "../../query/getSurah";
import { SurahCardProps } from "../../lib/type";
import Skeleton from "../atoms/Skeleton";
import Search from "../molecule/Search";

const dataSementara = [
  {
    id: 1,
    nomor: 1,
    nama: "Al-Fatihah",
    arti: "Pembukaan",
    jumlahAyat: 7,
    diturunkan: "Mekkah",
  },
  {
    id: 2,
    nomor: 2,
    nama: "Al-Baqarah",
    arti: "Kedua",
    jumlahAyat: 286,
    diturunkan: "Madinah",
  },
  {
    id: 2,
    nomor: 2,
    nama: "Al-Baqarah",
    arti: "Kedua",
    jumlahAyat: 286,
    diturunkan: "Madinah",
  },
  {
    id: 2,
    nomor: 2,
    nama: "Al-Baqarah",
    arti: "Kedua",
    jumlahAyat: 286,
    diturunkan: "Madinah",
  },
  {
    id: 2,
    nomor: 2,
    nama: "Al-Baqarah",
    arti: "Kedua",
    jumlahAyat: 286,
    diturunkan: "Madinah",
  },
  {
    id: 2,
    nomor: 2,
    nama: "Al-Baqarah",
    arti: "Kedua",
    jumlahAyat: 286,
    diturunkan: "Madinah",
  },
  {
    id: 2,
    nomor: 2,
    nama: "Al-Baqarah",
    arti: "Kedua",
    jumlahAyat: 286,
    diturunkan: "Madinah",
  },
];

export default function HomePage() {
  const [surah, setSurah] = useState<SurahCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isResultSearch, setIsResultSearch] = useState<SurahCardProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  // const [serach, setSearch] = useState([]);
  useEffect(() => {
    const fetchSurah = async () => {
      setIsLoading(true);
      try {
        const response = await getSurah();
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.data);
        setSurah(data.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchSurah();
  }, []);

  const handleSearch = async () => {
    setSearchLoading(true);
    setIsSearch(true);
    console.log("surah awal", surah);

    const filteredSurah = surah.filter((data) => {
      const regexForData = /[.,-?!'\s]/g;
      return data.namaLatin
        ?.toLowerCase()
        .replace(regexForData, "")
        .includes(search.toLowerCase().replace(regexForData, ""));
    });
    console.log("filteredSurah", filteredSurah);
    setIsResultSearch(filteredSurah);
    setSearchLoading(false);
  };

  // // Fungsi untuk mendeteksi tombol Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Mencegah form submit default
      handleSearch();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  // fitur untuk mereset data search
  const resetFilteredData = useCallback(() => {
    if (search.trim() === "") {
      setIsResultSearch([]);
      setIsSearch(false);
    }
  }, [search]);

  useEffect(() => {
    resetFilteredData();
  }, [resetFilteredData]);

  console.log("lodaing search", searchLoading);

  return (
    <div className="flex flex-col min-h-screen px-6 py-7 ">
      <div className="mb-8">
        <Profile
          greeting="Assalamu'alaikum"
          name="Quran App"
          desc="Membaca Quran dengan daring"
        />
      </div>

      <div className="mb-8">
        <Search
          onClick={handleSearch}
          placeholder="Cari Surah"
          onChange={handleChange}
          value={search}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="max-h-auto overflow-y-auto">
        {/* CONDITIONAL RENDERING UNTUK LOADING SAAT MERENDER DATA KETIKA DI FECTH */}
        {/* JIKA ISLOADING = TRUE, MAKA AKAN MERETURN CODE DIBAWAH */}
        {isLoading &&
          [...Array(10)].map((_, index) => (
            <Skeleton
              key={index}
              className="h-24 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-4"
            />
          ))}

        {searchLoading &&
          [...Array(10)].map((_, index) => (
            <Skeleton
              key={index}
              className="h-24 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-4"
            />
          ))}

        {/* CONDITIONAL RENDERING JIKA HASIL PENCARIAN TIDAK ADA*/}
        {/* JIKA ISSEARCH = TRUE DAN ISRESULTSEARCH = 0, MAKA AKAN MERETURN CODE DIBAWAH */}
        {isSearch && isResultSearch.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-bold text-2xl text-secondary">
              Surah Tidak Ditemukan
            </p>
          </div>
        ) : (
          !isSearch && (
            <div className="mb-2 flex justify-between">
              <p className="font-bold text-lg text-secondary">Daftar Surah</p>
              <p className="font-bold text-lg text-secondary">{surah.length} surah</p>
            </div>
          )
        )}

        {/* CONDITIONAL RENDERING JIKA HASIL PENCARIAN ADA DAN TAMPILAN AWALNYA */}
        {/* JIKA ISEARCH = TRUE MAKA AKAN MENAMPILKAN DATA DARI "ISRESULTSEARCH". NAMUN, JIKA ISSEARCH = FALSE MAKA AKAN MENAMPILKAN DATA DARI "SURAH" */}
        {(isSearch ? isResultSearch : surah).map((item) => (
          <div className="mb-4">
            <Link to={`/detail-surah/${item.nomor}`}>
              <SurahCard
                namaArab={item.nama}
                nomorSurah={item.nomor}
                namaLatin={item.namaLatin}
                artiSurah={item.arti}
                jumlahAyat={item.jumlahAyat}
                diturunkan={item.tempatTurun}
              />
            </Link>
          </div>
        ))}
      </div>
      {/* <SurahCard /> */}
    </div>
  );
}

// // Fungsi pencarian
// const handleSearch = async () => {
//   setIsLoading(true); // Set state loading ke true
//   // await new Promise((resolve) => setTimeout(resolve, 500)); // Simulasi delay pencarian
//   // const dataFiletered = dataDummy.filter(
//   const dataFiletered = dataReal.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
//       item.asset_code
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase().trim()) ||
//       item.area.toLowerCase().includes(searchTerm.toLowerCase().trim())
//     // console.log("contoh sorting", item.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
//     // item.condition.toLowerCase().includes(searchTerm.toLowerCase().trim())
//   );
//   setFilteredData(dataFiletered);
//   setItemsToShow(5); // Reset jumlah item saat pencarian baru
//   setIsLoading(false);
// };

// const filteredSurah = surah.filter((surah) => {
//   if (typeof serach === "string") {
//     console.log("serach", surah.namaLatin?.toLowerCase().includes(serach.toLowerCase()));
//     // return surah.nama.toLowerCase().includes(serach.toLowerCase());
//   }
//   return false;
// });

// const changeName = surah.map((surah) => {
//   let regex = /[\.,-?!']/g;
//   return surah.namaLatin?.toLowerCase().replace(/[.,-?!'\s]/g, "");
// });

// console.log("changeName", changeName);

// console.log("penghapusan spasi", search.toLocaleLowerCase().replace(/[\s]/, ""));
// console.log("penghapusan spasi", search.replace(/[\s]/g, ""));

// const filter = surah .filter((surah) => {
//   let regex = /[\.,-?!']/g;
//   return surah.namaLatin?.toLowerCase().replace(regex, "").includes(search.toLowerCase().replace(/[.,-?!'\s]/g, ""));
// });

// console.log("filter", filter);

{
  /* <div className="mb-8">
        <CarddDaily />
      </div> */
}

// useEffect(() => {
//   const getSurah = async () => {
//     const response = await getSurah();
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//   }
//   getSurah();
// }, []);

// {surah.map((item) => (
//   <div className="mb-4">
//     <Link to={`/detail-surah/${item.nomor}`}>
//       {/* <Link to={`/surah/${item.id}`}> */}
//       <SurahCard
//         // key={item.nomor}
//         namaArab={item.nama}
//         nomorSurah={item.nomor}
//         namaLatin={item.namaLatin}
//         artiSurah={item.arti}
//         jumlahAyat={item.jumlahAyat}
//         diturunkan={item.tempatTurun}
//       />
//     </Link>
//   </div>
// ))}

{
  /* {isResultSerach.map((item) => (
          <div className="mb-4">
            <Link to={`/detail-surah/${item.nomor}`}>
              <SurahCard
                namaArab={item.nama}
                nomorSurah={item.nomor}
                namaLatin={item.namaLatin}
                artiSurah={item.arti}
                jumlahAyat={item.jumlahAyat}
                diturunkan={item.tempatTurun}
              />
            </Link>
          </div>
        ))} */
}

{
  /* {isResultSearch.length == 0 && (
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">
              Data tidak ditemukan
            </p>
          </div>
        )} */
}
