import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetASingleUser, getUserIdFromStorage } from "../utils/api/user"; // Asegúrate de que esta función esté definida
import { useUI } from "../utils/providers/UiContext";
import backgroundProfile from "../assets/images/backgroundProfile.webp";
import userProfile from "../assets/vectores/userProfile.svg";

function UserProfile() {
  const { setIsLoading, setNotification } = useUI();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getMyProfile = async () => {
    setIsLoading((prevState) => ({
      ...prevState,
      actionLoader: true,
    }));
    try {
      const res = getUserIdFromStorage();
      if (res) {
        const data = await GetASingleUser(res.sub);
        setUser(data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/error")
    } finally {
      setIsLoading((prevState) => ({
        ...prevState,
        actionLoader: false,
      }));
    }
  };

  const closeSession = () => {
    localStorage.removeItem("userfakeStore");
    setUser(null);
    navigate("/");
    setNotification("Successfully logged out");
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
 <section
  className={`userProfile_section ${true ? "show" : ""}`}
>
        <div className="userProfile_background">
          <img src={backgroundProfile} alt="" />
        </div>

        <div className="user_profile_info">
          <div className="userProfile_box">
            <figure className="user_Profile_figure">
              <img src={userProfile} alt="user Prodile default" />
            </figure>
            <div>
              <p>
                {user?.name?.firstname} {user?.name?.lastname}{" "}
              </p>
            </div>
          </div>
          <div className="userProfile_buttons">
            <button onClick={closeSession}>Log out</button>
            <button onClick={() => navigate("/")}>Go to the beginning</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
