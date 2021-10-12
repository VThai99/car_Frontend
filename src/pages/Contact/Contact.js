import { useEffect, useState } from "react";
import Main from "../../components/organisms/Main";
import "./Contact.scss";
const Contact = () => {
  const [test, setTest] = useState(false);
  const handelChange = () => {
    setTest(!test)
  }
  useEffect(() => {

    console.log(test)
  }, [test]);
  return (
    <Main>
      <div className="container contact">
        <div className="wraper">
          <div className="item1"></div>
          <div className="item2"></div>
          <div className="item3"></div>
          <div className="item4"></div>
          <div className="item5"></div>
          <div className="item6"></div>
          <div className="item7"></div>
          <div className="item8"></div>
        </div>
      </div>
      <button onClick={handelChange}>Test</button>
      <h1 style={{color: !test ? "red" : "blue"}}>Test</h1>
    </Main>
  );
};
export default Contact;
