import { useContext } from "react";
import { MyContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";

function Desires() {
  function desiers() {
    if (
      user.FirstDesire === user.SecondDesire ||
      user.FirstDesire === user.ThirdDesire ||
      user.SecondDesire === user.ThirdDesire
    ) {
      document.querySelector(".pop-up").style.display = "block";
    }
  }

  const { user, setUser } = useContext(MyContext);

  return (
    <div className="container flex-column">
      {/* خطوات التنقل */}
      <div className="steps">
        <div className="step">1</div>
        <div className="step">2</div>
        <div className="step active">3</div>
      </div>

      <form className="school-form">
        <h3>الرغبات</h3>
        {/* Row 5: الرغبات */}
        <div className="form-row">
          <div className="form-group">
            <label>الرغبة الاولى</label>
            <select
              onChange={(e) =>
                setUser({ ...user, FirstDesire: e.target.value })
              }
            >
              <option value="">اختر الرغبة الاولى</option>
              <option value="IT">تكنولوجيا المعلومات</option>
              <option value="Business">ادارة الاعمال</option>
              <option value="Engineering">الهندسة</option>
              <option value="Medicine">الطب</option>
              <option value="Law">القانون</option>
              <option value="Arts">العلوم الانسانية</option>
              <option value="Education">التربية</option>
              <option value="Science">العلوم</option>
              <option value="Architecture">العمارة</option>
              <option value="Pharmacy">الصيدلة</option>
              <option value="Nursing">التمريض</option>
              <option value="Dentistry">طب الاسنان</option>
            </select>
          </div>

          <div className="form-group">
            <label>الرغبة الثانية</label>
            <select
              onChange={(e) =>
                setUser({ ...user, SecondDesire: e.target.value })
              }
            >
              <option value="">اختر الرغبة الثانية</option>
              <option value="IT">تكنولوجيا المعلومات</option>
              <option value="Business">ادارة الاعمال</option>
              <option value="Engineering">الهندسة</option>
              <option value="Medicine">الطب</option>
              <option value="Law">القانون</option>
              <option value="Arts">العلوم الانسانية</option>
              <option value="Education">التربية</option>
              <option value="Science">العلوم</option>
              <option value="Architecture">العمارة</option>
              <option value="Pharmacy">الصيدلة</option>
              <option value="Nursing">التمريض</option>
              <option value="Dentistry">طب الاسنان</option>
            </select>
          </div>

          <div className="form-group">
            <label>الرغبة الثالثة</label>
            <select
              onChange={(e) =>
                setUser({ ...user, ThirdDesire: e.target.value })
              }
            >
              <option value="">اختر الرغبة الثالثة</option>
              <option value="IT">تكنولوجيا المعلومات</option>
              <option value="Business">ادارة الاعمال</option>
              <option value="Engineering">الهندسة</option>
              <option value="Medicine">الطب</option>
              <option value="Law">القانون</option>
              <option value="Arts">العلوم الانسانية</option>
              <option value="Education">التربية</option>
              <option value="Science">العلوم</option>
              <option value="Architecture">العمارة</option>
              <option value="Pharmacy">الصيدلة</option>
              <option value="Nursing">التمريض</option>
              <option value="Dentistry">طب الاسنان</option>
            </select>
          </div>
        </div>

        <div className="pop-up">
          <h3>لا يسمح بتشابه الرغبات</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() =>
              (document.querySelector(".pop-up").style.display = "none")
            }
          />
        </div>
        {/* Submit */}
        <button
          type="button"
          className="submit-btn"
          onClick={(e) => {
            desiers();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Desires;
