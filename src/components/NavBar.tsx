import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav className="absolute w-screen">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-2 px-4 lg:px-0">
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/images/logo_bleu.png"
            className=" "
            width={48}
            height={48}
            alt="logo"
          />
          <span className="text-xl font-bold ">LeBleuElefant</span>
        </div>
        <Dialog>
          <DialogTrigger className="text-2xl lg:hidden">
            <Menu />
          </DialogTrigger>

          <DialogContent className=" lg:hidden   h-screen border-none gap-y-6  items-center justify-around">
            <div className=" flex items-center w-full justify-center gap-4 mt-8">
              <Image
                src="/assets/images/logo.svg"
                className=""
                width={40}
                height={40}
                alt="logo"
              />
              <span className="text-4xl font-bold text-foreground">Liber</span>
            </div>
            <div className="flex gap-8 w-screen flex-wrap p-4 justify-center items-center">
            </div>
            <Button variant={"default"}>Join the Airdrop</Button>
          </DialogContent>
        </Dialog>


        <div className="hidden lg:flex space-x-4 items-center">
          <a
            target="_blank"
            href="https://t.me/TokenLiber"
            rel="noopener noreferrer"
          >
            <Button variant="link" size='lg' className="">
              <FaXTwitter className='text-2xl' />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}


