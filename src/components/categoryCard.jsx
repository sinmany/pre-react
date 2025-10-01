import React from "react";

export default function CategoryCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border border-gray-300 mb-12 mt-6">
        {/* Beauty Tools */}
        <div className="flex flex-col items-center text-center p-6 pb-8 hover:bg-pink-50">
          <img
            src="https://cdn.prod.website-files.com/67f74dda20fe8b479ec938a4/67fe5804b48872b2cd42d780_beauty-tool-p-1080.webp"
            alt="Beauty Tools"
            className="w-full h-auto mb-4 "
          />
          <p className="text-xl font-medium text-gray-800 uppercase mb-2">
            Beauty Tools
          </p>
          <p className="text-gray-700 text-sm">
            Precision for flawless beauty.
          </p>
        </div>

        {/* Fragrances - Highlighted */}
        <div className="flex flex-col items-center text-center p-6 hover:bg-pink-50">
          <img
            src="https://cdn.prod.website-files.com/67f74dda20fe8b479ec938a4/67fe5812ea8f09ce553c800c_fragrances-p-1080.webp"
            alt="Fragrances"
            className="w-full h-auto mb-4"
          />
          <p className="text-xl font-medium text-gray-800 uppercase mb-2">
            Fragrances
          </p>
          <p className="text-gray-700 text-sm">Scent that captivates.</p>
        </div>

        {/* Makeup */}
        <div className="flex flex-col items-center text-center p-6 hover:bg-pink-50">
          <img
            src="https://cdn.prod.website-files.com/67f74dda20fe8b479ec938a4/67fe581d25ff1626f14bee3e_makeup-p-1080.webp"
            alt="Makeup"
            className="w-full h-auto mb-4"
          />
          <p className="text-xl font-medium text-gray-800 uppercase mb-2">
            Makeup
          </p>
          <p className="text-gray-700 text-sm">Enhance, define, and glow.</p>
        </div>

        {/* Skincare */}
        <div className="flex flex-col items-center text-center p-6 hover:bg-pink-50">
          <img
            src="https://cdn.prod.website-files.com/67f74dda20fe8b479ec938a4/67fe5824d6de39c534d1a64f_skincare-p-1080.webp"
            alt="Skincare"
            className="w-full h-auto mb-4"
          />
          <p className="text-xl font-medium text-gray-800 uppercase mb-2">
            Skincare
          </p>
          <p className="text-gray-700 text-sm">Nourish, hydrate, and glow.</p>
        </div>
      </div>
    </>
  );
}
