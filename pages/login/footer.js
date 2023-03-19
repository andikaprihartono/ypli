import Image from "next/image";
import BgMobile from "../../public/components/mobile.png";
export default function footer(){
    return(
        <>
          
        <footer className="w-full sm:hidden md:hidden lg:hidden bottom-0">
   <Image 
    src={BgMobile}
    alt="Background Footer"
    // height={20}
    // layout=""
    // objectFit='cover'
    sizes="100vw"
/>
      </footer>

        </>
    )
}