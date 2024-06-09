import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <form>
      <div>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={data.username}
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <input
          name="remember"
          type="checkbox"
          checked={data.remember}
          onChange={handleInputChange}
        ></input>
      </div>
    </form>
  );
}

export default Login;