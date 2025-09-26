import React from "react";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div>
          <h1 className="text-white text-xl font-tenor mb-2">My Role</h1>
          <p>
            <span className="text-white font-tenor">
              Frontend Development &mdash;
            </span>
            <span className="text-sm text-white/40">
              {" "}
              visual design and implementation.
            </span>
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">Team</h1>{" "}
          <p className=" text-white/40 font-tenor text-md">
            Temesgen Getye, Mobile Development
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Eredey Seyoum, Backend Engineer
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Abel Teklay, DevOps Engineer
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">
            Timeline & status
          </h1>
          <p className=" text-white/40 font-tenor text-md">
            4 months, to be Launched in Oct 2025
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-tenor text-white text-xl">Overview</h1>
        <p className="text-white/40 font-tenor py-4">
          The car dealership and auction platform is designed to redefine how
          people buy, sell, and explore vehicles. Built with a modern,
          responsive interface, it delivers a sleek and immersive experience,
          featuring real-time bidding, advanced search filters, and seamless
          browsing across all devices. The platform blends trust, convenience,
          and innovation, offering dynamic listings, secure transactions, and
          smooth navigation. My task was to develop this website with the goal
          of creating a visually appealing, user-friendly platform that mirrors
          the excitement of live auctions while ensuring reliability for both
          buyers and sellers. This meant designing clean, bold visuals paired
          with smooth animations and interactive features to capture the energy
          of car trading and the professionalism of a dealership.
        </p>
      </div>
    </div>
  );
}
