import { useActionState } from "react";
import "../src/App.css";
function Login() {
  async function handledata(predata, currdata) {
    const name = currdata.get("name");
    const password = currdata.get("password");
    await new Promise((r) => setTimeout(r, 2000));
    if (name !== "yasin" || password !== "1234") {
      alert("invalid password or invalid name!");
      console.log(name, password);
      return { error: "invalid password or invalid name!" };
    } else {
      return { success: "your credaitails is correct!" };
    }
  }
  const [data, action, pending] = useActionState(handledata, {});
  console.log(data);
  return (
    <form action={action} className="login">
      <h2>hello login page on here!</h2>
      <br></br>
      <br></br>
      <input type="text" placeholder="Enter your name!" name="name" />
      <br></br>
      <br></br>
      <input
        type="password"
        placeholder="Enter your password!"
        name="password"
      />
      <br></br>
      <br></br>
      <button type="submit" className="btn">Submit!</button>
      <br></br>
      <br></br>
      {data?.success && <p style={{ color: "green" }}>{data?.success}</p>}
      {data?.error && <p style={{ color: "red" }}>{data?.error}</p>}
    </form>
  );
}

export default Login;
