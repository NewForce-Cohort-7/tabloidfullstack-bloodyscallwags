import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUser, deactivateUser } from "../../Managers/UserProfileManager"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

//If a user account has isActive = 0, it is considered deactivated/inactive
//If a user account has isActive = 1, it is considered active
export const UserProfileDeactivate = ({profile}) => {

    const [user, updateUser] = useState({
        isActive: 1, })
    const [modal, setModal] = useState(false); //controls the Modal (pop-up) visibility

    const toggle = () => setModal(!modal);
    const navigate = useNavigate()

    useEffect(() => {
        getUser(profile.id)
        .then((u) => {
            updateUser(u)
        })
    }, [ profile.id ])

    const handleSaveButtonClick = (e) => {
        e.preventDefault()

        setModal(true);
        
        };

    const handleDeactivateConfirmationButton = () => {
        const updatedUser = { ...user, isActive: 0 };
        deactivateUser(updatedUser)
        .then(() => {
            updateUser(updatedUser);
            navigate("/userProfilesList")
    });
        // Close the confirmation modal after deactivation
        setModal(false);
    }
    return (
    <>
    {user.isActive === 1 ? (
                <Button id="deactivateUserButton" 
                    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>Deactivate</Button>
    ) : (
        <>User Account is Deactivated</>
    )}
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Confirm Account Deactivation</ModalHeader>
                        <ModalBody>Are you sure you want to deactive {profile.fullName}?</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={handleDeactivateConfirmationButton}>Confirm</Button>
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </>
    );
};