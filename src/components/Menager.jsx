import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";

function Menager() {
  const ref = useRef();
  const [form, setform] = useState({ side: "", username: "", password: "" });
  const [passwordsArray, setpasswordsArray] = useState([]);
  const iconRef = useRef();
  const passwordref = useRef();
  let a = document.getElementById("passwordBtnText");

  useEffect(() => {
    let Passwords = localStorage.getItem("Passwords");
    let passwordarray;
    if (Passwords) {
      setpasswordsArray(JSON.parse(Passwords));
    } else {
      passwordarray = [];
    }
  }, []);

  const showpassword = () => {
    passwordref.current.type = "text";
    if (ref.current.src.includes("/icons/eye-off.png")) {
      passwordref.current.type = "text";
      ref.current.src = "/icons/eye.png";
    } else {
      ref.current.src = "/icons/eye-off.png";
      passwordref.current.type = "password";
    }
  };
  const savePassword = () => {
    if (form.side === "" || form.username === "" || form.password === "") {
      alert("Please Fill All The Fields");
      return;
    } else {
      a.innerText = "Add Password";
      console.log("Password Saved Successfully!");
      console.log(form);
      setpasswordsArray([...passwordsArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "Passwords",
        JSON.stringify([...passwordsArray, { ...form, id: uuidv4() }])
      );
      setform({ side: "", username: "", password: "" });
      console.log([...passwordsArray, form]);
    }
  };
  const deletePassword = (id) => {
    console.log("Delete Password with id:", id);
    const item = passwordsArray.find((item) => item.id === id);

    if (!item) return;
    let c = confirm(`Are you sure you want to delete ${item.side}?`);
    if (!c) return;
    setpasswordsArray(passwordsArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "Passwords",
      JSON.stringify(passwordsArray.filter((item) => item.id !== id))
    );
  };
  const editPassword = (id) => {
    a.innerText = "Edit Password";
    console.log("Edit Password with id:", id);
    setform(passwordsArray.filter((item) => item.id === id)[0]);
    setpasswordsArray(passwordsArray.filter((item) => item.id !== id));
  };
  const handleclick = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    form.side === "" || form.username === "" || form.password === "";
  };
  function CopyText(text) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast(` ${text} copied!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast(` ${text} copied!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
      });
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-900 opacity-20 blur-[100px]"></div>
      </div>
      <div className="container mx-auto rounded-md ">
        <div className="select-none text-black flex flex-col items-center fles-col p-4">
          <h1 className="text-4xl font-bold ">
            <span className="text-green-500 ">&lt;</span>
            Pass
            <span className="text-green-500">OP&gt;</span>
          </h1>
          <p className="text-green-900 text-lg font-bold">
            your password Menager
          </p>
          <input
            value={form.side}
            onChange={handleclick}
            placeholder="Enter Website URL"
            className="border-green-700 border-2 border-opacity-50 rounded-full pl-4 w-full m-2.5 p-1.5 text-black focus:outline-none focus:border-opacity-100"
            type="text"
            name="side"
            id="website"
          />
          <div className="flex gap-2 min-w-full">
            <input
              value={form.username}
              onChange={handleclick}
              placeholder="Enter Username"
              className="border-green-700 border-2 border-opacity-50 rounded-full pl-4 p-1.5 w-full text-black focus:outline-none focus:border-opacity-100"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative w-full">
              <input
                ref={passwordref}
                value={form.password}
                onChange={handleclick}
                placeholder="Enter Password"
                className="border-green-700 border-2 border-opacity-50 rounded-full pl-4 p-1.5 w-full text-black focus:outline-none focus:border-opacity-100"
                type="text"
                name="password"
                id="password"
              />
              <span
                onClick={showpassword}
                className="absolute right-0 mr-2 top-1/2 -translate-y-1/2"
              >
                <img
                  ref={ref}
                  src="/icons/eye.png"
                  className="w-6 m-2 cursor-pointer"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="pt-3">
            <button
              id="passwordBtn"
              onClick={savePassword}
              className="bg-green-500 border-green-700 border-2 hover:bg-green-600 transition-colors duration-300 text-[#121331] font-bold py-2 px-4 rounded-full flex items-center gap-2"
            >
              <span id="passwordBtnText">Add Password</span>
              <lord-icon
                ref={iconRef}
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="loop-on-hover"
                delay="250"
              ></lord-icon>
            </button>
          </div>
        </div>
        <h2 className="font-bold text-xl">Your Passwords</h2>
        {passwordsArray.length === 0 && (
          <div className="text-center text-gray-500">No Passwords Saved</div>
        )}
        {passwordsArray.length != 0 && (
          <div className="overflow-y-auto">
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th>Side</th>
                  <th className="border-l border-gray-500">UserName</th>
                  <th className="border-l border-gray-500">Password</th>
                  <th className="border-l border-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200 ">
                {passwordsArray.map((item, index) => {
                  return (
                    <tr
                      className="overflow-hidden rounded-md m-2 bg-green-400 even:bg-green-200"
                      key={item.id}
                    >
                      <td className="py-1 p-5">
                        <div className="flex">
                          <span className="pr-1.5">{index + 1}.</span>
                          <div className="flex justify-between w-full">
                            <span>
                              <a href={item.side}>{item.side}</a>
                            </span>
                            <span
                              className="cursor-pointer"
                              onClick={() => CopyText(item.side)}
                            >
                              <lord-icon
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="click"
                              ></lord-icon>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 p-5 border-l  border-gray-500">
                        <div className="flex justify-between ">
                          <span>{item.username}</span>
                          <span
                            className="cursor-pointer"
                            onClick={() => CopyText(item.username)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="click"
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                      <td className="py-1 p-5 border-l  border-gray-500">
                        <div className="flex justify-between ">
                          <span type="password">{item.password}</span>
                          <span
                            className="cursor-pointer"
                            onClick={() => CopyText(item.password)}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="click"
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                      <td className="py-1 p-5 border-l  border-gray-500">
                        <div className="flex gap-2 pt-2 justify-end">
                          <div>
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                              }}
                              onClick={() =>
                                CopyText(
                                  `${item.password}\n${item.username}\n${item.side}`
                                )
                              }
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="click"
                            ></lord-icon>
                          </div>
                          <div
                            onClick={() => editPassword(item.id)}
                            className="pt-0.5"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="click"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                          <div onClick={() => deletePassword(item.id)}>
                            <lord-icon
                              className="delete-icon"
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="click"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
export default Menager;
