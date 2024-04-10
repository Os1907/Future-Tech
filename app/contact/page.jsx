import React from "react";
import { MdArrowOutward } from "react-icons/md";
import icon from "../../public/Images/contact/icon1.png";
import icon2 from "../../public/Images/contact/icon2.png";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className=" bg-dark min-h-screen ">
        <div className=" border-b border-lineColor ">
          <div className="lg:mx-20 mx-4">
            <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1">
              <div className="col-span-1 pr-8 py-14">
                <h4 className="text-white text-lg">General Inquiries</h4>
                <div className="border border-lineColor flex items-center justify-center mt-5 rounded-lg  p-4 bg-lightDark w-[100%]">
                  <p className="text-h2head text-sm">Contact@ai-podcasts.com</p>
                  <MdArrowOutward className="text-logo mx-1" />
                </div>
                <div className="border border-lineColor flex items-center justify-center mt-5 rounded-lg  p-4 bg-lightDark w-[75%]">
                  <p className="text-h2head text-sm">+(123)456-7890</p>
                  <MdArrowOutward className="text-logo mx-1" />
                </div>
              </div>

              <div className="col-span-1 border-l border-lineColor pl-8 pr-3 py-14">
                <h4 className="text-white text-lg">Technical Support</h4>
                <div className="border border-lineColor flex items-center justify-center mt-5 rounded-lg  p-4 bg-lightDark  w-[100%]">
                  <p className="text-h2head text-sm ">Contact@ai-podcasts.com</p>
                  <MdArrowOutward className="text-logo " />
                </div>
                <div className="border border-lineColor flex items-center justify-center mt-5 rounded-lg  p-4 bg-lightDark w-[75%]">
                  <p className="text-h2head text-sm">+(123)456-7890</p>
                  <MdArrowOutward className="text-logo mx-1" />
                </div>
              </div>

              <div className="col-span-1 border-l border-lineColor pl-8 py-14">
                <h4 className="text-white text-lg ">Our Office</h4>
                  <p className="text-h2head text-sm mt-5 pr-8">
                  Address: 123 AI Tech Avenue, Tenaille, 54321
                  </p>
                     
               
                <div className="border border-lineColor flex items-center justify-center mt-5 rounded-lg  p-4 bg-lightDark w-[75%]">
                  <p className="text-h2head text-sm">+(123)456-7890</p>
                  <MdArrowOutward className="text-logo mx-1" />
                </div>
              </div>

              <div className="col-span-1 border-l border-lineColor pl-8 py-14">
                <h4 className="text-white text-lg">Connect with Us</h4>
              
                <div className="border border-lineColor flex items-center justify-center mt-5 rounded-lg  p-4 bg-lightDark w-[75%]">
                  <p className="text-h2head text-sm">+(123)456-7890</p>
                  <MdArrowOutward className="text-logo mx-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-20 mx-4 grid lg:grid-cols-2 md:col-span-1 ">
          <div className="col-span-1 flex flex-col items-center lg:items-start justify-center mt-4 lg:mt-0 ">
            <Image src={icon} alt="icon-section" />
            <p className="text-white lg:text-5xl text-2xl font-medium lg:mr-10 lg:mt-3 ">
              Get in Touch with AI Podcasts
            </p>
          </div>
          <div className="col-span-1 mt-4 lg:mt-0 lg:border-l border-lineColor">
            <div className="flex items-center justify-center lg:p-8 p-4">
              <div className="mx-auto w-full max-w-[550px]">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="fName"
                          className="mb-3 block text-base font-medium text-h2head"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="First Name"
                          className="w-full rounded-md border border-lineColor bg-lightDark placeholder:text-h2head py-3 px-6 text-base font-medium text-h2head outline-none focus:border-lineColor focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="lName"
                          className="mb-3 block text-base font-medium text-h2head"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          placeholder="Last Name"
                          className="w-full rounded-md border border-lineColor bg-lightDark placeholder:text-h2head py-3 px-6 text-base font-medium text-h2head outline-none focus:border-lineColor focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="guest"
                      className="mb-3 block text-base font-medium text-h2head"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="guest"
                      id="guest"
                      placeholder="Email"
                      className="w-full appearance-none rounded-md border border-lineColor bg-lightDark placeholder:text-h2head py-3 px-6 text-base font-medium text-h2head outline-none focus:border-lineColor focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-base font-medium text-h2head"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Number"
                      className="w-full appearance-none rounded-md border border-lineColor bg-lightDark placeholder:text-h2head py-3 px-6 text-base font-medium text-h2head outline-none focus:border-lineColor focus:shadow-md"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-h2head">
                      Are you Interested for next podcast?
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton1"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-3 text-base font-medium text-h2head"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton2"
                          className="h-5 w-5"
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-3 text-base font-medium text-h2head"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="hover:shadow-form rounded-md bg-logo lg:py-3 lg:px-8 py-2 px-5 text-center text-base font-semibold text-lightDark outline-none w-full lg:w-auto">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center lg:items-start justify-center mt-4 lg:mt-0 border-t border-lineColor ">
            <Image
              src={icon2}
              alt="icon-section"
              className="motion-safe:animate-spin  transition-[1000]"
            />
            <h3 className="text-white  text-2xl font-medium lg:mr-10 lg:mt-3 ">
              Asked Question
            </h3>
            <p className="text-h2head">
              If the question is not available on our FAQ section , Fell free to
              contact us personally , we will resolve your respective doubts.
            </p>
          </div>

          <div className="col-span-1 mt-4 lg:mt-0 lg:border-l border-t border-lineColor ">

            <details className="w-full  mx-5 my-5 rounded-lg   bg-lightDark border border-lineColor ">
              <summary className="m-1 pl-3 py-3   cursor-pointer w-full text-white  ">What is AI ?</summary>
              <p className="dropdown-content text-sm font-light mx-5 py-3 text-h2head bg-lightDark border-t  border-lineColor  ">
              AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.
              </p>
            </details>

            <details className="w-full  mx-5 rounded-lg   bg-lightDark border border-lineColor ">
              <summary className="m-1 pl-3 py-3   cursor-pointer w-full text-white  ">How can I listen to your podcasts ?</summary>
              <p className="dropdown-content mx-5  font-light text-sm py-3 text-h2head bg-lightDark border-t  border-lineColor  ">
              Youtube channel , Apple Podcast , Spotify channel 
              </p>
            </details>

            <details className="w-full  m-5  rounded-lg   bg-lightDark border border-lineColor ">
              <summary className="m-1 pl-3 py-3   cursor-pointer w-full text-white  ">Are your podcasts free to listen to ?</summary>
              <p className="dropdown-content mx-5 font-light text-sm m-3 py-3 text-h2head bg-lightDark border-t  border-lineColor  ">
              It always will be free
              </p>
            </details>
            
            <details className="w-full  m-5  rounded-lg   bg-lightDark border border-lineColor ">
              <summary className="m-1 pl-3 py-3   cursor-pointer w-full text-white  ">Can I download episodes to listen offline ?</summary>
              <p className="dropdown-content mx-5 font-light text-sm m-3 py-3 text-h2head bg-lightDark border-t  border-lineColor  ">
              Soon it will be available
              </p>
            </details>
            

          </div>
        </div>
      </section>
    </>
  );
}
