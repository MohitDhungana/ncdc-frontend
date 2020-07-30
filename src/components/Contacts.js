// import React from 'react';

// const Contacts = () => {
//   return (
//     <div className="row  section  red   ">
//       <div className="container container-padding">
//         <div className="col s12 m6 white-text">
//           <div className="row valign-wrapper">
//             <div className="col s2 ">
//               <i class="valign-wrapper large material-icons">mail</i>
//             </div>
//             <h6 className="col s10">
//               +977 9898989898
//               <br />
//               example@test.com <br />
//             </h6>
//           </div>
//         </div>

//         <div className="col s12 m6 white-text ">
//           <div className="row valign-wrapper">
//             <div className="col s2 ">
//               <i class="valign-wrapper large material-icons">pin_drop</i>
//             </div>
//             <h6 className="col s10">
//               Nepal Community Development Center (NCDC)
//               <br />
//               P.O. Box number: 123456 <br />
//               Bhadrapur, Jhapa, <br /> Nepal
//             </h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacts;

import React from 'react';

const Contacts = () => {
  return (
    <>
      <ul>
        <li className="icon li-title">Nepal Community Development Center</li>
        <li className="icon">Bhadrapur, Jhapa, Nepal</li>
        <li className="icon">
          <i className="material-icons">mail_outline</i>
          <span></span>P.O Box: 12345
        </li>
        <li className="icon">
          <i className="material-icons">phone</i>
          <span></span>9898989898
        </li>
        <li className="icon">
          <i className="material-icons">email</i>
          <span>asdf@adfs.com</span>
        </li>
      </ul>
    </>
  );
};

export default Contacts;
