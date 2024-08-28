import React, { useState } from "react";

interface StepProps1 {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface StepProps2 {
  formData: {
    profilePic: File | null;
    bio: string;
    userType: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface StepProps3 {
  formData: {
    userName: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Step1: React.FC<StepProps1> = ({
  formData,
  handleChange,
  handleNext,
}) => {
  return (
    <div className="bg-gray-200 inline p-4 text-xl w-1/2 rounded-md max-h-max ">
      <h2 className="block text-3xl font-extrabold text-center">
        Enter Your Details
      </h2>
      <label className="block font-semibold mt-3">
        First Name:
        <input
          className="block w-full"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label className="block font-semibold mt-3">
        Last Name:
        <input
          className="block w-full"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <label className="block font-semibold mt-3">
        Email:
        <input
          className="block w-full"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button
        className="bg-purple-600 text-white p-2 mt-2 rounded-md hover:bg-purple-700"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

const Step2: React.FC<StepProps2> = ({
  formData,
  handleChange,
  handleNext,
  handleBack,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleChange({
        ...e,
        target: {
          ...e.target,
          name: "profilePic",
          value: e.target.files[0], // Set the selected file to formData
        },
      });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange({
      ...e,
      target: {
        ...e.target,
        name: "userType",
        value: e.target.value, // Update the userType in formData
      },
    });
  };

  return (
    <div className="bg-gray-200 inline p-4 text-xl w-1/2 rounded-md ">
      <label className="block font-semibold mt-3">
        Profile Pic
        <input
          className="block"
          type="file"
          name="profilePic"
          onChange={handleFileChange}
        />
      </label>
      <label className="block font-semibold mt-3">
        Bio
        <input
          className="block w-full h-32"
          type="text"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </label>
      <div className="">
        <label className="block font-semibold mt-3">User Type</label>
        <select
          className="block bg-black text-white p-2"
          required
          value={formData.userType}
          onChange={handleSelectChange}
        >
          <option value="client">Client</option>
          <option value="freelancer">FreeLancer</option>
        </select>
      </div>
      {/* </label> */}
      <div className="flex justify-between">
        <button
          className="bg-purple-600 text-white p-2 mt-2 rounded-md hover:bg-purple-700"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="bg-purple-600 text-white p-2 mt-2 rounded-md hover:bg-purple-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step3: React.FC<StepProps3> = ({
  formData,
  handleChange,
  handleBack,
  handleSubmit,
}) => {
  return (
    <div className="bg-gray-200 inline p-4 text-xl w-1/2 rounded-md ">
      <label className="block font-semibold mt-3">
        Username
        <input
          className="block w-full"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>
      <label className="block font-semibold mt-3">
        New Password
        <input
          className="block w-full"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label className="block font-semibold mt-3">
        Confirm Password
        <input className="block w-full" type="password" name="confPass" />
      </label>
      <div className="flex justify-between">
        <button
          className="bg-purple-600 text-white p-2 mt-2 rounded-md hover:bg-purple-700"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="bg-lime-700 text-white p-2 mt-2 rounded-md hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profilePic: null,
    bio: "",
    userType: "",
    password: "",
    userName: "",
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-700 to-indigo-950 h-screen flex justify-center items-center">
      {currentStep === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Register;
