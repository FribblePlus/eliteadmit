import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqt5y1r",
        "template_l008dsl",
        form.current,
        "pfIOul_cbDfYm4WeZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="max-w-[1240px] mx-auto py-[100px] text-black">
      <h1 className=" text-center font-bold text-[60px] text-white">Contact</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full lg:w-1/2 flex flex-col items-center mx-auto gap-5 mt-10"
      >
        <input
          className="w-5/6 h-10 p-5"
          placeholder="Name"
          type="text"
          name="user_name"
        />
        <input
          className="w-5/6 h-10 p-5"
          placeholder="Email"
          type="email"
          name="user_email"
        />
        <input
          className="w-5/6 h-10 p-5"
          placeholder="Phone number"
          type="text"
          name="user_number"
        />
        <input
          className="w-5/6 h-10 p-5"
          placeholder="Telegram username"
          type="text"
          name="user_telegram"
        />
        <textarea
          className="w-5/6 px-5 py-3"
          placeholder="Message"
          name="message"
        />

        <input
          className=" cursor-pointer py-2 px-5 bg-green-500 text-white font-bold ease-in-out duration-500 hover:bg-white hover:text-green-500"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
