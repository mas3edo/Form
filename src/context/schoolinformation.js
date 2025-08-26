import { useContext } from "react";
import { MyContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SchoolInformation() {
  const { user, setUser } = useContext(MyContext);

  const handleKeyDown = (e) => {
    const key = e.key;
    if (
      key === "Backspace" ||
      key === "Delete" ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "Tab"
    ) {
      return;
    }

    const newValue = e.target.value + key;
    const regex = /^(\d{0,3}|\d{1,2}\.\d?)$/;

    if (!regex.test(newValue)) {
      e.preventDefault();
    }
  };

  function handleSubmit(e) {
    if (
      user.Housing === "" ||
      user.Education === "" ||
      user.School === "" ||
      user.AptitudeTest === "" ||
      user.AchievementTest === "" ||
      user.HighSchoolCertificate === "" ||
      user.AptitudeExamFacility === ""
    ) {
      e.preventDefault();
      document.querySelector(".pop-up").style.display = "block";
    }
  }

  return (
    <div className="container flex-column">
      {/* Steps Indicator */}
      <div className="steps">
        <div className="step">1</div>
        <div className="step active">2</div>
        <div className="step">3</div>
      </div>

      <form className="school-form">
        <h3>المعلومات الدراسية</h3>

        {/* Row 1: السكن والمؤهل */}
        <div className="form-row">
          <div className="form-group">
            <label>السكن</label>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, Housing: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>المؤهل الدراسي</label>
            <select
              onChange={(e) => setUser({ ...user, Education: e.target.value })}
            >
              <option value="">المؤهل الدراسي</option>
              <option value="Bac">ثانوي</option>
              <option value="Master">جامعي</option>
            </select>
          </div>
        </div>

        {/* Row 2: المدرسة/الجامعة */}
        {user.Education === "Bac" && (
          <div className="form-row">
            <div className="form-group full-width">
              <label>اسم المدرسة</label>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, School: e.target.value })}
              />
            </div>
          </div>
        )}
        {user.Education === "Master" && (
          <div className="form-row">
            <div className="form-group full-width">
              <label>اسم الجامعة</label>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, School: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* Row 3: نسب الاختبارات */}
        <div className="form-row">
          <div className="form-group">
            <label>نسبة اختبار القدرات</label>
            <input
              type="number"
              onChange={(e) =>
                setUser({ ...user, AptitudeTest: e.target.value })
              }
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="form-group">
            <label>نسبة اختبار التحصيل</label>
            <input
              type="number"
              onChange={(e) =>
                setUser({ ...user, AchievementTest: e.target.value })
              }
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {/* Row 4: ملفات */}
        <div className="form-row">
          <div className="form-group">
            <label>مرفق عقد اختبار القدرات</label>
            <input
              type="file"
              onChange={(e) =>
                setUser({ ...user, AptitudeExamFacility: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>مرفق الشهادة الثانوية</label>
            <input
              type="file"
              onChange={(e) =>
                setUser({ ...user, HighSchoolCertificate: e.target.value })
              }
            />
          </div>
        </div>

        {/* Pop-ups */}
        <div className="pop-up">
          <h3>اكمل البيانات</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() =>
              (document.querySelector(".pop-up").style.display = "none")
            }
          />
        </div>

        <Link to="/desires">
          <button
            type="button"
            className="submit-btn"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SchoolInformation;
