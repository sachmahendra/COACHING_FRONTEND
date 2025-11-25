


// import React, { useState } from "react"
// import Back from "../common/back/Back"
// import "./contact.css"
// import Faq from "../pricing/Faq"

// const Contact = () => {
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
//       <Back title="Contact us" />
//       <section className="contacts padding">
//         <div className="container shadow flexSB">
//           <div className="left row">
//             <iframe src={map} title="map"></iframe>
//           </div>

//           <div className="right row">
//             <h1>Request a callback</h1>
//             <p>We're open for any suggestion or just to have a chat</p>
//             <div className='items grid2'>
//                <div className='box'>
//                  <h4>ADDRESS:</h4>
//                  <p>198 West 21th Street</p>
//                </div>
//                <div className='box'>
//                  <h4>EMAIL:</h4>
//                  <p> info@yoursite.com</p>
//                </div>
//                <div className='box'>
//                  <h4>PHONE:</h4>
//                  <p> + 1235 2355 98</p>
//                </div>
//              </div>

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
//       <Faq />
//     </>
//   )
// }

// export default Contact





import React, { useState } from "react"
import Back from "../common/back/Back"
import "./contact.css"
import Faq from "../pricing/Faq"
import { API_URL } from "../../api";   // path depends on folder depth

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56763.06920324782!2d78.98236640798588!3d27.228823745427654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975961dc29eb577%3A0x55a113764208fe9b!2sMainpuri%2C%20Uttar%20Pradesh%20205001!5e0!3m2!1sen!2sin!4v1757527552670!5m2!1sen!2sin"

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_class: "",
    customer_goal: "",
    customer_course: "",
    customer_mobile: "",
    customer_email: "",
    customer_message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
fetch(`${API_URL}/courses/?category=NEET`)
    try {
       const response = await fetch(`${API_URL}/postcustomerData/`, {
      // const response = await fetch("http://127.0.0.1:8000/postcustomerData/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          customer_name: "",
          customer_class: "",
          customer_goal: "",
          customer_course: "",
          customer_mobile: "",
          customer_email: "",
          customer_message: "",
        })
        setSuccess(true)
      } else {
        alert("Failed to send message. Please try again!")
      }
    } catch (error) {
      alert("Error sending message.")
    }

    setLoading(false)
  }

  return (
    <>
      <Back title="Contact us" />

      {/* SUCCESS POPUP */}
      {success && (
        <div style={popupStyle}>
          <div style={popupBoxStyle}>
            <h2>🎉 Message Sent Successfully!</h2>
            <p>
              Thank you! Your message has been submitted.  
              We will contact you soon.  
              <br />
              <strong>If urgent, please call us on 9876543210.</strong>
            </p>
            <button onClick={() => setSuccess(false)} style={popupBtnStyle}>
              Close
            </button>
          </div>
        </div>
      )}

      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map} title="map"></iframe>
          </div>

          <div className="right row">
            <h1>Request a callback</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  name="customer_name"
                  placeholder="Student Name"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="customer_class"
                  placeholder="Student Class"
                  value={formData.customer_class}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flexSB">
                <input
                  type="text"
                  name="customer_goal"
                  placeholder="Student Goal"
                  value={formData.customer_goal}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="customer_course"
                  placeholder="Preferred Courses"
                  value={formData.customer_course}
                  onChange={handleChange}
                />
              </div>

              <div className="flexSB">
                <input
                  type="text"
                  name="customer_mobile"
                  placeholder="Stu. Mob Number"
                  value={formData.customer_mobile}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="customer_email"
                  placeholder="Student Email"
                  value={formData.customer_email}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="customer_message"
                cols="30"
                rows="5"
                placeholder="Create a message here..."
                value={formData.customer_message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="primary-btn" disabled={loading}>
                {loading ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>

      <Faq />
    </>
  )
}

export default Contact

// -------------------- POPUP STYLES --------------------
const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
}

const popupBoxStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "450px",
  textAlign: "center",
  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
}

const popupBtnStyle = {
  marginTop: "15px",
  background: "#1eb2a6",
  color: "white",
  padding: "10px 22px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
}
