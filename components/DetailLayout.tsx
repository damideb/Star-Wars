import Image from "next/image";

export default function DetailLayout({
  imageSrc,
  imageAlt,
  title,
  details,
}: Readonly<{
  imageSrc: string;
  imageAlt: string;
  title: string;
  details: Record<string, string|number|boolean>;
}>) {
//   const renderValue = (value: unknown) => {
//     if (value === null || value === undefined || value === "") return "-";
//     if (Array.isArray(value)) return value.length ? value.join(", ") : "-";
//     if (typeof value === "object") return JSON.stringify(value);
//     return String(value);
//   };

  return (
    <div className=" flex gap-5 sm:gap-10 items-center sm:items-start flex-col sm:flex-row ">
      <div>
        <Image
          alt={imageAlt}
          src={imageSrc}
          width={318}
          height={450}
          className="lg:w-[318px] w-[250px] h-[350px] lg:h-[450px] object-cover"
        />
      </div>

      <div className="mt-7 font-medium text-muted-gray space-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-5xl pb-4 font-bold text-black">
          {title}
        </h1>

        {Object.entries(details).map(([key, value]) => (
          <p key={key} className={/^[A-Z]/.test(key) ? "" : ""}>
            <span className="capitalize font-medium">{key}:</span>{" "}
            <span
              className={
                typeof value === "string" && value.toLowerCase() === value
                  ? "capitalize"
                  : ""
              }
            >
              {value}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
