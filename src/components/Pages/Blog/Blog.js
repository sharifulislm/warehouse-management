// import React from 'react';
// import './Blog.css';



// const end = new Date("May 03, 2025 00:00:00").getTime();
// // const end = new Date("November 09, 2020 00:00:00").getTime();
// const dayEl = document.querySelector(".days");
// const hoursEl = document.querySelector(".hours");
// const minutesEl = document.querySelector(".minutes");
// const secondsEl = document.querySelector(".seconds");
// const seconds = 1000;
// const minutes = seconds * 60;
// const hours = minutes * 60;
// const days = hours * 24;

// const x = setInterval(function () {
//   let now = new Date().getTime();
//   const difference = end - now;

//   if (difference < 0) {
//     clearInterval(x);
//     document.getElementById("done").innerHTML = "We're married! ðŸŽ‰";
//     return;
//   }

//   dayEl.innerText = Math.floor(difference / days);
//   hoursEl.innerText = Math.floor((difference % days) / hours);
//   minutesEl.innerText = Math.floor((difference % hours) / minutes);
//   secondsEl.innerText = Math.floor((difference % minutes) / seconds);
// }, seconds);


// const Blog = () => {
//     return (
//         // <!--====== COMING SOON PART START ======-->
//         <section
//            className="
//            coming-soon-area coming-soon-one
//            d-flex
//            align-items-center
//            bg_cover
//            "
//            style="background-image: url(https://cdn.ayroui.com/1.0/images/coming-soon/background.png)"
//            >
//            <div className="container">
//               <div className="row justify-content-center">
//                  <div className="col-lg-8">
//                     <div className="coming-soon-content text-center">
//                        <div className="countdown">
//                           <ul id="countdown-example">
//                              <li>
//                                 <span className="count days">29</span>
//                                 <p className="text days_text">Days</p>
//                              </li>
//                              <li>
//                                 <span className="count hours">53</span>
//                                 <p className="text hours_text">Hours</p>
//                              </li>
//                              <li>
//                                 <span className="count minutes">34</span>
//                                 <p className="text minutes_text">Minutes</p>
//                              </li>
//                              <li>
//                                 <span className="count seconds">08</span>
//                                 <p className="text seconds_text">Seconds</p>
//                              </li>
//                           </ul>
//                        </div>
//                        <h2 className="coming-soon-title">coming soon</h2>
//                        <div className="coming-soon-btn rounded-buttons">
//                           <ul>
//                              <li>
//                                 <a
//                                    href="javascript:void(0)"
//                                    className="btn primary-btn-outline rounded-full"
//                                    >
//                                 LEARN MORE
//                                 </a>
//                              </li>
//                              <li>
//                                 <a
//                                    href="javascript:void(0)"
//                                    className="btn primary-btn rounded-full"
//                                    >
//                                 GET NOTIFY
//                                 </a>
//                              </li>
//                           </ul>
//                        </div>
//                        {/* <!-- rounded-buttons --> */}
//                     </div>
//                     {/* <!-- coming soon content --> */}
//                  </div>
//               </div>
//               {/* <!-- row --> */}
//            </div>
//            {/* <!-- container --> */}
//         </section>
//         // <!--====== COMING SOON PART ENDS ======-->
      
//     );
// };

// export default Blog;