import React from "react";

type AyatListProps = {
  latinnya?: string;
  indonya?: string;
};

interface AyatCardProps extends AyatListProps {
  nomorAyat?: number;
  textArab?: string;
}

// console.log('AyatCard PROPS', AyatCardProps);

const AyatList = ({ latinnya, indonya }: AyatListProps) => {
  return (
    <div className="mt-2 space-y-1">
      <p>{latinnya}</p>
      {/* <hr className="mt-2"/> */}
      <p>{indonya}</p>
    </div>
  );
};

export default function AyatCard({
  nomorAyat,
  textArab,
  latinnya,
  indonya,
}: AyatCardProps) {
  return (
    <div className="text-primary bg-secondary rounded-xl hover:cursor-pointer shadow-black ">
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-row justify-between gap-1">
          <p className="bg-primary text-secondary font-bold size-10 flex justify-center items-center rounded-full shrink-0">
            {nomorAyat}
          </p>
            <p className="font-bold text-right text-2xl">{textArab}</p>
        </div>
        <hr className="mt-2"/>
        {/* <div className="flex flex-col w-full gap-4"></div> */}
        <section className="text-lg">
          <AyatList indonya={indonya} latinnya={latinnya} />
        </section>
        <div className="flex flex-col w-full"></div>
      </div>
    </div>
  );
}
