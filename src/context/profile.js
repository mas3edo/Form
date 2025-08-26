import { useContext } from "react";
import { MyContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "@fortawesome/free-solid-svg-icons";
import "./profile.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Profile() {
  const { user, setUser } = useContext(MyContext);
  function handleSubmit(e) {
    if (
      user.FirstName === "" ||
      user.SecondName === "" ||
      user.LastName === "" ||
      user.Gender === "" ||
      user.id === "" ||
      user.BirthDate === "" ||
      user.phone === "" ||
      user.email === ""
    ) {
      e.preventDefault();
      document.querySelector(".pop-up").style.display = "block";
    }
  }

  return (
    <div className="container">
      <form>
        <h3>مرحبا بك في موقع تسجيل الرغبات</h3>
        <label htmlFor="">الاسم الاول</label>
        <input
          type="text"
          value={user.FirstName}
          onChange={(e) => setUser({ ...user, FristeName: e.target.value })}
        />
        <label htmlFor="">الاسم الثاني</label>
        <input
          type="text"
          value={user.SecondName}
          onChange={(e) => setUser({ ...user, SecondName: e.target.value })}
        />
        <label htmlFor="">الاسم الاخير</label>
        <input
          type="text"
          value={user.LastName}
          onChange={(e) => setUser({ ...user, LastName: e.target.value })}
        />
        <label htmlFor="">النوع</label>
        <select
          value={user.Gender}
          onChange={(e) => setUser({ ...user, Gender: e.target.value })}
        >
          <option value="">النوع</option>
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
          <option value="other">آخر</option>
        </select>
        <label htmlFor="">رقم الهوية</label>
        <input
          value={user.id}
          onChange={(e) => setUser({ ...user, id: e.target.value })}
          type="number"
        />
        <label htmlFor="">تاريخ الميلاد</label>
        <input
          type="date"
          onChange={(e) => setUser({ ...user, BirthDate: e.target.value })}
        />
        <label htmlFor=""> مكان الاصدار</label>
        <input
          value={user.IssuePlace}
          onChange={(e) => setUser({ ...user, Adress: e.target.value })}
          type="text"
        />
        <label htmlFor="">رقم الهاتف</label>
        <input
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          type="number"
        />
        <label htmlFor="">البريد الالكتروني</label>
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
        />
        <div style={{ display: "none" }} className="pop-up">
          <h3>اكمل البيانات</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() =>
              (document.querySelector(".pop-up").style.display = "none")
            }
          />
        </div>
        <Link to="/school-information">
          <button onClick={handleSubmit}>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default Profile;
