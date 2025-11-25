// import Back from "../common/back/Back";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./register.css";

// const Register = () => {
//   const history = useHistory();

//   // include password2
//   const [formData, setFormData] = useState({
//     email: "",
//     full_name: "",
//     password: "",
//     password2: "",
//   });

//   // handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://127.0.0.1:8000/signup/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("🎉 Registration successful! Redirecting to login...");
//         setTimeout(() => history.push("/login"), 2000);
//       } else {
//         // Display specific error message if available
//         if (typeof data === "object") {
//           const firstKey = Object.keys(data)[0];
//           toast.error(data[firstKey] || "Signup failed");
//         } else {
//           toast.error("Signup failed. Please check your details.");
//         }
//       }
//     } catch (error) {
//       toast.error("Network error. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <Back title="Create Account" />
//       <div className="auth-container">
//         <ToastContainer />
//         <div className="auth-card">
//           <h2>Create Your Account</h2>

//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="full_name"
//               placeholder="Full Name"
//               value={formData.full_name}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="password"
//               name="password2"
//               placeholder="Confirm Password"
//               value={formData.password2}
//               onChange={handleChange}
//               required
//             />

//             <button type="submit" className="btn-register">
//               Sign Up
//             </button>
//           </form>

//           <p>
//             Already have an account?{" "}
//             <span className="register_link" onClick={() => history.push("/login")}>
//               Login
//             </span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;




// src/components/auth/Register.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Back from "../common/back/Back";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import { API_URL } from "../../api";   // path depends on folder depth

// const API = "http://127.0.0.1:8000";

const Register = () => {
  const history = useHistory();

  const [step, setStep] = useState(1); // 1: send mobile -> 2: verify otp -> 3: complete details
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    target_course: "",
    student_class: "",
  });

  // send OTP
  const sendOtp = async (e) => {
    e?.preventDefault();
    if (!mobile) return toast.error("Enter mobile number");
    setLoading(true);
    try {
         const res = await fetch(`${API_URL}/send-otp/`, {
      // const res = await fetch(`${API}/send-otp/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile_number: mobile }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("OTP sent (check console on dev).");
        setStep(2);
      } else {
        toast.error(data.error || JSON.stringify(data));
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  // verify otp
  const verifyOtp = async (e) => {
    e?.preventDefault();
    if (!otp) return toast.error("Enter OTP");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/verify-otp/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile_number: mobile, code: otp }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("OTP verified. Complete your profile.");
        setStep(3);
      } else {
        toast.error(data.error || JSON.stringify(data));
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  // complete signup
  const completeSignup = async (e) => {
    e?.preventDefault();
    // simple validation
    if (!details.full_name) return toast.error("Enter name");
    setLoading(true);
    try {
      const payload = { mobile_number: mobile, ...details };
      const res = await fetch(`${API_URL}/complete-signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        // store tokens and user
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Signup complete! Redirecting to dashboard...");
        setTimeout(() => history.push("/student-dashboard"), 1200);
      } else {
        toast.error(data.error || JSON.stringify(data));
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Back title="Sign up" />
      <ToastContainer />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Create Account</h2>

          {step === 1 && (
            <form onSubmit={sendOtp}>
              <input
                type="text"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </form>
          )}

          {step === 2 && (
            <>
              <p>OTP sent to {mobile}</p>
              <form onSubmit={verifyOtp}>
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                <button type="submit" disabled={loading}>
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
              <button onClick={() => { setStep(1); setOtp(""); }}>Change number</button>
            </>
          )}

          {step === 3 && (
            <form onSubmit={completeSignup}>
              <input name="full_name" placeholder="Full name" value={details.full_name} onChange={(e) => setDetails({...details, full_name: e.target.value})} required />
              <input name="email" placeholder="Email (optional)" value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} />
              <input name="target_course" placeholder="Target Course (e.g. NEET)" value={details.target_course} onChange={(e) => setDetails({...details, target_course: e.target.value})} />
              <input name="student_class" placeholder="Class (e.g. 11th)" value={details.student_class} onChange={(e) => setDetails({...details, student_class: e.target.value})} />
              <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Complete Signup"}</button>
            </form>
          )}

          <p style={{marginTop:12}}>
            Already have account? <span style={{color:"#007bff", cursor:"pointer"}} onClick={() => history.push("/login")}>Login with OTP</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

