import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailId, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`✔ ${data.message}`);
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Opps🙀!! Something went wrong.....");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="p-6 border rounded w-80">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          className="border border-gray-600 p-2 w-full mb-3"
          type="text"
          placeholder="Email ID"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <input
          className="border border-gray-600 p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="ml-25 text-black border border-gray-600 px-6 py-2 hover:bg-yellow-600 hover:text-white rounded-full" onClick={handleSubmit}>
          Login
        </button>
        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
