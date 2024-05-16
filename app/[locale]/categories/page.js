import { LANGUAGES } from "@/app/api/static/constants";
import { getHomeCategory } from "@/app/api/supabase/home";

import { CategoriesBody } from "../components/categories/CategoriesBody";
import Layout from "../components/layout/Layout";

export const metadata = {
  title: "KADINLE | Categories",
};

const page = async ({ params: { locale } }) => {
  const categoriesData = await getHomeCategory();
  return (
    <Layout locale={locale} searchOnly hideUpperMenu>
      <CategoriesBody
        categories={categoriesData}
        languageId={LANGUAGES?.[locale]}
      />
    </Layout>
  );
};

export default page;
