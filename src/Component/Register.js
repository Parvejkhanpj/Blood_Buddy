import React from "react";
import donationgif from "../assets/donation.gif";
import "./Register.css";

const Register = () => {
  return (
    <div className="countiner w-[80%]  h-[70%] mx-auto  my-10 border-white border-2 flex flex-row  rounded shadow-lg  shadow-white/50">
      <img src={donationgif} className="w-[50%] " alt="register" />
      <div>
        <h1 className="text-5xl font-bold text-center my-5 head">
          Register Form{" "}
        </h1>
        <form className="flex flex-col ml-5   my-10">
          {/* full name */}
          <div className="FullNam flex flex-row input-box justify-around ">
            <input type="text" name="name" placeholder="first Name" />
            <input type="text" name="name" placeholder="last Name" />
          </div>
          {/* email */}
          <div className="flex flex-row input-box justify-around">
            <input type="email" name="email" placeholder="email" />
            <select className="text-gray-400">
              <option defaultValue value="Availablty">
                Availablty
              </option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          {/* blood grop and phone number */}
          <div className="flex flex-row input-box justify-around">
            <input
              type="number"
              name="Phone Number"
              placeholder="phone number"
              className=" w-50  "
            />
            <select className="text-gray-400">
              <option defaultValue value="Select Blood Group">
                Select Blood Group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
              <option value="AB+">AB+</option>
            </select>
          </div>
          <div className="adress input-box flex flex-row justify-around ">
            <input
              type="text"
              name="City"
              placeholder="City"
              className="w-50 "
            />
            <input
              type="text"
              name="State"
              placeholder="State"
              className=" w-50 "
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-[35rem] mx-5 my-7 hover:bg-red-600 "
          />
        </form>
      </div>
    </div>
  );
};

export default Register;