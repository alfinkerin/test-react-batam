import React from "react";
import Logo from "../../../../assets/images/Screenshot_2-removebg-preview.png";
import Centang from "../../../../assets/images/li_before.svg";
import Ex from "../../../../assets/images/li_before-1.svg";

function SidePages() {
  return (
    <div className="w-full h-auto xl:h-screen py-12 px-4 md:px-20 bg-[#F5F6FA]">
      <img src={Logo} className=" w-52 md:w-64  h-auto" />
      <h1 className="my-8 text-3xl font-semibold">
        What does your free trial include?
      </h1>
      <p className="text-xl font-medium">
        For 7 days, you get access to BLAZINGWA’s Sandbox Account.
      </p>
      <p className="text-lg my-6 font-light">
        This means that you can use any active WhatsApp number to learn all
        about BLAZINGWA’s exciting features like:
      </p>
      <div className="flex items-center">
        <img src={Centang} className="w-5 h-5" />
        <label className="ml-6 text-lg">
          Multi-Agent Inbox & Support Dashboard overview
        </label>
      </div>
      <div className="flex items-center">
        <img src={Centang} className="w-5 h-5" />
        <label className="ml-6 text-lg">
          WhatsApp Broadcast (to your own number)
        </label>
      </div>
      <div className="flex items-center">
        <img src={Centang} className="w-5 h-5" />
        <label className="ml-6 text-lg">CRM & Contact Management tour</label>
      </div>
      <div className="flex items-center">
        <img src={Centang} className="w-5 h-5" />
        <label className="ml-6 text-lg">
          Third Party Integrations with tools like Shopify, Google Sheets, etc.
        </label>
      </div>
      <h2 className="my-6 text-lg font-semibold">
        Our free trial is not a customer facing product.
      </h2>

      <h2 className="my-6 text-lg font-semibold">You WILL NOT be able to</h2>

      <div className="flex items-center">
        <img src={Ex} className="w-5 h-5" />
        <label className="ml-6 text-lg">
          Build Chatbot or Automation Flows
        </label>
      </div>
      <div className="flex items-center">
        <img src={Ex} className="w-5 h-5" />
        <label className="ml-6 text-lg">Create New Templates</label>
      </div>
      <div className="flex items-center">
        <img src={Ex} className="w-5 h-5" />
        <label className="ml-6 text-lg">Set up your own WhatsApp number</label>
      </div>
      <div className="flex items-center">
        <img src={Ex} className="w-5 h-5" />
        <label className="ml-6 text-lg">Send messages to your customers</label>
      </div>

      <h2 className="my-6 text-lg font-semibold">
        To use our free trial version, you do not need Facebook Verification or
        WhatsApp API registration.
      </h2>
    </div>
  );
}

export default SidePages;
