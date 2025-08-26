<<<<<<< HEAD
import { useState } from "react";
import { MyContext } from "./context";
function MyProvider({ children }) {
  const [user, setUser] = useState({
    FristeName: "",
    SecondName: "",
    LastName: "",
    Gender: "",
    id: "",
    Adress: "",
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
=======
import { useState } from "react";
import { MyContext } from "./context";
function MyProvider({ children }) {
  const [user, setUser] = useState({
    FristeName: "",
    SecondName: "",
    LastName: "",
    Gender: "",
    id: "",
    Adress: "",
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
>>>>>>> 2c610e7f7143eb05735470cec7fb25ce9099df84
