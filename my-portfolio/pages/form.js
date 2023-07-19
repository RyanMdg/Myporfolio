import Navbar from "../src/app/components/navbar";
import "../src/app/globals.css";
import Footer from "../src/app/components/footer";
import { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;

    emailjs
      .sendForm(
        "service_36mjk6r",
        "template_p9a4zyu",
        formElement,
        "_8WvEfDL_qRQIGdQB"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setShowModal(true);
        },
        (error) => {
          console.log("Email send failed:", error.text);
          // Handle the error state and display an error message to the user if needed.
        }
      );
  };
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 max-md:flex max-w-[80%] mx-auto">
        <div>
          <img className=" max-md:hidden rounded-md" src="/me.jpg" alt="" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-8 pt-6 pb-8 mb-4 bg-[#112240] rounded"
        >
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-[#B5BFDF] ">
                First Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-[#B5BFDF] "
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-[#B5BFDF] ">
              Email
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className=" mb-2 text-sm font-bold text-[#B5BFDF] "
              htmlFor="message"
            >
              Message
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="message"
              type="text"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="my-6  text-center">
            <button
              type="submit"
              className="group hover:translate-y-[-.5rem] duration-300 hover:shadow-xl relative h-10 w-50 px-7 border border-[#cbb018c7] overflow-hidden rounded-sm bg-[#0A192F] text-lg shadow"
            >
              <div className="absolute inset-0 w-2 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative text-[#B5BFDF] font-bold group-hover:text-[#18191c]">
                Submit
              </span>
            </button>
          </div>
          <hr className="mb-6 border-t " />

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-[#112240] p-6 rounded shadow-md w-80">
                <h2 className="text-[#e9d043] font-semibold text-lg mb-3">
                  Success!
                </h2>
                <p className=" text-[#B5BFDF]">
                  Your email has been sent successfully.
                </p>
                <button
                  className="bg-[#cbb018]  text-black font-semibold px-4 py-2 mt-4 rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
