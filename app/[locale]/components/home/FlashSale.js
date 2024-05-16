import React from "react";
import Link from "next/link";
import Image from "next/image";

const FlashSale = ({ languageId, offer }) => {
  const content = offer?.offer_content?.find(
    (c) => c?.language_id === languageId
  );

  return (
    <div className="mx-2 my-3">
      <Link
        href="/flash-sale"
        className={` relative rounded-xl overflow-hidden h-[108px] flex items-center justify-center w-full`}
      >
        <Image
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-color-creative-offer-discount-image_11174.jpg"
          alt="flash sale banner"
          className="w-full object-cover absolute top-0 left-0 h-full"
          height={230}
          width={575}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={"https://kadinle.com/media/images/flash.png"}
            alt="flash icon"
            className="!w-[45px] !h-[50px] mx-auto object-contain"
            height={50}
            width={35}
          />
          <h3 className="text-[20px] capitalize mx-auto mt-1 text-white">
            {content?.title}
          </h3>
          <p className="text-xs text-gray-200 italic mx-auto mt-2">
            {content?.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FlashSale;
