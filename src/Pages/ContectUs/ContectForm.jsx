import Lottie from "lottie-react";
import { useState } from "react";
import contactAnimation from '../../assets/asset/Animation - 1717528196917.json'

const ContectForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <section className="">
        <div className="bg-green-200 text-center pt-8">
          <h1 className="text-4xl font-semibold items-start text-text_secondary">
            Contect Form
          </h1>
        </div>
        <div className="flex flex-col gap-x-20 lg:flex-row p-6 justify-center lg:items-center bg-green-200">
          <form className="lg:flex-1 py-4" onSubmit={handleSubmit}>
            <div className="w-full pb-6">
              <label htmlFor="name">Name</label>
              <input
                className="w-full p-2  object-cover"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="pb-6">
              <label htmlFor="email">Email</label>
              <input
                className="w-full p-2  object-cover"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="pb-6">
              <label htmlFor="subject">Subject</label>
              <input
                className="w-full p-2  object-cover"
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className="pb-6">
              <label htmlFor="message">Message</label>
              <textarea
                className="w-full  object-cover p-2"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              className="btn btn-ghost bg-text_secondary text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="lg:flex-1 flex justify-center bg-green-200 ">
          <Lottie className=" h-full" animationData={contactAnimation} loop={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContectForm;
