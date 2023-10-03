import React from "react";
import ConnectSection from "../components/ConnectSection";
import Mail from "../components/Mail";

const Contact = () => {
  return (
    <div className="container mt-24 mx-auto px-12 py-4 flex-row">
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-0 py-0 gap-4 relative"
      >
        <ConnectSection />
        <Mail />
      </section>
    </div>
  );
};

export default Contact;
