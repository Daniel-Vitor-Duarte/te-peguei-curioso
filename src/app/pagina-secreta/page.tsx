import Image from "next/image";
import DataLayer from "../DataLayer";
import Logo from "public/icons/logo.png"
import Retiro from "public/images/video-retiro.jpg"
import Prints from "public/images/prints.png"
import PrintsM from "public/images/prints-mobile.png"
import Footer from "@/app/components/footer";
import Script from "next/script";
import Video from "../components/video";


export default function Home() {
  return (
    <main className="bg-black">
      {/* <DataLayer
        type_page="captura"
        id_produto="1296776"
        operacao="ppt"
        type_content="organico"
        versao_pico="ppt"
      /> */}
      <section className="bg-secreto w-full pt-2 sm:pt-8">
        <Image className="mx-auto" src={Logo} alt="logo fluxo" />
        <h1 className="text-[#CCDBDE] text-[4.6875rem] sm:text-[1.8125rem] font-extrabold w-[53.5625rem] sm:w-full mx-auto text-center leading-[4.75rem] sm:leading-[1.8125rem] mt-[20.19rem] sm:mt-[20.88rem]">
          Eu falei que tinha uma surpresa para você…
        </h1>
        <h2 className="text-white text-[2rem] sm:text-[0.875rem] font-extrabold text-center mt-2">
          Você tem um baita desconto para virar meu mentorado do Fluxo
        </h2>
      </section>
      <div className="w-[80%] sm:w-[90%] mx-auto mt-[1.69rem] ">
        <Video />
      </div>
      <section className="mt-[1.68rem] w-fit mx-auto flex flex-col items-center pb-[2.38rem]  ">
        <a href="https://bit.ly/rev-abril2024" target="_blank">
          <button className="bg-[#EFBD61] py-[.74rem] sm:py-[.54rem] w-[23.125rem] sm:w-[10.8125rem] rounded-[.625rem] border border-[#FED469] mt-[1.94rem] hover:scale-105 transition-all">
            <p className="text-white text-[1.5rem] sm:text-[1rem] font-semibold">
              Seja  rápido
            </p>
          </button>
        </a>
        <Image className="mt-[1.64rem] sm:hidden" src={Prints} alt="prints de alunos" />
        <Image className="mt-[1.64rem] sm:block hidden" src={PrintsM} alt="prints de alunos" />
        <h2 className="text-white text-[2.125rem] sm:text-[0.8125rem] font-extrabold mt-[1.64rem]">
          Quero mostrar o seu print no próximo Retiro
        </h2>
        <a href="https://bit.ly/rev-abril2024" target="_blank">
          <button className="bg-[#EFBD61] py-[.74rem] sm:py-[.54rem] w-[23.125rem] sm:w-[16.5rem] rounded-[.625rem] border border-[#FED469] mt-[1.94rem] sm:mt-3 hover:scale-105 transition-all">
            <p className="text-white text-[1.5rem] sm:text-[1rem] font-semibold">
              Quero entrar no Fluxo
            </p>
          </button>
        </a>
      </section>
      <Footer />
    </main>
  );
}
