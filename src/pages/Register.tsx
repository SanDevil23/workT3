import React, { useState } from 'react';

interface StepProps {
  formData: {
    name: string;
    email: string;
    age: string;
    address: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: (e:React.MouseEvent<HTMLButtonElement>) => void;
  handleBack: (e:React.MouseEvent<HTMLButtonElement>) => void;

}
interface StepProps1 {
  formData: {
    name: string;
    email: string;
    age: string;
    address: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: (e:React.MouseEvent<HTMLButtonElement>) => void;
}

const Step1: React.FC<StepProps1> = ({ formData, handleChange, handleNext}) => {
  
  return (
    <div className='bg-gray-200 inline p-4 text-xl w-1/2 rounded-md '>
      <h2 className='block text-3xl font-extrabold'>Enter Your Details</h2>
      <label className='block'>
        First Name:
        <input
          className='block w-full'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className='block'>
        Last Name:
        <input
        className='block w-full'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label className='block'>
        Email:
        <input
          className='block w-full'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
    <button className="bg-purple-600 text-white p-2 mt-2 rounded-md hover:bg-purple-700" onClick={handleNext}>Next</button>
    </div>
  );
};

const Step2: React.FC<StepProps> = ({ formData, handleChange, handleNext, handleBack }) => {
  return (
    <div className='bg-gray-200 inline p-4 text-xl w-1/2 rounded-md '>
      <label className='block'>
        Profile Pic
        <input
          className='block'
          type='file'
          name="bio"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label className='block'>
        Bio
        <input
          className='block w-full h-32'
          type="text"
          name="bio"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      {/* <label className='block'>
        User Type
        <input
          className='block'
          type=""
          name="bio"
          value={formData.age}
          onChange={handleChange}
        /> */}
        <div className=''>
            <label className='block'>User Type</label>
            <select className='block' required>
                <option value="client">Client</option>
                <option value="freelancer">FreeLancer</option>
            </select>
        </div>
      {/* </label> */}
      <button className='bg-purple-600 text-white p-2 mt-2 rounded-md hover:bg-purple-700' onClick={handleBack}>Back</button>
      <button className='bg-purple-600 text-white p-2 mt-2 rounded-md hover:bg-purple-700' onClick={handleNext}>Next</button>
    </div>
  );
};

const Step3: React.FC<StepProps> = ({ formData, handleChange, handleNext, handleBack}) => {
  return (
    <div className='bg-gray-200 inline p-4 text-xl w-1/2 rounded-md '>
      <h2>Step 3: Security & Privacy</h2>
      <label>
        username
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        New Password
        <input
          type="password"
          name="pass"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          name="confPass"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div className='bg-gradient-to-b from-indigo-700 to-indigo-950 h-screen flex justify-center items-center'>
      {currentStep === 1 && (
        <Step1 formData={formData} handleChange={handleChange} handleNext={handleNext}/>
      )}
      {currentStep === 2 && (
        <Step2 formData={formData} handleChange={handleChange} handleNext={handleNext} handleBack={handleBack}/>
      )}
      {currentStep === 3 && (
        <Step3 formData={formData} handleChange={handleChange} handleNext={handleNext} handleBack={handleBack}/>
      )}

    </div>
  );
};

export default Register;
