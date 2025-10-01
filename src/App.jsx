import "./App.css";
import AddToCard from "./components/addToCard";
import SearchInput from "./components/searchButton";
import imgUrl01 from "./assets/image01.png";
import imgUrl02 from "./assets/image02.png";
import imgUrl03 from "./assets/image03.png";
import CategoryCard from "./components/categoryCard";
import LatestProductCard from "./components/latestProductCard";
import { unstable_Activity as Activity } from "react";

function App() {
  return (
    <>
      <header className="w-full bg-[#f8f3ee]">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 justify-center mt-8">
            <SearchInput />
            <AddToCard />
          </div>
          <div className="w-full max-w-4xl px-4 mx-auto text-center mt-6">
            <h1 className="text-4xl font-extrabold mb-4">
              A Touch That
              <br /> Transforms Your Skin
            </h1>
            <p className="pb-6">
              Experience the ultimate in luxury beauty and skincare with our
              carefully curated <br />
              collection of high-quality products designed to nourish, enhance,
              and transform your.
            </p>
          </div>
        </div>
      </header>
      <main className="">
        <div>
          <section className="bg-[#f8f3ee] ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto px-6 pt-16 pb-6">
              <img
                src={imgUrl01}
                alt="Skincare Banner"
                className="w-full h-auto"
              />
              <img
                src={imgUrl02}
                alt="Skincare Banner"
                className="w-full h-auto"
              />
              <img
                src={imgUrl03}
                alt="Skincare Banner"
                className="w-full h-auto"
              />
            </div>
          </section>
          <section className="bg-white pt-20 text-center max-w-4xl mx-auto">
            <h2 className="uppercase text-3xl font-bold text-gray-800">
              Shop by category
            </h2>
            <div className="">
              <CategoryCard />
            </div>
          </section>
          <section className="flex flex-wrap lg:flex-nowrap max-w-4xl mx-auto my-28">
            <div className="flex items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 uppercase text-center lg:text-start p-6 lg:pe-6 lg:ps-0 leading-[1.5]">
                  Transparency in Every Blend
                </h2>
                <p className="text-center lg:text-start text-gray-700 pb-8 px-6 lg:ps-0 text-md">
                  Free from harmful chemicals with nourishing botanicals, and
                  designed to deliver visible results without compromising your
                  skin’s health.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-auto lg:max-w-[500px] mx-auto px-6 lg:px-0">
              {/* Left top image */}
              <img
                src="https://cdn.prod.website-files.com/673c1b266c8975806880591c/68159b2b84719f7d0a8d0a4e_about-img-01-p-1080.webp"
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Right image (spans 2 rows) */}
              <img
                src="https://cdn.prod.website-files.com/673c1b266c8975806880591c/68159b2a6a005996848fd9ae_about-img-03-p-1080.webp"
                alt=""
                className="row-span-2 w-full h-full object-cover"
              />

              {/* Left bottom image */}
              <img
                src="https://cdn.prod.website-files.com/673c1b266c8975806880591c/68159b2a34944f900cae1ef0_about-img-02-p-1080.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </section>
          <section className="max-w-4xl mx-auto my-28">
            <h2 className="text-3xl font-bold text-gray-700 text-center pb-10 uppercase">
              top products
            </h2>
            <div className="flex h-154 overflow-hidden">
              <div className="max-w-[630px] mx-auto bg-[#f8f3ee]">
                <img
                  src="https://cdn.prod.website-files.com/673c1b266c8975806880591c/6800a15834a4dfcc6805e05d_product-img-p-1080.webp"
                  alt=""
                />
                <h2 className="mt-12 text-3xl font-bold text-gray-700 text-center">
                  Our Best Product
                </h2>
                <p className="mt-4 px-14 text-center">
                  This product consistently ranks as our top seller, loved by
                  customers for its quality and results. It represents the
                  perfect blend of luxury and performance, making it a must-have
                  in every beauty collection.
                </p>
              </div>

              {/* Scrollable Product List */}
              <div className="max-w-[230px] mx-auto">
                <div className="h-[614px] overflow-y-auto no-scrollbar">
                  <div className="border border-gray-200">
                    <a href="">
                      <img
                        className=""
                        src="https://cdn.prod.website-files.com/67f74dda20fe8b479ec938a4/67fe27b67b8e5f8eba89809b_product-thumb-12.webp"
                        alt=""
                      />
                      <div className="flex justify-between px-2 py-6">
                        <h4 className="text-md font-medium truncate w-25">
                          Glow Moisturizer
                        </h4>
                        <p>$ 24.00 USD </p>
                      </div>
                    </a>
                  </div>
                  <div className="border border-gray-200">
                    <a href="">
                      <img
                        src="https://cdn.prod.website-files.com/67f74dda20fe8b479ec938a4/67fe27a6ca40fc4d547ad35c_product-thumb-11.webp"
                        alt=""
                      />
                      <div className="flex justify-between px-2 py-6">
                        <h4 className="text-md font-medium truncate w-25">
                          Glow Moisturizer
                        </h4>
                        <p>$ 24.00 USD </p>
                      </div>
                    </a>
                  </div>
                  <div className="border border-gray-200">
                    <a href="">
                      <img
                        src="https://cdn.prod.website-files.com/67f74dda20fe8b479ec938a4/67fe27952dc855ee05e6f05b_product-thumb-10.webp"
                        alt=""
                      />
                      <div className="flex justify-between px-2 py-6">
                        <h4 className="text-md font-medium truncate w-25">
                          Glow Moisturizer
                        </h4>
                        <p>$ 24.00 USD </p>
                      </div>
                    </a>
                  </div>

                  {/* You can add more product blocks here */}
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#f8f3ee]">
            <div className="max-w-4xl mx-auto py-24">
              <h2 className="text-5xl text-center mb-12 lg:px-32 leading-18 font-bold text-gray-700">
                EFFORTLESS BEAUTY CONFIDENCE
              </h2>
              <div className="flex gap-6">
                <div className="max-w-[350px] flex items-end">
                  <div>
                    <p className="pb-6 text-gray-800 font-normal text-md pe-4">
                      Our collection is designed to cater to diverse skin types
                      and beauty needs.
                    </p>
                    <img
                      src="https://cdn.prod.website-files.com/673c1b266c8975806880591c/6800d4bcc44492acfaf21141_Story-01.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="max-w-[300px]">
                  <img
                    src="https://cdn.prod.website-files.com/673c1b266c8975806880591c/680f4bb31a271db9e06192f6_story%20.webp"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-normal text-md my-6 ms-4">
                    We believe beauty is more than just appearance—it’s
                    confidence, self-care, and a reflection of individuality.
                    Our mission is to provide premium beauty & skincare products
                    that nourish shine with radiance.
                  </p>
                  <p className="text-gray-800 font-normal text-md ms-4">
                    Our collection is designed to cater to diverse skin types
                    and beauty needs.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <LatestProductCard />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
