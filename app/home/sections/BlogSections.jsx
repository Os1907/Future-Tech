import React from "react";
import Image from "next/image";
import icon  from "../../../public/Images/home/blogIcon.png"
import icon1  from "../../../public/Images/home/blogIcon2.png"
export default function BlogSections() {
    const asApi = [
        {
            icon:icon,
            h4:"Future Technology Blog",
            title:"Stay informed with our blog section dedicated to future technology.",
            titleBox1:"Quantity",
            box1:"Over 1,000 articles on emerging tech trends and breakthroughs.",
            titleBox2:"Variety",
            box2:"Articles cover fields like AI, robotics, biotechnology, and more.",
            titleBox3:"Frequency",
            box3:"Fresh content added daily to keep you up to date.",
            titleBox4:"Authoritative",
            box4:"Written by our team of tech experts and industry professionals.",
        },
        {
            icon:icon1,
            h4:"Research Insights Blogs",
            title:"Dive deep into future technology concepts with our research section.",
            titleBox1:"Depth",
            box1:"500+ research articles for in-depth understanding.",
            titleBox2:"Graphics",
            box2:"Visual aids and infographics to enhance comprehension.",
            titleBox3:"Trends",
            box3:"Explore emerging trends in future technology research.",
            titleBox4:"Contributors",
            box4:"Contributions from tech researchers and academics.",
        }
    ]
  return (
      <> 
   
      <main>
        <div className="lg:mx-20 mx-4 bg-dark">
            {
                asApi.map((item)=>{
                    return <>
                    <div className="grid grid-cols-3 ">

            <div className="lg:col-span-1 col-span-3  lg:py-16 py-5  ">
                <div className="w-full flex justify-center lg:justify-start   ">
                <Image src={item.icon} alt="icon"/>
                </div>
              <h4 className="text-white lg:text-3xl text- font-semibold mr-3 lg:mt-3 mt-2 text-center lg:text-left">
                {item.h4}
              </h4>
              <p className="lg:my-4 text-h2head lg:text-sm text-[12px] my-2 text-center lg:text-left">
                {
                    item.title
                }
              </p>
            </div>
            <div className="lg:col-span-2 col-span-3 lg:border-l border-lineColor lg:py-16 lg:px-10  border-b pb-5 ">
              <div className="grid grid-cols-2  gap-4">
                <div className="border-lineColor border rounded-xl lg:py-5 p-4 lg:px-8  lg:col-span-1 col-span-2 bg-lightDark">
                  <h4 className="text-white mb-3 lg:text-xl text-sm font-medium">{item.titleBox1}</h4>
                  <p className="text-h2head lg:text-sm text-[12px]">
                  {item.box1}
                  </p>
                </div>
                <div className="border-lineColor border rounded-xl lg:py-5 p-4 lg:px-8  lg:col-span-1 col-span-2 bg-lightDark">
                  <h4 className="text-white mb-3 lg:text-xl text-sm font-medium">{item.titleBox2}</h4>
                  <p className="text-h2head lg:text-sm text-[12px]">
                  {item.box2}
                  </p>
                </div>
                <div className="border-lineColor border rounded-xl lg:py-5 p-4 lg:px-8  lg:col-span-1 col-span-2 bg-lightDark">
                  <h4 className="text-white mb-3 lg:text-xl text-sm font-medium">{item.titleBox3}</h4>
                  <p className="text-h2head lg:text-sm text-[12px]">
                  {item.box3}

                  </p>
                </div>
                <div className="border-lineColor border rounded-xl lg:py-5 p-4 lg:px-8  lg:col-span-1 col-span-2 bg-lightDark">
                  <h4 className="text-white mb-3 lg:text-xl text-sm font-medium">{item.titleBox4}</h4>
                  <p className="text-h2head lg:text-sm text-[12px]">
                  {item.box4}

                  </p>
                </div>
              </div>
            </div>
          </div>
                    </>
                })
            }
          
        </div>
      </main>
    </>
  );
}
