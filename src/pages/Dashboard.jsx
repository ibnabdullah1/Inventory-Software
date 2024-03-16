import React from "react";
import dash1 from "../assets/img/dash1.svg";
import dash2 from "../assets/img/dash2.svg";
import dash3 from "../assets/img/dash3.svg";
import dash4 from "../assets/img/dash4.svg";
import Chart from "./Chart";
const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-5">
        <div className="flex items-center bg-white px-3 py-5 rounded-md border border-gray-300 gap-3">
          <div className="bg-orange-100 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <img className="w-[60%]" src={dash1} alt="img" />
          </div>
          <div>
            <h5 className="font-semibold text-sm pb-1">
              $<span data-count="307144.00">307144</span>
            </h5>
            <h6 className=" text-xs">Total Purchase Due</h6>
          </div>
        </div>

        <div className="flex items-center bg-white px-3 py-5 rounded-md border border-gray-300 gap-3">
          <div className="bg-[#E5F8ED] w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <img src={dash2} alt="img" />
          </div>
          <div>
            <h5 className="font-semibold text-sm pb-1">
              $<span data-count="4385.00">4385</span>
            </h5>
            <h6 className="text-xs">Total Sales Due</h6>
          </div>
        </div>

        <div className="flex items-center bg-white px-3 py-5 rounded-md border border-gray-300 gap-3">
          <div className="bg-blue-100 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <img src={dash3} alt="img" />
          </div>
          <div>
            <h5 className="font-semibold text-sm pb-1">
              $<span data-count="385656.50">385656.5</span>
            </h5>
            <h6 className="text-xs">Total Sale Amount</h6>
          </div>
        </div>

        <div className="flex items-center bg-white px-3 py-5 rounded-md border border-gray-300 gap-3">
          <div className="bg-red-100 w-[45px] h-[45px] rounded-full flex justify-center items-center">
            <img src={dash4} alt="img" />
          </div>
          <div>
            <h5 className="font-semibold text-sm pb-1">
              $<span data-count="40000.00">40000</span>
            </h5>
            <h6 className="text-xs">Total Sale Amount</h6>
          </div>
        </div>
      </div>
      <Chart />
    </>
  );
};

export default Dashboard;
