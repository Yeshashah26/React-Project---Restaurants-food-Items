import { useEffect,useState } from "react";

const Profile = () => {
    const [message, setMessage] = useState("");

    useEffect(()=>{
        const fetchedMsgShow = async () => {
            const token = localStorage.getItem("token");
            console.log("Profile token: ",token)
            if(!token){
                setMessage("Please log in to view these page");
                return;
            }
            try{
                const res = await fetch("http://localhost:5000/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const data = await res.json();

                if(res.ok)
                {
                    setMessage(data.message);
                }else {
                    setMessage(data.error || "Access denied");
                }
            } catch (err) {
                    console.error("Error fetching data:", err);
                    setMessage("Something went wrong. Please try again.");
                }
            }
            fetchedMsgShow();
        }, []);
    return (
        <>
        <h1>Profile</h1>
        <h1>{message}</h1>
        </>
    )
}

export default Profile;