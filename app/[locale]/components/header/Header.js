// eslint-disable-next-line import/no-unresolved
import { LANGUAGES } from "@/app/api/static/constants";
// eslint-disable-next-line import/no-unresolved
import { getCategories } from "@/app/api/supabase/home";
// eslint-disable-next-line import/no-unresolved
import { getNews } from "@/app/api/supabase/shared";
import React from "react";

import CategoryBar from "../categories/CategoryBar";
import { Menu } from "./Menu";
import NewsBar from "./NewsBar";
import { SubMenu } from "./SubMenu";
import { UpperBar } from "./UpperBar";
import { UpperMenu } from "./UpperMenu";

export const Header = async ({
  locale,
  params,
  showCategoryBar,
  categoryId,
  searchOnly,
  hideUpperMenu,
}) => {
  const news = await getNews(LANGUAGES?.[locale]);

  const categoriesData = await getCategories();
  const categories = categoriesData;
  return (
    <header>
      <NewsBar news={news?.data} setOpenNews={false} />
      {hideUpperMenu ? null : <UpperBar locale={locale} />}
      <Menu locale={locale} searchOnly={searchOnly} />
      <UpperMenu categories={categories} language={LANGUAGES?.[locale]}/>
      {showCategoryBar ? (
        <CategoryBar categories={categories} categoryId={categoryId} />
      ) : (
        <SubMenu language={LANGUAGES?.[locale]} categories={categories} />
      )}
    </header>
  );
};
