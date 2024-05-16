import { getTranslator } from "next-intl/server";
import Image from "next/image";

import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { StaticPageTitle } from "../../components/global/StaticPageTitle";
import Layout from "../../components/layout/Layout";

const About2 = "https://kadinle.com/media/images/About2.svg";
const About1 = "https://kadinle.com/media/images/About1.svg";
const About3 = "https://kadinle.com/media/images/About3.svg";

export const metadata = {
  title: "KADINLE | About us",
};

const AboutPage = async ({ params: { locale } }) => {
  const t = await getTranslator(locale);
  return (
    <Layout locale={locale} bodyClassName="!max-w-full">
      <ScrollUpComponent />
      <StaticPageTitle title={t("About_Kadinle")} />
      <div className="flex flex-col poppins   md:max-w-[575px] md:mx-auto w-full">
        <div className="flex justify-center text-[12px] text-[#707070]">
          <div className="flex flex-col w-[90%] max-w-[500px]">
            <div className="self-center mt-6">
              <Image
                className="w-full object-contain"
                src={About1}
                alt="about page photo 1"
                height={200}
                width={280}
              />
            </div>

            <div className="flex gap-2 mt-8">
              <div className="flex items-center justify-center h-[24px]">
                <div className="min-w-[8px] h-[8px] bg-opink rounded-full"></div>
              </div>
              <h2 className="leading-[24px] font-[700] text-black">
                {t("about_msg1")}
              </h2>
            </div>

            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg2")}
            </p>
            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg3")}
            </p>
            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg4")}
            </p>
          </div>
        </div>

        <div className="flex justify-center text-[12px] text-[#707070] bg-[#F8F8F8] mt-10 py-2">
          <div className="flex flex-col w-[90%] max-w-[500px]">
            <div className="self-center mt-6">
              <Image
                className="w-full object-contain"
                src={About2}
                alt="about page photo 2"
                height={200}
                width={280}
              />
            </div>

            <div className="flex gap-2 mt-8">
              <div className="flex items-center justify-center h-[24px]">
                <div className="min-w-[8px] h-[8px] bg-opink rounded-full"></div>
              </div>
              <h2 className="leading-[24px] font-[700] text-black">
                {t("Our_team")}
              </h2>
            </div>

            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg5")}
            </p>
            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg6")}
            </p>
            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg7")}
            </p>
          </div>
        </div>

        <div className="flex justify-center text-[12px] text-[#707070]">
          <div className="flex flex-col w-[90%] max-w-[500px]">
            <div className="self-center mt-6">
              <Image
                src={About3}
                className="w-full object-contain"
                alt="about page photo 2"
                height={200}
                width={280}
              />
            </div>

            <div className="flex gap-2 mt-8">
              <div className="flex items-center justify-center h-[24px]">
                <div className="min-w-[8px] h-[8px] bg-opink rounded-full"></div>
              </div>
              <h2 className="leading-[24px] font-[700] text-black">
                {t("about_msg8")}
              </h2>
            </div>

            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg9")}
            </p>
            <p className="ltr:ml-7 rtl:mr-7 leading-[24px]">
              {t("about_msg10")}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
