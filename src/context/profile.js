import { useContext } from "react";
import { MyContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";

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
    <div className="container flex-column">
      {/* Steps Indicator */}
      <div className="steps">
        <div className="step active">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
      </div>

      <h3>مرحبا بك في موقع تسجيل الرغبات</h3>
      <br />
      <form className="profile-form">
        <h3>البيانات الشخصية</h3>

        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group">
            <label>الاسم الاول</label>
            <input
              type="text"
              value={user.FirstName}
              onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>الاسم الثاني</label>
            <input
              type="text"
              value={user.SecondName}
              onChange={(e) => setUser({ ...user, SecondName: e.target.value })}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group">
            <label>الاسم الاخير</label>
            <input
              type="text"
              value={user.LastName}
              onChange={(e) => setUser({ ...user, LastName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>النوع</label>
            <select
              value={user.Gender}
              onChange={(e) => setUser({ ...user, Gender: e.target.value })}
            >
              <option value="">النوع</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
              <option value="other">آخر</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-group">
            <label>رقم الهوية</label>
            <input
              type="number"
              value={user.id}
              onChange={(e) => setUser({ ...user, id: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>تاريخ الميلاد</label>
            <input
              type="date"
              value={user.BirthDate}
              onChange={(e) => setUser({ ...user, BirthDate: e.target.value })}
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="form-row">
          <div className="form-group">
            <label>مكان الاصدار</label>
            <input
              type="text"
              value={user.IssuePlace}
              onChange={(e) => setUser({ ...user, IssuePlace: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>رقم الهاتف</label>
            <input
              type="number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Row 5 full-width */}
        <div className="form-row">
          <div className="form-group full-width">
            <label>البريد الالكتروني</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
        </div>

        {/* Pop-up */}
        <div className="pop-up">
          <h3>اكمل البيانات</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() =>
              (document.querySelector(".pop-up").style.display = "none")
            }
          />
        </div>

        {/* Submit */}
        <Link to="/school-information" className="submit-link">
          <button type="button" onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Profile;
