import React, { useState } from "react";
import donationgif from "../assets/donation.gif";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    cpassword: "",
    bloodType: "",
    State: "",
    City: "",
    avialble: "",
    email: "",
  });

  let name, value;

  const handleChange = (e) => {
    console.log(handleChange);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  //sent data  to database

  const postData = async (e) => {
    e.preventDefault();
    console.log("datashow");
    const {
      firstName,
      lastName,
      phone,
      password,
      cpassword,
      avialble,
      bloodType,
      State,
      City,
      email,
    } = user;

    const res = await fetch("http://localhost:5000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        password,
        cpassword,
        avialble,
        bloodType,
        State,
        City,
        email,
      }),
    });
    const data = res.json();

    if (!data) {
      window.alert("Invilad Registertion");
      console.log("please fill data");
    } else {
      window.alert(" Registertion Sucessfull");
      console.log(" Registertion Sucessfull");
      navigate("/Login");
    }
  };

  return (
    // <div className="countiner md:w-[90%]  h-[70%] mx-auto  my-10 border-white border-2 flex flex-row  rounded shadow-lg  shadow-white/50">
    //   <img src={donationgif} className="md:w-[50%] " alt="register" />
    //   <div className="md:w-[50%] mx-2">
    //     <h1 className="md:text-5xl font-bold text-center my-5 head text-center">
    //       Register Form{" "}
    //     </h1>
    //     <form method="POST" className="flex flex-col ml-5 text-[18px]  my-10">
    //       {/* full name */}
    //       <div className="FullNam flex flex-row input-box justify-around ">
    //         <input
    //           type="text"
    //           onChange={handleChange}
    //           name="firstName"
    //           placeholder="first Name"
    //           value={user.firstName}
    //           className="bg-transparent border-2 pl-2 ml-1 mr-5 text-[18px] capitalize border-white"
    //         />
    //         <input
    //           type="text"
    //           onChange={handleChange}
    //           name="lastName"
    //           placeholder="Last Name"
    //           value={user.lastName}
    //           className="bg-transparent border-2 text-[18px] pl-2 ml-1 mr-5 capitalize border-white"
    //         />
    //       </div>
    //       {/* phone */}
    //       <div className="flex flex-row input-box justify-around">
    //         <input
    //           type="tel"
    //           onChange={handleChange}
    //           name="phone"
    //           placeholder="phone number"
    //           autoComplete="off"
    //           value={user.phone}
    //           className="bg-transparent border-2 pl-2 ml-1 text-[18px] mr-5 capitalize border-white"
    //         />
    //         <input
    //           type="password"
    //           onChange={handleChange}
    //           name="password"
    //           placeholder="password"
    //           value={user.password}
    //           className="bg-transparent border-2 text-[18px] pl-2 ml-1 mr-5 capitalize border-white"
    //         />
    //       </div>
    //       {/* blood grop and phone number */}
    //       <div className="flex flex-row input-box justify-around">
    //         <select
    //           value={user.avialble}
    //           onChange={handleChange}
    //           name="avialble"
    //           className="bg-black block w-[92%] md:w-full md:mr-5 md:ml-1 text-[18px] border-2 pl-2   capitalize border-white"
    //         >
    //           <option defaultValue>Availablty</option>
    //           <option value="YES">YES</option>
    //           <option value="NO">NO</option>
    //         </select>
    //         {/* blood group  */}
    //         <select
    //           onChange={handleChange}
    //           name="bloodType"
    //           value={user.bloodType}
    //           className="bg-black block w-[92%] md:w-full mr-5 ml-1 border-2 pl-2 text-[18px]  capitalize border-white"
    //         >
    //           <option defaultValue value="Select Blood Group">
    //             Select Blood Group
    //           </option>
    //           <option value="A+" n>
    //             A+
    //           </option>
    // <option value="A-">A-</option>
    // <option value="B-">B-</option>
    // <option value="B+">B+</option>
    // <option value="O+">O+</option>
    // <option value="O-">O-</option>
    // <option value="AB-">AB-</option>
    // <option value="AB+">AB+</option>
    //         </select>
    //       </div>
    //       <div className="adress input-box flex flex-row justify-around ">
    //         <select
    //           value={user.State}
    //           onChange={handleChange}
    //           name="State"
    //           className="bg-black block w-[92%] md:w-full md:mr-5 md:ml-1 text-[18px] border-2 pl-2   capitalize border-white"
    //         >
    //           <option value="Rajasthan">Rajasthan</option>
    //           <option value="Delhi">Delhi</option>
    //         </select>
    //         <input
    //           type="text"
    //           onChange={handleChange}
    //           name="City"
    //           placeholder="City"
    //           value={user.City}
    //           className="bg-transparent border-2  text-[18px] pl-2 ml-1 mr-3  capitalize border-white"
    //         />
    //       </div>

    //       <input
    //         type="submit"
    //         value="Submit"
    //         onClick={postData}
    //         className="md:w-[35rem] w-[28rem] md:ml-2 mt-[10px] text-[18px]  my-5 hover:bg-red-600 border-2 border-white "
    //       />
    //     </form>
    //   </div>
    // </div>

    <>
      <section className="bg-white dark:bg-gray-50 text-black">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/6347727/pexels-photo-6347727.jpeg?auto=compress&cs=tinysrgb&w=600")',
            }}
          ></div>
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold  text-left tracking-wider text-gray-800 capitalize dark:text-gray-800">
                Register for Saving Life
              </h1>

              <div className="mt-6 text-left">
                <h1 className="text-gray-500 dark:text-gray-600">
                  Select type of account
                </h1>
                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button className="flex justify-center w-full px-6 py-3 text-white bg-red-600 rounded-md md:w-auto md:mx-2 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="mx-2">As Donar</span>
                  </button>
                  <button className="flex justify-center w-full px-6 py-3 mt-4 text-red-600 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-red-400 dark:text-black focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="mx-2">As Donee</span>
                  </button>
                </div>
              </div>

              {/* form for register  */}
              <form
                method="POST"
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 text-left"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="John"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    Last name
                  </label>
                  <input
                    onChange={handleChange}
                    name="lastName"
                    value={user.lastName}
                    type="text"
                    placeholder="Snow"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    Phone number
                  </label>
                  <input
                    onChange={handleChange}
                    name="phone"
                    value={user.phone}
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    type="email"
                    placeholder="johnsnow@example.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    type="password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    Confirm password
                  </label>
                  <input
                    onChange={handleChange}
                    name="cpassword"
                    value={user.cpassword}
                    type="password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                {/* bloodgroup & Availvblty */}

                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Select an option
                  </label>
                  <select
                    name="bloodType"
                    value={user.bloodType}
                    onChange={handleChange}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected="">Choose Your BloodGroup</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB-">AB-</option>
                    <option value="AB+">AB+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Select an option
                  </label>
                  <select
                    name="avialble"
                    value={user.avialble}
                    onChange={handleChange}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected="">Availability</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* location  */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    State
                  </label>
                  <input
                    name="State"
                    value={user.State}
                    onChange={handleChange}
                    type="text"
                    placeholder="State"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
                    City
                  </label>
                  <input
                    name="City"
                    value={user.City}
                    onChange={handleChange}
                    type="text"
                    placeholder="City"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button
                  onClick={postData}
                  className="flex items-center justify-between w-full px-6 py-3 
                text-sm tracking-wide text-white capitalize transition-colors duration-300
                 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:ring
                 focus:ring-red-300 focus:ring-opacity-50"
                >
                  <span>Register </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
