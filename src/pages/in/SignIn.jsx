import { useContext, useState } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { appContext } from "../../context/appContext";
import { useHttp } from "../../hooks/httpHook";
import "./SignIn.css";

const SignIn = () => {
  const auth = useContext(appContext).auth;
  const { request } = useHttp();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("users/login/", "POST", { ...formData });
      auth.login(data.access);
    } catch (e) {
      console.log(e);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    loginHandler();
  };

  return (
    <div className="content">
      <form className="form" onSubmit={(e) => submit(e)}>
        <div className="form__content">
          <Input
            id="email"
            name="email"
            type="email"
            handler={changeHandler}
            value={formData.email}
          />
          <Input
            id="password"
            name="password"
            type="password"
            handler={changeHandler}
            value={formData.password}
          />
        </div>
        <Button name="Submit" type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
