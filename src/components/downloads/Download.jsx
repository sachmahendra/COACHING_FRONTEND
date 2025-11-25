
// import React, { useState } from "react"
// import Back from "../common/back/Back"
// import "./download.css"

// const Download = () => {
//   const map =
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56763.06920324782!2d78.98236640798588!3d27.228823745427654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975961dc29eb577%3A0x55a113764208fe9b!2sMainpuri%2C%20Uttar%20Pradesh%20205001!5e0!3m2!1sen!2sin!4v1757527552670!5m2!1sen!2sin"

//   // 🔹 State with Django field names
//   const [formData, setFormData] = useState({
//     customer_name: "",
//     customer_class: "",
//     customer_goal: "",
//     customer_course: "",
//     customer_mobile: "",
//     customer_email: "",
//     customer_message: "",
//   })

//   // 🔹 Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   // 🔹 Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch("http://127.0.0.1:8000/postcustomerData/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         alert("Message sent successfully!")
//         setFormData({
//           customer_name: "",
//           customer_class: "",
//           customer_goal: "",
//           customer_course: "",
//           customer_mobile: "",
//           customer_email: "",
//           customer_message: "",
//         })
//       } else {
//         const errorData = await response.json()
//         console.error("Error:", errorData)
//         alert("Failed to send message. Check console for details.")
//       }
//     } catch (error) {
//       console.error("Error:", error)
//       alert("Error sending message")
//     }
//   }

//   return (
//     <>
//       <Back title="See All Downloads" />
//       <section className="contacts padding">
//         <div className="container shadow flexSB">
//           <div className="left row">
//             <iframe src={map} title="map"></iframe>
//           </div>

//           <div className="right row">
//             <h1>Request a callback</h1>
//             <p>We're open for any suggestion or just to have a chat</p>

//             <form onSubmit={handleSubmit}>
//               <div className="flexSB">
//                 <input
//                   type="text"
//                   name="customer_name"
//                   placeholder="Student Name"
//                   value={formData.customer_name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="customer_class"
//                   placeholder="Student Class"
//                   value={formData.customer_class}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="flexSB">
//                 <input
//                   type="text"
//                   name="customer_goal"
//                   placeholder="Student Goal"
//                   value={formData.customer_goal}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   name="customer_course"
//                   placeholder="Preferred Courses"
//                   value={formData.customer_course}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="flexSB">
//                 <input
//                   type="text"
//                   name="customer_mobile"
//                   placeholder="Stu. Mob Number"
//                   value={formData.customer_mobile}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="customer_email"
//                   placeholder="Student Email"
//                   value={formData.customer_email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <textarea
//                 name="customer_message"
//                 cols="30"
//                 rows="5"
//                 placeholder="Create a message here..."
//                 value={formData.customer_message}
//                 onChange={handleChange}
//               ></textarea>

//               <button type="submit" className="primary-btn">
//                 SEND MESSAGE
//               </button>
//             </form>

//             <h3>Follow us here</h3>
//             <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Download




// import React, { useEffect, useState } from "react";
// import Back from "../common/back/Back";
// import { useLocation } from "react-router-dom";
// import "./download.css";

// const Download = () => {
//   const location = useLocation();
//   const { categoryName } = location.state || {}; // get from navigation
//   const [documents, setDocuments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   console.log("category name : ",categoryName);

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         if (!categoryName) return;

//         const response = await fetch(
//           `http://127.0.0.1:8000/download-documents/?category_name=${encodeURIComponent(
//             categoryName
//           )}`
//         );
//         const data = await response.json();
//         setDocuments(data);
//       } catch (error) {
//         console.error("Error fetching documents:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDocuments();
//   }, [categoryName]);

//   return (
//     <>
//     <Back title="Downloads" />
//     <section className="downloads container">
//       <h2 className="downloads-title">
//         📚 Downloads for <span>{categoryName || "Selected Category"}</span>
//       </h2>

//       {loading ? (
//         <p className="loading-text">Loading documents...</p>
//       ) : documents.length === 0 ? (
//         <p className="no-data">No documents found for {categoryName}</p>
//       ) : (
//         <div className="downloads-grid">
//           {documents.map((doc) => (
//             <div key={doc.document_id} className="download-card">
//               <h3 className="doc-title">{doc.title}</h3>
//               <p className="doc-subject">📘 Subject: {doc.subject}</p>
//               {/* <p className="doc-type">📂 Type: {doc.doc_type}</p>
//               <p className="doc-category">
//                 🏷️ Category: {categoryName || "N/A"}
//               </p> */}
//               <a
//                 href={doc.file}
//                 className="download-btn"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 ⬇️ Download
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//     </>
//   );
// };

// export default Download;





import React, { useEffect, useState } from "react";
import Back from "../common/back/Back";
import { useLocation } from "react-router-dom";
import "./download.css";
import { API_URL } from "../../api";   // path depends on folder depth

const Download = () => {
  const location = useLocation();
  const { categoryName } = location.state || {};
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 New: Filter state
  const [selectedSubject, setSelectedSubject] = useState("All");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        if (!categoryName) return;

        const response = await fetch(
          // `http://127.0.0.1:8000/download-documents/?category_name=${encodeURIComponent(
          `${API_URL}/download-documents/?category_name=${encodeURIComponent(
            categoryName
          )}`
        );
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [categoryName]);

  // 🔹 New: Filtered documents based on subject
  const filteredDocuments =
    selectedSubject === "All"
      ? documents
      : documents.filter((doc) => doc.subject.toLowerCase() === selectedSubject.toLowerCase());

  return (
    <>
      <Back title="Downloads" />
      <section className="downloads container">
        <h2 className="downloads-title">
          📚 Downloads for <span>{categoryName || "Selected Category"}</span>
        </h2>

        {/* 🔹 Subject Filter */}
        <div className="subject-filter">
          <label htmlFor="subject-select">Filter by Subject: </label>
          <select
            id="subject-select"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Maths">Maths</option>
            <option value="Biology">Biology</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
        </div>

        {/* 🔹 Documents Display */}
        {loading ? (
          <p className="loading-text">Loading documents...</p>
        ) : filteredDocuments.length === 0 ? (
          <p className="no-data">No documents found for {selectedSubject}</p>
        ) : (
          <div className="downloads-grid">
            {filteredDocuments.map((doc) => (
              <div key={doc.document_id} className="download-card">
                <h3 className="doc-title">{doc.title}</h3>
                <p className="doc-subject">📘 Subject: {doc.subject}</p>
                <a
                  href={doc.file}
                  className="download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⬇️ Download
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Download;
