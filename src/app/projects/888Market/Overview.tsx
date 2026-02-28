import React from "react";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        {/* <div>
          <h1 className="text-white text-xl font-tenor mb-2">My Role</h1>
          <p>
            <span className="text-white font-tenor">
              Full Stack Development &mdash;
            </span>
            <span className="text-sm text-white/40">
              {" "}
              visual design and backend engineering.
            </span>
          </p>
        </div> */}
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">Team</h1>
          <p className=" text-white/40 font-tenor text-md">
            Amanuel Workneh, IS
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Temesgen Getye, Mobile Development
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Natnael Yonas, QA Tester
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">
            Timeline & status
          </h1>
          <p className=" text-white/40 font-tenor text-md">
            5 months, Launched in August 2024
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-tenor text-white text-xl">Overview</h1>
        <p className="text-white/40 font-tenor py-4">
          888Market is a modern ecommerce platform inspired by Dubizzle,
          tailored for Seychelles and African markets where online trade is
          still emerging. It enables individuals and businesses to buy and sell
          across multiple categories—electronics, fashion, vehicles, real
          estate, and more—through a secure and user-friendly marketplace. With
          trusted payments, delivery support, simple analytics, and verified
          accounts, 888Market empowers communities to embrace ecommerce with
          confidence and convenience.
        </p>
      </div>
    </div>
  );
}
