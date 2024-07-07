import React from "react";
import greenMark from "../assets/green-mark.png";
import { UserDetails } from "../components/UserDetails";

export const Register: React.FC = () => {
  type Steps = {
    stepName: String;
  };

  const steps: Steps[] = [
    { stepName: "Add your properties Basic Details" },
    { stepName: "Add property Location" },
    { stepName: "Add property Features and amenities" },
    { stepName: "Add Price details" },
    { stepName: "Add your best Property Shots" },
  ];
  return (
    <div className="bg-primary-blue p-7 md:p-14">
      <div className="text-white md:w-4/5 space-y-2">
        <h1 className="text-2xl md:text-3xl">
          Sell or Rent your Property For Free
        </h1>
        <p className="text-xl">
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </p>
      </div>
      <div className="flex flex-col md:flex-row text-white w-full p-2 md:p-10 ">
        <div className=" p-4 md:w-1/2 space-y-4">
          <h1 className="text-xl">Upload your property in 4 simple steps</h1>
          {/* Upload Property Steps */}
          <ul>
            {steps.map((step, index) => {
              return (
                <li key={index} className="flex items-center">
                  <img src={greenMark} alt="green-mark" />
                  <span>{step.stepName}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-1/2">
          <div className=" w-full bg-white p-1 md:p-3 text-black rounded-xl  ">
            <h1 className="p-3">LETS GET YOU STARTED !</h1>
            {/* User Registration Form */}
            <UserDetails />
            <div className="flex p-2 md:p-0 justify-between items-center">
              <div className="flex flex-col md:flex-row md:space-x-2">
                <p className="text-gray-500">Need Help? </p>
                <p className="text-black">Call 9999999999</p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-primary-blue hover:bg-primary-blue/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 md:mb-2"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
