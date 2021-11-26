// import React, { useState } from "react";
// import { CloseIcon } from "../icons/CloseIcon";
// import "./forms.css";

// export function Form1(props) {
//   return (
//     <div>
//       <section className="form_section">
//         <div className="container">
//           <div className="form_area"></div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export function ModalForm1(props) {
//   //   const [openDrop, setOpenDrop] = useState("close_icon");
//   const [openModal, setOpenModal] = useState("modal_form_section");

//   const toggleCloseIcon = () => {
//     setOpenModal("not_modal_form_section");
//   };
//   return (
//     <div>
//       <section
//         className={
//           openModal == "modal_form_section"
//             ? "modal_form_section"
//             : "not_modal_form_section"
//         }
//       >
//         <div className="container">
//           <div className="form_area">
//             <div className="modal_form_head" onClick={toggleCloseIcon}>
//               Fill the inputs correctly <CloseIcon />
//             </div>
//             <div className="modal_form_area1">
//               <div className="modal_form_area1_input_heading">
//                 Twitter Username
//               </div>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 className="modal_form_area1_input1"
//               />
//             </div>
//             {/* ========= */}
//             {/* ========= */}
//             {/* ========= */}
//             {/* ========= */}
//             <div className="modal_form_area1">
//               <div className="modal_form_area1_input_heading">
//                 Telegram Username
//               </div>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 className="modal_form_area1_input1"
//               />
//             </div>
//             {/* ========= */}
//             {/* ========= */}
//             {/* ========= */}
//             {/* ========= */}
//             <div className="modal_form_area1">
//               <div className="modal_form_area1_input_heading">
//                 Facebook Username
//               </div>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 className="modal_form_area1_input1"
//               />
//             </div>
//             {/* ========= */}
//             {/* ========= */}
//             {/* ========= */}
//             {/* ========= */}
//             <div className="modal_form_area1">
//               <div className="modal_form_area1_input_heading">
//                 LinkedIn Username
//               </div>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 className="modal_form_area1_input1"
//               />
//             </div>
//             <button className="generate_ref_link">Submit</button>
//             {/* ===== */}
//             {/* ===== */}
//             {/* ===== */}
//             {/* ===== */}
//             {/* ===== */}
//             {/* ===== */}
//             {/* ===== */}
//             <div className="referral_area">
//               <div className="referral_heading">
//                 Invite People to get 30% EGR on every airdrop.
//               </div>
//               <div className="modal_form_area1">
//                 <div className="modal_form_area1_input_heading">
//                   Enter your BEP20 Address
//                 </div>
//                 <input
//                   type="text"
//                   name=""
//                   id=""
//                   className="modal_form_area1_input1"
//                 />
//               </div>
//               <button className="generate_ref_link">Get Ref Link</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
