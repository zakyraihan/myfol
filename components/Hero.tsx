import TypeWrite from "./Helper/TypeWrite";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const handleClick = () => {
    window.open("https://wa.me/6285780560420", "_blank");
  };

  return (
    <div className=" md:pt-[4vh]  h-[85vh] md:h-[100vh]  bg-white dark:bg-dark">
      <div className="flex justify-center flex-col  lg:w-[80%] md:w-[85%] w-[90%]  h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]  items-center ">
          <div className="text-black/70 font-semibold text-base flex gap-5">
            <div className="flex items-center">
              <div className="  lg:flex md:hidden flex-col lg:gap-5 md:gap-3 hidden   ">
                <div className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-white ">
                  <Link href={"https://www.instagram.com/b24ky/"}>
                    <Image
                      alt="instagram"
                      src={"/images/instagram.png"}
                      width={100}
                      height={100}
                      className=" md:w-10 md:h-10  h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link
                    href={"https://www.linkedin.com/in/muhammad-zaky-raihan-826150256/"}
                  >
                    <Image
                      alt="linkedIn"
                      src={"/images/linkedin.png"}
                      width={100}
                      height={100}
                      className="md:w-10 md:h-10  h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link href={"https://github.com/zakyraihan"}>
                    <Image
                      alt="github"
                      src={"/images/github.png"}
                      width={100}
                      height={100}
                      className="md:w-10 md:h-10  h-8 w-8"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px]  text-[25px] font-semibold leading-[3rem] text-black dark:text-white mb-5">
                Hello I am <span className="text-primary ">Zaky Raihan</span>
              </h1>
              <TypeWrite></TypeWrite>
              <p className="mt-[1.2rem] text-[15px] md:text-17 dark:text-white  dark:opacity-85 text-black/70  font-medium text-base ">
                Selamat datang di portofolio saya! Di sini, Anda dapat melihat
                karya-karya saya di bidang pengembangan frontend Mobile dan Web development.
             
              </p>
              <div className="  mt-[1rem] flex-row gap-2 lg:hidden  flex ">
                <div className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link href={"https://www.instagram.com/el_hijri/"}>
                    <Image
                      alt="instagram"
                      src={"/images/instagram.png"}
                      width={100}
                      height={100}
                      className=" h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link
                    href={"https://www.linkedin.com/in/muhammad-fatih-alhijri/"}
                  >
                    <Image
                      alt="linkedIn"
                      src={"/images/linkedin.png"}
                      width={100}
                      height={100}
                      className="  h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link href={"https://github.com/fatihalhijri"}>
                    <Image
                      alt="github"
                      src={"/images/github.png"}
                      width={100}
                      height={100}
                      className="  h-8 w-8"
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-3 ">
                <button onClick={handleClick} className="rounded-lg text-center px-6 py-3 bg-primary  text-black/70 dark:text-white font-semibold   shadow-lg transition-all hover:bg-blue-600">
                  pekerjakan saya
                </button>
              </div>
              
            </div>
          </div>
          <div className="hidden md:flex ">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
