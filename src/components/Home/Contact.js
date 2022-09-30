import React, { useRef } from 'react';
import './Contact.css';
import { FaFacebook } from "react-icons/fa";
import {AiFillGooglePlusCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {

   const form = useRef();
   const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs.sendForm('service_w5ckfr1', 'template_4sllcq9', e.target, 'HmDKt3gAaokdpNhzA')
         .then((result) => {
             console.log(result.text);
             toast.success("Message sent!");
         }, (error) => {
             console.log(error.text);
             toast.error("Something went work, please try again.");
             
         });
         e.target.reset();
     };

  

    return (
        // <!--====== CONTACT ONE PART START ======-->
        <section className="contact-area">
            <ToastContainer/>
           <div className="container">
              <div className="row">
                 <div className="col-xl-7 col-lg-8">
                    <div className="section-title mt-45">
                       <h3 className="title">Get in touch</h3>
                    </div>
                    <div className="contact-form form-style-four mt-15">
                       <form action="#" ref={form} onSubmit={sendEmail}>
                          <div className="row">
                             <div className="col-md-6">
                                <div className="form-input mt-15">
                                   <label>Full Name</label>
                                   <div className="input-items default">
                                      <i className="lni lni-user"></i>
                                      <input type="text"  name="name" />
                                   </div>
                                </div>
                                {/* <!-- form input --> */}
                             </div>
                             <div className="col-md-6">
                                <div className="form-input mt-15">
                                   <label>Email Address</label>
                                   <div className="input-items default">
                                      <i className="lni lni-envelope"></i>
                                      <input type="text" name='email' />
                                   </div>
                                </div>
                                {/* <!-- form input --> */}
                             </div>
                             <div className="col-md-6">
                                <div className="form-input mt-15">
                                   <label>Phone Number</label>
                                   <div className="input-items default">
                                      <i className="lni lni-phone"></i>
                                      <input type="text"  />
                                   </div>
                                </div>
                                {/* <!-- form input --> */}
                             </div>
                             <div className="col-md-6">
                                <div className="form-input mt-15">
                                   <label>Subject</label>
                                   <div className="input-items default">
                                      <i className="lni lni-bubble"></i>
                                      <input type="text"  />
                                   </div>
                                </div>
                                {/* <!-- form input --> */}
                             </div>
                             <div className="col-md-12">
                                <div className="form-input mt-15">
                                   <label>Your Message</label>
                                   <div className="input-items default">
                                      <i className="lni lni-pencil-alt"></i>
                                      <textarea
                                        name="message"
                                         placeholder="Type your message here"
                                         />
                                   </div>
                                </div>
                                {/* <!-- form input --> */}
                             </div>
                             <div className="col-md-12">
                                <div className="single-form mt-15">
                                   <div className="input-form rounded-buttons">
                                      <button
                                         className="btn primary-btn rounded-full"
                                         type="submit"
                                         >
                                      SEND MESSAGE
                                      </button>
                                   </div>
                                </div>
                                {/* <!-- single form --> */}
                             </div>
                          </div>
                          {/* <!-- row --> */}
                       </form>
                    </div>
                    {/* <!-- contact form --> */}
                 </div>
                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
                    <div className="section-title mt-5">
                       <h3 className="title">Contact Information</h3>
                    </div>
                    <div className="contact-info">
                       <ul className="info">
                          <li>
                             <div className="single-info">
                                <div className="info-icon">
                                   <i className="lni lni-map-marker"></i>
                                </div>
                                <div className="info-content">
                                   <p className="text">
                                      Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,
                                      Australia
                                   </p>
                                </div>
                             </div>
                             {/* <!-- single info --> */}
                          </li>
                          <li>
                             <div className="single-info">
                                <div className="info-icon">
                                   <i className="lni lni-phone"></i>
                                </div>
                                <div className="info-content">
                                   <p className="text">+61 (8) 8234 3555</p>
                                </div>
                             </div>
                             {/* <!-- single info --> */}
                          </li>
                          <li>
                             <div className="single-info">
                                <div className="info-icon">
                                   <i className="lni lni-phone-set"></i>
                                </div>
                                <div className="info-content">
                                   <p className="text">+61 (8) 8234 3555</p>
                                </div>
                             </div>
                             {/* <!-- single info --> */}
                          </li>
                          <li>
                             <div className="single-info">
                                <div className="info-icon">
                                   <i className="lni lni-envelope"></i>
                                </div>
                                <div className="info-content">
                                   <p className="text">admin@uideck.com</p>
                                </div>
                             </div>
                             {/* <!-- single info --> */}
                          </li>
                       </ul>
                       <ul className="social">
                             <li>
                                <a href="javascript:void(0)">
                                <i className="lni lni-facebook-filled"></i>
                                </a>
                             </li>
                             <li>
                                <a href="javascript:void(0)">
                                <FaFacebook></FaFacebook>
                                </a>
                             </li>
                             <li>
                                <a href="javascript:void(0)">
                          
                                   <AiFillGooglePlusCircle></AiFillGooglePlusCircle>
                                </a>
                             </li>
                             <li>
                                <a href="javascript:void(0)"
                                   > 
                                   <AiFillTwitterCircle></AiFillTwitterCircle></a>
                             </li>
                          </ul>
                    </div>
                    {/* <!-- contact-info --> */}
                 </div>
              </div>
              {/* <!-- row --> */}
           </div>
           {/* <!-- container --> */}
        </section>
        // <!--====== CONTACT ONE PART ENDS ======-->
    );
};

export default Contact;