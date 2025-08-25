import { useContext } from "react";
import { MyContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SchoolInformation() {
  function handleSubmit(e) {
    if (
      user.Housing === "" ||
      user.Education === "" ||
      user.School === "" ||
      user.AptitudeTest === "" ||
      user.AchievementTest === "" ||
      user.HighSchoolCertificate === "" ||
      user.AptitudeExamFacility === "" ||
      user.FirstDesire === "" ||
      user.SecondDesire === "" ||
      user.ThirdDesire === ""
    ) {
      e.preventDefault();
      document.querySelector(".pop-up").style.display = "block";
    }
  }
  function desiers(params) {
    if (
      user.FirstDesire === user.SecondDesire ||
      user.FirstDesire === user.ThirdDesire ||
      user.SecondDesire === user.ThirdDesire
    ) {
      document.querySelector(".pop-up2").style.display = "block";
    }
  }
  const { user, setUser } = useContext(MyContext);
  return (
    <div className="container">
      <form action="">
        <h3>المعلومات الدراسية</h3>

        <label htmlFor="">السكن</label>
        <input
          onChange={(e) => setUser({ ...user, Housing: e.target.value })}
          type="text"
          id=""
        />
        <label htmlFor="">المؤهل الدراسي</label>
        <select
          onChange={(e) => setUser({ ...user, Education: e.target.value })}
          name=""
          id=""
        >
          <option value="">المؤهل الدراسي</option>
          <option value="Bac">ثانوي</option>
          <option value="Master">جامعي</option>
        </select>
        {user.Education === "Bac" && (
          <div>
            <label htmlFor=""> اسم المدرسة </label>
            <input
              onChange={(e) => setUser({ ...user, School: e.target.value })}
              type="text"
              id=""
            />
          </div>
        )}
        {user.Education === "Master" && (
          <div>
            <label htmlFor=""> اسم الجامعة </label>
            <input
              onChange={(e) => setUser({ ...user, School: e.target.value })}
              type="text"
              id=""
            />
          </div>
        )}
        <label htmlFor="">مجموع اختبار القدرات</label>
        <input
          onChange={(e) => setUser({ ...user, AptitudeTest: e.target.value })}
          type="number"
          id=""
        />
        <label htmlFor="">مجموع اختبار التحصيل</label>
        <input
          onChange={(e) =>
            setUser({ ...user, AchievementTest: e.target.value })
          }
          type="number"
          id=""
        />
        <label htmlFor="highSchoolFile">مرفق شهادة الثانوية</label>
        <div className="file-upload">
          <input
            type="file"
            id="highSchoolFile"
            onChange={(e) =>
              setUser({ ...user, HighSchoolCertificate: e.target.files[0] })
            }
          />
          <label htmlFor="highSchoolFile" className="file-label">
            اختر ملف
          </label>
          <span className="file-name">
            {user.HighSchoolCertificate
              ? user.HighSchoolCertificate.name
              : "لم يتم اختيار ملف"}
          </span>
        </div>

        <label htmlFor="highSchoolFile">مرفق شهادة الثانوية</label>
        <div className="file-upload">
          <input
            type="file"
            id="highSchoolFile"
            onChange={(e) =>
              setUser({ ...user, HighSchoolCertificate: e.target.files[0] })
            }
          />
          <label htmlFor="highSchoolFile" className="file-label">
            اختر ملف
          </label>
          <span className="file-name">
            {user.HighSchoolCertificate
              ? user.HighSchoolCertificate.name
              : "لم يتم اختيار ملف"}
          </span>
        </div>

        <label htmlFor="">الرغبة الاولى</label>
        <select
          onChange={(e) => setUser({ ...user, FirstDesire: e.target.value })}
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
        <label htmlFor="">الرغبة الثانية</label>
        <select
          onChange={(e) => setUser({ ...user, SecondDesire: e.target.value })}
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
        <label htmlFor="">الرغبة الثالثة</label>
        <select
          onChange={(e) => setUser({ ...user, ThirdDesire: e.target.value })}
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
        <button
          onClick={(e) => {
            handleSubmit(e);
            desiers();
          }}
        >
          Submit
        </button>
        <div style={{ display: "none" }} className="pop-up">
          <h3>اكمل البيانات</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() =>
              (document.querySelector(".pop-up").style.display = "none")
            }
          />
        </div>
        <div style={{ display: "none" }} className="pop-up2">
          <h3> لا يسمح بتشابه الرغبات</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() =>
              (document.querySelector(".pop-up2").style.display = "none")
            }
          />
        </div>
      </form>
    </div>
  );
}
export default SchoolInformation;
