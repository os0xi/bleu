import { Button } from "@/components/ui/button";
import Image from "next/image";

import { SiTelegram } from "react-icons/si";

export default function HeadingCTA() {
  const image = "/assets/images/original.avif";
  return (
    <div className=" w-full max-w-sm lg:max-w-6xl min-h-[500px] flex flex-col lg:flex-row items-center justify-center lg:justify-between ">
      <div className="flex flex-col justify-center h-1/2 max-w-lg items-center lg:items-start w-full">
        <h1 className="lg:p-0 text-6xl font-bold">
          <span className="text-sky-9">Le Bleu Elefant</span>
        </h1>
        <div className="mb-20 lg:hidden" />
        <div className="block lg:hidden  w-[220px] aspect-square relative ">
          <Image
            src={image}
            style={{ objectFit: "cover" }}
            loading="lazy"
            fill={true}
            alt="Le Bleu Elefant Logo"
          />
        </div>
        <div className="mb-20 lg:hidden" />
        <div className="flex flex-col lg:flex-row gap-2 lg:hidden">
          <Button className="">Join the Airdrop</Button>
          <Button variant="link">Whitepaper</Button>
        </div>
        <div className="mb-10" />
        <p className="text-center lg:text-start ">
          Community coin deployed spontaneously via frame on Farcaster using the Fair Launch WAGMI Protocol ..wouldn't ya?
        </p>
        <div className="mb-10" />
        <div className="lg:flex gap-2 hidden text-lg w-full justify-between">
          <a
            target="_blank"
            href=""
            rel="noopener noreferrer"
          >
            <Button variant='link' size='sm' className="flex gap-2 items-center "><img src='/assets/images/farcaster.avif' className='w-5 h-5 rounded-full' /> Farcaster</Button>
          </a>
          <a
            target="_blank"
            href=""
            rel="noopener noreferrer"
          >

            <Button variant='link' size='sm' className="flex gap-2 items-center "> <SiTelegram className='w-5 h-5 text-[#0088CC] ' /> Telegram</Button>
          </a>
          <a
            target="_blank"
            href=""
            rel="noopener noreferrer"
          >
            <Button variant='link' size='sm' className="flex gap-2 items-center "><img src='https://lebleuelefant.com/uni.svg' className='w-5 h-5 rounded-full text-[#FF007A]' /> Uniswap
            </Button>
          </a>
          <a
            target="_blank"
            href=""
            rel="noopener noreferrer"
          >
            <Button variant='outline' size='sm' className="flex gap-2 items-center bg-transparent hover:bg-sky-3 text-foreground "> Chart
            </Button>
          </a>
          {/* <Button variant="link">Whitepaper</Button> */}
        </div>

      </div>
      <div className="hidden lg:block relative aspect-square w-full max-w-xl ">
        <Image
          src={image}
          style={{ objectFit: "contain" }}
          loading="lazy"
          fill={true}
          alt="Le Bleu Himself"
        />
      </div>
    </div>
  );
}
