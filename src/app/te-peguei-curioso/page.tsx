"use client";
import Image from "next/image";
import DataLayer from "@/app/DataLayer";
import Logo from "public/icons/logo.png"
import Countdown from "../components/CountDown";
import { useState } from "react";
import Footer from "../components/footer";


export default function Home() {
  const [ctaOnScreen, setCtaOnScreen] = useState(true);

  return (
    <main  className="bg-pic w-screen h-screen pt-5">
      <DataLayer
        type_page="captura"
        id_produto="1296776"
        operacao="ppt"
        type_content="organico"
        versao_pico="ppt"
      />
      <Image className="mx-auto" src={Logo} alt="logo fluxo"/>
      <section className="w-full bottom-0 absolute">
      <div className="w-full bg-gradient pb-16">
        <h1 className="text-[#BDCACD] text-[4rem] font-extrabold uppercase text-center leading-[5rem]">
        Não seja ansioso.
        </h1>
        <div className="border border-[#363636] w-fit mx-auto bg-[#1a1a1ab3] py-2 px-6 sm:px-3 rounded-lg flex items-center gap-12 sm:gap-0 sm:w-[21.43rem] sm:mt-12">
          <p className="text-[#ECECEC] text-[.875rem]">
          Volte aqui apenas no dia {" "} <strong>26/04</strong> a partir das {" "} <strong>12h.</strong>
          </p>
          <Countdown setCtaOnScreen={setCtaOnScreen}/>
        </div>
      </div>
      <Footer />
      </section>
    </main>
  );
}
