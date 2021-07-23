import React from 'react'
import useProtectedPage from "../../hooks/useProtectedPage";


const ProfilePage = () => {
    useProtectedPage();
    return (
        <div>
            <h1>ProfilePage</h1>
        </div>
    )
}

export default ProfilePage