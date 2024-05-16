import { upperMenu } from "@/app/api/static/links";
import Link from "next/link";

export const UpperMenu = () => {
  return (
    <nav className="flex flex-col relative menu bg-[#e1e1e1] md:px-8 lg:px-12">
      <div className="relative">
        <div className={` top-0 ltr:left-0 rtl:right-0 z-20 w-full`}>
          <ul className="flex items-center w-full justify-between scroll-hide gap-5 px-4 py-3 overflow-auto">
            {upperMenu?.map((link) => (
              <Link
                key={link?.path}
                href={link?.path}
                className="text-[15px] font-normal"
              >
                <span className="text-gray-500 whitespace-nowrap min-w-fit flex-1 capitalize cursor-pointer text-center hover:text-[#111] hover:font-medium ">
                  {link?.name}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
