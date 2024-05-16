import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "../global/SectionTitle";

const whyList = [
  {
    title: "Safe_Payments",
    description: "Safe_Payments_msg",
    imageSrc: "https://kadinle.com/media/images/safePayment.svg",
    href: "safe-payments",
  },
  {
    title: "Money_Back_Gurantee",
    description: "Money_Back_Gurantee_msg",
    imageSrc: "https://kadinle.com/media/images/moneyBack.svg",
    href: "money-back",
  },
  {
    title: "fast_shipping",
    description: "fast_shipping_msg",
    imageSrc: "https://kadinle.com/media/images/fastShipping.svg",
    href: "fast-shipping",
  },
  {
    title: "Best_Quality",
    description: "why_Best_Quality_description",
    imageSrc: "https://kadinle.com/media/images/bestQuality.svg",
    href: "best-quality",
  },
];
export const WhyChooseUs = ({ t }) => {
  return (
    <div className={` flex justify-center items-center mt-[40px] mb-8 `}>
      <div className="flex flex-col space-y-4 items-center w-[100%]">
        <SectionTitle title={t("why_us_msg")} containerClassName="!my-0" />
        <div className="flex justify-between lg:space-y-0 gap-2 lg:gap-10 sm:p-0 px-2 scroll-hide overflow-auto">
          {whyList?.map((info) => (
            <Link
              key={info?.title}
              href={info?.href}
              className={`relative group w-full transition-all flex flex-col gap-1 border-2 border-primary border-dashed items-center justify-start xl:justify-center p-2 rounded-2xl cursor-pointer`}
            >
              <div
                className={`absolute bottom-0 h-0 group-hover:h-full  ltr:right-0 rtl:left-0 rounded-2xl transition-all duration-[300ms] w-full 
                
               bg-primary`}
              ></div>
              <Image
                className="  !w-10 !h-10"
                src={info?.imageSrc}
                width={40}
                height={40}
              />
              <h3 className=" group-hover:text-white font-medium text-[10px] text-center">
                {t(info?.title)}
              </h3>
              {/* <p
                className={` group-hover:text-white transition-all text-center text-[13px] lg:text-[15px] md:text-md leading-[20px] lg:leading-7`}
              >
                {t(info?.description)}
              </p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
