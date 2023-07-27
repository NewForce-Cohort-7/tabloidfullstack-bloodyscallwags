import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, activateUser } from "../../Managers/UserProfileManager";
import { Button } from "reactstrap";

//If a user account has isActive = 0, it is considered deactivated/inactive
//If a user account has isActive = 1, it is considered active
export const ReactivateUserProfile = ({ profile }) => {
  const [user, updateUser] = useState({
    isActive: 1,
  });

  const navigate = useNavigate();

  useEffect(() => {
    getUser(profile.id).then((u) => {
      updateUser(u);
    });
  }, [profile.id]);

  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    const updatedUser = { ...user, isActive: 1 };
    activateUser(updatedUser).then(() => {
      updateUser(updatedUser);
      navigate("/deactivatedusers");
    });
  };

  return (
    <>
      {user.isActive === 0 ? (
        <Button
          id="activateUserButton"
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        >
          Reactivate
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};
