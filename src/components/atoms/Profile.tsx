import React, { Suspense } from "react";
import Avatar from "../../assets/project/avatar.jpg"
import Skeleton from "./Skeleton";
import Kaligrafi from "../../assets/project/kaligrafi.png"

type ProfileProps = {
  greeting?: string;
  name?: string;
  avatar?: string;
  desc?: string;
};

const OriginalImage = ({src, alt}: {src: string, alt: string}) => {
  
  return (
    <img className="size-40 w-56 rounded-full p-0" width={500} height={500} src={src} alt={alt} />
  );
}

export default function Profile({ greeting, name, avatar, desc }: ProfileProps) {

  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm font-medium text-secondary">{greeting}</p>
        <h3 className="text-2xl font-bold">{name}</h3>
        <h3 className="text-xl font-light">{desc}</h3>
      </div>
      <Suspense fallback={<Skeleton className="size-40 w-60 bg-gray-200 rounded-full dark:bg-gray-700" />}>
        <OriginalImage src={Kaligrafi} alt="Kaligrafi" />
      </Suspense>
    </div>
  );
}
