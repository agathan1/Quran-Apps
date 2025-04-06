export type SurahCardProps = {
    nomorSurah?: number;
    namaLatin?: string;
    artiSurah?: string;
    jumlahAyat?: number;
    diturunkan?: string;
    namaArab?: string;
};

export type DetailSurahProps = SurahCardProps & {
    ayat?: string | Array<string>;
    audio?: string | Array<string>;
    deskripsi?: string;
    suratSelanjutnya?: string | object;
}