'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DetailLayout({
  imageSrc,
  imageAlt,
  title,
  details,
}: Readonly<{
  imageSrc: string;
  imageAlt: string;
  title: string;
  details: Record<string, string | number | boolean>;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`flex gap-5 sm:gap-10 items-center sm:items-start flex-col sm:flex-row 
      transition-all duration-700 ease-out
      ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div>
        <Image
          alt={imageAlt}
          src={imageSrc}
          width={318}
          height={450}
          className="lg:w-79 w-62 h-87 lg:h-113 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="mt-7 font-medium text-muted-gray space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-5xl pb-4 font-bold text-black">
          {title}
        </h1>

        {Object.entries(details).map(([key, value]) => (
          <p key={key}>
            <span className="capitalize font-medium">{key}:</span>{" "}
            <span className="capitalize">{String(value)}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
