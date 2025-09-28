import Login from "@/components/auth/Login";
import Image from "next/image";

export default function Home() {
  return (
    <main className="md:h-screen flex flex-col md:flex-row gap-5">
      <section className=" bg-primary lg:min-w-120 w-full md:w-60 lg:w lg:w-1/5 grid place-content-center h-50 md:h-full">
        <Image src='/logo.png' alt="starwars-logo" width={385} height={167} className="w-[200px] lg:w-[385px]"/>
      </section>
   <section className="md:flex-1 md:grid md:place-content-center">
    <Login/>
   </section>
    </main>
  );
}
