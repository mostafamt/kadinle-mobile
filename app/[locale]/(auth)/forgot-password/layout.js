import Page from "./page"; // import your Demo's page
import { getTranslator } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale);

  return {
    title: `${t("forgotPassword")} | KADINLE`,
    description: t("forgotPasswordMessage"),
  };
}

export default Page;
