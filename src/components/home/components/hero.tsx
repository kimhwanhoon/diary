import React from 'react';

const user = {
  name: 'Hwanhoon',
};

export const Hero = () => {
  return (
    <section className="bg-[#f5e9e4] rounded-[15px] p-5 font-sans">
      <div className="mt-2.5">
        <p className="text-gray-500 text-sm">Daily reflection</p>
        <h1 className="text-2xl my-2.5">Hello, {user.name}</h1>
        <p className="text-lg">
          How do you feel about your <strong>current emotions</strong>?
        </p>
      </div>
      <div className="flex items-center mt-5">
        <input
          type="text"
          placeholder="Your reflection.."
          className="flex-1 p-2.5 border-none rounded-[10px] mr-2.5"
        />
        <span className="text-xl">➡️</span>
      </div>
    </section>
  );
};
