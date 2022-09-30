import React from 'react';
import './Footers.css';
import { FaFacebook } from "react-icons/fa";
import {AiFillGooglePlusCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Footers = () => {
   const[user] =useAuthState(auth);
    return (
        // <!--====== FOOTER ONE PART START ======-->
        <footer className="footer-area footer-one text-light bg-dark">
           <div className="footer-widget">
              <div className="container">
                 <div className="row">
                    <div className="col-xl-6 col-lg-4 col-sm-12">
                       <div className="f-about">
                          <div className="footer-logo">
                             <span href="javascript:void(0)">
                           <h3 className='text-light'>  UsedStoreParts</h3>
                           <span> you are Login wiht this email {user?.email}</span>

                             </span>
                          </div>
                          <p className="text">
                             Lorem Ipsum is simply dummy text of the printing and
                             typesetting industry.
                          </p>
                       </div>
                       <div className="footer-app-store">
                          <h5 className="download-title">Download Our App Now!</h5>
                          <ul>
                             <li>
                                <a href="javascript:void(0)">
                                <img
                                   src="https://cdn.ayroui.com/1.0/images/footer/app-store.svg"
                                   alt="app"
                                   />
                                </a>
                             </li>
                             <li>
                                <a href="javascript:void(0)">
                                <img
                                   src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                                   alt="play"
                                   />
                                </a>
                             </li>
                          </ul>
                       </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-sm-4">
                       <div className="footer-link">
                          <h6 className="footer-title">Company</h6>
                          <ul>
                             <li><a href="javascript:void(0)">About</a></li>
                             <li><a href="javascript:void(0)">Contact</a></li>
                             <li><a href="javascript:void(0)">Marketing</a></li>
                             <li><a href="javascript:void(0)">Awards</a></li>
                          </ul>
                       </div>
                       {/* <!-- footer link --> */}
                    </div>
                    <div className="col-xl-2 col-lg-3 col-sm-4">
                       <div className="footer-link">
                          <h6 className="footer-title">Services</h6>
                          <ul>
                             <li><a href="javascript:void(0)">Products</a></li>
                             <li><a href="javascript:void(0)">Business</a></li>
                             <li><a href="javascript:void(0)">Developer</a></li>
                             <li><a href="javascript:void(0)">Insights</a></li>
                          </ul>
                       </div>
                       {/* <!-- footer link --> */}
                    </div>
                    <div className="col-xl-2 col-lg-3 col-sm-4">
                       {/* <!-- Start Footer Contact --> */}
                       <div className="footer-contact">
                          <h6 className="footer-title">Help & Suuport</h6>
                          <ul>
                             <li>
                                <i className="lni lni-map-marker"></i> Madison Street, NewYork,
                                USA
                             </li>
                             <li><i className="lni lni-phone-set"></i> +88 556 88545</li>
                             <li><i className="lni lni-envelope"></i> support@ayroui.com</li>
                          </ul>
                       </div>
                       {/* <!-- End Footer Contact --> */}
                    </div>
                 </div>
                 {/* <!-- row --> */}
              </div>
              {/* <!-- container --> */}
           </div>
           {/* <!-- footer widget --> */}
           <div className="footer-copyright">
              <div className="container">
                 <div className="row">
                    <div className="col-lg-12">
                       <div
                          className="
                          copyright
                          text-center
                          d-md-flex
                          justify-content-between
                          align-items-center
                          "
                          >
                          <p className="text">Copyright © 2024 AyroUI. All Rights Reserved</p>
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
                       {/* <!-- copyright --> */}
                    </div>
                 </div>
                 {/* <!-- row --> */}
              </div>
              {/* <!-- container --> */}
           </div>
           {/* <!-- footer copyright --> */}
        </footer>
       
    );
};

export default Footers;