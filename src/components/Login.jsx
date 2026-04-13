import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BBLogo from '../assets/BB_logo1.jpg';

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongCredential, setIsWrongCredential] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = () => {
    if (userName === "user" && password === "user") {
      localStorage.setItem("isLoggedIn", "true");
      setIsWrongCredential(false);
      navigate("/home");
    } else {
      setIsWrongCredential(true);
      setErrorMessage("Invalid credential!");
    }
  };

  return (
    <div className="flex flex-col items-center">

      <div className="flex justify-center">
        <img
          src={BBLogo}
          alt="Bangladesh Bank Logo"
          className="h-[93px] w-[94px]"
        />
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-green-900 font-bold text-[18px]">
          Bangladesh Bank
        </span>
        <span className="text-black font-bold text-[15px]">
          Online Import Monitoring System
        </span>
      </div>

      <div className="border border-black p-2 w-[530px]">
        <div className="border border-black">
          <p className="bg-[#0066B2] text-white text-[14px] p-[2px]">Login</p>

          <div className="pl-3 pt-1">

            <div className="p-1 text-[12px] flex gap-1 items-center">
              <label className="underline w-[80px]">Username</label>
              <input
                id="P101_USERNAME"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="h-[20px] w-[300px] p-1 border border-black"
              />
            </div>

            <div className="p-1 text-[12px] flex gap-1 items-center">
              <label className="underline w-[80px]">Password</label>
              <input
                id="P101_PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="h-[20px] w-[300px] p-1 border border-black"
              />
              <button
                id="login-button"
                onClick={onLogin}
                className="font-bold text-white bg-[#0066B2] px-2 border-l-[2px] border-l-[#AAAAAA]
                          border-t-[2px] border-t-[#AAAAAA]
                          border-r-[2px] border-r-[#333333]
                          border-b-[2px] border-b-[#333333]
                          hover:text-yellow-400 active:translate-y-[2px] active:shadow-inner
                          transition-all duration-150"
              >
                Login
              </button>
            </div>

            {isWrongCredential && (
              <p id="login-error" className="text-red-600 text-[12px] mt-1">{errorMessage}</p>
            )}
          </div>
        </div>

        <div className="text-[12px] flex flex-col gap-2 pt-2">
          <p className="text-[#008000]">
            If you know your Password but your User ID is LOCKED then try again
            after 20 minutes with your latest known Password.
          </p>
          <p className="text-[#800000]">
            For a new password, Bank Branch have to ask their Head Office and
            vice versa to add a 'Reset Password' request on the 'Online Import
            Monitoring System -&gt; Tickets -&gt; Reset Password'.
          </p>
          <p className="text-[#000080]">
            For correcting Wrong data, Technical and Operational problems,
            Bank/Branch may raise Ticket through (Tickets -&gt; New Ticket) and
            Tickets raised by AD Branch need to be verified by Head Office.
          </p>
          <div>
            <span className="text-[#008080]">
              If you are unable to submit Ticket, please send email (detail
              with screen shot if necessary)
            </span>
            <p>To: tausun.akhtary@bb.org.bd; m.belal@bb.org.bd;shimul.chandra@bb.org.bd</p>
            <p>CC: hasan.mamun@bb.org.bd;</p>
          </div>
          <p className="text-[#800000]">
            Please attach supporting documents with the Ticket (pdf format) and
            email (any format). While there is a query against your Ticket{" "}
            <span className="font-bold">(Status Query_by_BB)</span>, please
            send reply within 3 working days.
          </p>
        </div>

        <div className="py-2">
          <hr className="border-[1.5px] border-blue-600" />
        </div>

        <p className="text-[12px]">
          Developed and Managed by{" "}
          <span className="font-bold">
            Information and Communication Technology Department.
          </span>
        </p>
        <p className="text-green-900 font-bold text-center text-[14px]">
          Bangladesh Bank
        </p>
      </div>
    </div>
  );
}