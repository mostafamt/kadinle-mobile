import Page from "./page"; // import your Demo's page
import { getTranslator } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale);

  return {
    title: `${t("login")} | KADINLE`,
    description: t("login_description"),
  };
}

export default Page;
