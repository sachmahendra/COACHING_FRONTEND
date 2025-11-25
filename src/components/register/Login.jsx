// import Back from "../common/back/Back";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./register.css";

// const Login = () => {
//   const history = useHistory();
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://127.0.0.1:8000/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const { access, refresh, user } = data;

//         // Store tokens & user info
//         localStorage.setItem("access", access);
//         localStorage.setItem("refresh", refresh);
//         localStorage.setItem("user", JSON.stringify(user));

//         toast.success("Login successful!");
//         setTimeout(() => history.push("/student-dashboard"), 1500);
//       } else {
//         toast.error(data.error || "Invalid credentials");
//       }
//     } catch (error) {
//       toast.error("Network error. Please try again later.");
//     }
//   };

//   return (
//     <>
//     <Back title="Login Account" />
//     <div className="auth-container">
//       <ToastContainer />
//       <div className="auth-card">
//         <h2>Welcome Back</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className="btn-register">Login</button>
//         </form>
//         <p>
//           Don’t have an account?{" "}
//           <span className="register_link" onClick={() => history.push("/register")}>Sign Up</span>
//         </p>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Login;





// src/components/auth/Login.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Back from "../common/back/Back";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import { API_URL } from "../../api";   // path depends on folder depth

// const API = "http://127.0.0.1:8000";

const Login = () => {
  const history = useHistory();
  const [step, setStep] = useState(1); // 1 send mobile, 2 enter OTP
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async (e) => {
    e?.preventDefault();
    if (!mobile) return toast.error("Enter mobile number");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/send-otp/`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ mobile_number: mobile })
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("OTP sent");
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

  const verifyAndLogin = async (e) => {
    e?.preventDefault();
    if (!otp) return toast.error("Enter OTP");
    setLoading(true);
    try {
      // We call login-with-otp which expects mobile_number & code
      const res = await fetch(`${API_URL}/login-with-otp/`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ mobile_number: mobile, code: otp })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!");
        setTimeout(() => history.push("/student-dashboard"), 800);
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
      <Back title="Login" />
      <ToastContainer />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Login with OTP</h2>

          {step === 1 && (
            <form onSubmit={sendOtp}>
              <input value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile number" required />
              <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send OTP"}</button>
            </form>
          )}

          {step === 2 && (
            <>
              <p>OTP sent to {mobile}</p>
              <form onSubmit={verifyAndLogin}>
                <input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" required />
                <button type="submit" disabled={loading}>{loading ? "Verifying..." : "Verify & Login"}</button>
              </form>
              <button onClick={()=>{ setStep(1); setOtp(""); }}>Change number</button>
            </>
          )}

          <p style={{marginTop:12}}>
            New here? <span style={{color:"#007bff", cursor:"pointer"}} onClick={()=>history.push("/register")}>Sign up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
