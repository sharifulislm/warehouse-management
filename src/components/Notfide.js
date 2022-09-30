import React from 'react';
import './Notfind.css';

const Notfide = () => {
    return (
        // <!--====== ERROR PART START ======-->
        <section className="error-area error-one">
           <div className="container">
              <div className="row justify-content-center">
                 <div className="col-xxl-7 col-xl-8 col-lg-8">
                    <div className="error-content text-center">
                       <span className="error-404">404</span>
                       <h5 className="sub-title">Page Not Found</h5>
                       <p className="text">
                          There are many variations of passages of Lorem Ipsum avaable, b
                          majority have suffered alteration in some form
                       </p>
                       <div className="error-form">
                          <form action="#0">
                             <i className="lni lni-search-alt"></i>
                             <input type="text" placeholder="Search for page" />
                             <div className="error-btn rounded-buttons">
                                <button className="btn primary-btn rounded-full">Search</button>
                             </div>
                          </form>
                       </div>
                    </div>
                    {/* <!-- error content --> */}
                 </div>
              </div>
              {/* <!-- row --> */}
           </div>
           {/* <!-- container --> */}
        </section>
        // <!--====== ERROR PART ENDS ======-->
    );
};

export default Notfide;