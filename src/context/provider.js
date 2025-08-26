import { useState } from "react";
import { MyContext } from "./context";
function MyProvider({ children }) {
  const [user, setUser] = useState({
    FirstName: "",
    SecondName: "",
    LastName: "",
    Gender: "",
    id: "",
    IssuePlace: "",
    BirthDate: "",
    phone: "",
    email: "",
    Housing: "",
    Education: "",
    School: "",
    AptitudeTest: 0,
    AchievementTest: "",
    HighSchoolCertificate: "",
    AptitudeExamFacility: "",
    FirstDesire: "",
    SecondDesire: "",
    ThirdDesire: "",
  });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}
export default MyProvider;
