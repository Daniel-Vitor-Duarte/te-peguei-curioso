'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Countdown from "react-countdown";
import useOnScreen from "@/app/hooks/useOnScreen";

const eventDate = new Date("2024-04-26T12:00:00-03:00");

function Clock({
  setCtaOnScreen,
}: {
  setCtaOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ctaRef = useRef<HTMLButtonElement>(null);
  const isOnScreen = useOnScreen(ctaRef, true);

  useEffect(() => {
    setCtaOnScreen(isOnScreen);
  }, [setCtaOnScreen, isOnScreen]);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <>
          <div className="flex sm:flex-col items-center gap-[.5rem] sm:gap-0 w-fit text-[#EFBD61] lg:mt-0">
            <div className="flex gap-10">
              <div className="  text-center">
                <p className=" h-auto tracking-tighter font-black">00</p>
                <p className="text-[0.625rem] -mt-1 ">Dias</p>
              </div>
              <div className="  text-center">
                <p className=" h-auto tracking-tighter font-black">00</p>
                <p className="text-[0.625rem] -mt-1 ">Horas</p>
              </div>
              <div className="  text-center">
                <p className=" h-auto tracking-tighter font-black">00</p>
                <p className="text-[0.625rem] -mt-1 ">Minutos</p>
              </div>
            </div>
        

          </div>
        </>
      );
    } else {
      // Render a countdown
      return (
        <span>
          <div className="flex sm:flex-col items-center gap-[.5rem] sm:gap-0 w-fit text-[#EFBD61] lg:mt-0">
            <div className="flex gap-3">
              <div className="  text-center">
                <p className=" h-auto tracking-tighter font-black">
                  {days.toLocaleString("pt-BR", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </p>
                <p className="text-[0.625rem] -mt-1 ">Dias</p>
              </div>
              <div className="  text-center">
                <p className=" h-auto tracking-tighter font-black">
                  {hours.toLocaleString("pt-BR", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </p>
                <p className="text-[0.625rem] -mt-1 ">Horas</p>
              </div>
              <div className="  text-center">
                <p className=" h-auto tracking-tighter font-black">
                  {minutes.toLocaleString("pt-BR", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </p>
                <p className="text-[0.625rem] -mt-1 ">Minutos</p>
              </div>
              
            </div>
          </div>
        </span>
      );
    }
  };
  return(
    <div>
        <Countdown date={eventDate} renderer={renderer} />
    </div>
  )
  
}

export default Clock;
