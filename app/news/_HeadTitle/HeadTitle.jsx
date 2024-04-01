import React from "react";
import Image from "next/image";
import banner from "../../../public/Images/news/Image.png";
import Link from "next/link";
import Like from "@/app/_Components/Like/Like";
import Share from "@/app/_Components/share/Share";
import Button from "@/app/home/sections/Button";
export default function HeadTitle() {
  return (
    <>
      <div className="lg:mx-20 mx-4 border-t border-lineColor py-10 ">
        <div className="grid grid-cols-3 ">
          <div className="md:col-span-1 col-span-3 p-3  flex justify-center">
            <Image src={banner} alt="Sunrise" className="w-[28rem] h-[22rem]" />
          </div>
          <div className="md:col-span-2 col-span-3 p-3 flex flex-col justify-center  ">
            <Link href='https://www.un.org/en/climatechange/cop26' target="_blank" >
             <h3 className="text-white font-semibold text-2xl">
              Global Climate Summit Addresses Urgent Climate Action
            </h3>
            </Link>
           
            <p className="my-5 text-h2head">
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </p>
            <div className="flex gap-x-4">
              <div>
                <p className="text-h2head text-[12px] lg:text-sm">Category</p>
                <p className="text-gray-300 text-[13px] my-1  lg:text-sm">
                  Environment{" "}
                </p>
              </div>
              <div>
                <p className="text-h2head text-[12px] lg:text-sm">
                   Publication Date
                </p>
                <p className="text-gray-300 text-[13px] my-1 lg:text-sm  ">
                  October 10, 2023{" "}
                </p>
              </div>
              <div>
                <p className="text-h2head text-[12px] lg:text-sm">Author</p>
                <p className="text-gray-300 text-[13px] my-1 lg:text-sm  ">
                Jane Smith
                </p>
              </div>

            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-4 my-5">
              <Like value={"14k"}/>
              <Share value={"204"}/>
            </div>
            <Button value={"Read more"}/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
