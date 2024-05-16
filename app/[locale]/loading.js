import React from "react";

import CategoryBannerSkeleton from "./components/skeletons/CategoryBannerSkeleton";
import { CollectionsSkeleton } from "./components/skeletons/CollectionsSkeleton";
import SaleTimerSkeleton from "./components/skeletons/SaleTimerSkeleton";

export default function loading() {
  return (
    <div className="md:max-w-[575px] md:mx-auto w-full">
      <CategoryBannerSkeleton />
      <div className="h-32 w-full animate-pulse" />
      <SaleTimerSkeleton />
      <div className="h-32 w-full animate-pulse" />
      <CollectionsSkeleton />
      <div className="h-32 w-full animate-pulse" />
      <CategoryBannerSkeleton />
      <CategoryBannerSkeleton />
      <CategoryBannerSkeleton />
      <CategoryBannerSkeleton />
    </div>
  );
}
