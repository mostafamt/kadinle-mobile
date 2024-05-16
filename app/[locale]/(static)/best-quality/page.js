import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { StaticPageTitle } from "../../components/global/StaticPageTitle";
import Layout from "../../components/layout/Layout";

const Best1 = "https://kadinle.com/media/images/Best1.svg";
const Best2 = "https://kadinle.com/media/images/Best2.svg";
const Best3 = "https://kadinle.com/media/images/Best3.svg";

export const metadata = {
  title: "KADINLE | Best Quality",
};

const BestQualityPage = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);
  return (
    <Layout locale={locale} bodyClassName="!max-w-full">
      <ScrollUpComponent />
      <StaticPageTitle title={t("Best_Quality")} />
      <div className="px-4 flex flex-col poppins  md:max-w-[575px] md:mx-auto w-full">
        <div className="flex justify-center text-[12px] text-[#707070]">
          <div className="flex flex-col w-[90%] max-w-[500px]">
            <div className="flex flex-col mt-3 self-center">
              <h2 className="text-black font-semibold text-center">
                {t("Kadinle_means_Quality")}
              </h2>
              <div className="bg-opink h-[2px] w-[25px]"></div>
            </div>

            <div className="self-center mt-6 relative h-[200px]">
              <Image
                src={Best1}
                className="w-full object-contain"
                alt="about page photo 2"
                layout="fill"
              />
            </div>

            <p className="text-black font-semibold text-center mt-4">
              {t("Fabricated_to_last")}
            </p>

            <p className="mt-2 leading-[24px] text-center px-4">
              {t("Best_quality_msg1")}
            </p>
          </div>
        </div>

        <div className="flex justify-center text-[12px] text-[#707070] bg-[#F8F8F8] mt-3 py-2">
          <div className="flex flex-col w-[90%] max-w-[500px]">
            <div className="self-center mt-6 relative h-[200px]">
              <Image
                src={Best2}
                className="w-full object-contain"
                alt="about page photo 2"
                layout="fill"
              />
            </div>

            <p className="text-black font-semibold text-center mt-4">
              {t("We_give_you_the_best")}
            </p>

            <p className="mt-2 leading-[24px] text-center px-4">
              {t("Best_quality_msg2")}
            </p>
          </div>
        </div>

        <div className="flex justify-center text-[12px] text-[#707070] mt-2">
          <div className="flex flex-col w-[90%] max-w-[500px]">
            <div className="self-center mt-3">
              <Image
                src={Best3}
                className="w-full object-contain"
                alt="about page photo 2"
                layout="fill"
              />
            </div>

            <p className="text-black font-semibold text-center mt-4">
              {t("Choose_easily")}
            </p>

            <p className="mt-2 leading-[24px] text-center px-4">
              {t("Best_quality_msg4")}{" "}
              <Link href="/size-guide" className="text-opink font-[700]">
                {t("Size_guide")}
              </Link>
            </p>
            <Link
              href="/new-arrivals"
              className="self-center mt-4 flex justify-center items-center bg-opink rounded-full text-owhite w-[45%] py-2"
            >
              {t("SHOP_NOW")}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BestQualityPage;
