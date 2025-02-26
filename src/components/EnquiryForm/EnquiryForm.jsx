import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import './EnquiryForm.css'


const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Enquiry Submitted:", formData);
    // Handle form submission logic (e.g., API call)
    // let data={name,phone,email,product,message};
    // console.log(data);
    emailjs.send("fire_equipmentservice","fire_equipmenttemplate",formData,"_h7JmkJ5aKiFj-Tn3")
    .then(res=>{alert("Successful");
        //  Reset form after successful submission
        setFormData({
            name: "",
            phone: "",
            email: "",
            product: "",
            message: ""
        });
        
    })
    .catch(error=>{
        alert(error)
    });

  };

  return (
    <div className="enquiry-container" id="enquiry-form">
      <h2>Product Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="enquiry-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="product"
          placeholder="Product Name"
          value={formData.product}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Enquiry"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Enquiry</button>
      </form>
      </div>
)}
export default EnquiryForm;