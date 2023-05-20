// import React ,{useState}from 'react';
// import { useAuth } from '../../server/firebase'
// import { NavLink } from 'react-router-dom';
// import './ListProperty.css';

// const ListProperty = () => {
//   const { currentUser } = useAuth();

//   const [propertyInfo, setPropertyInfo] = useState({
//     name: '',
//     address: '',
//     description: '',
//     // Add more fields as per your requirements
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setPropertyInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Process the property information and save it to the database
//   };

//   const renderPlaceholderContent = () => (
//     <>
//       <h2>List Your Property</h2>
//       <p>Login or sign up to list your property</p>
//       <div className="login-prompt">
//         <NavLink to="/login">Login</NavLink>
//         <NavLink to="/signup">Sign up</NavLink>
//       </div>
//     </>
//   );

//   const renderFormContent = () => (
//     <>
//       <h2>List Your Property</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={propertyInfo.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={propertyInfo.address}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={propertyInfo.description}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         {/* Add more form fields for other property details */}
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );

//   return (
//     <div className="list-property-container">
//       {currentUser ? renderFormContent() : renderPlaceholderContent()}
//     </div>
//   );
// };

// export default ListProperty;
import React from 'react'

function ListProperty() {
  return (
    <div>ListProperty</div>
  )
}

export default ListProperty