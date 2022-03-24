import React, {useState} from 'react'


 function Admin() {
    const adminUser = {
        email: "admin@admin.com",
        password:"admin123"
      }

      const [user, setUser] = useState({name:"", email:""})
      const [error, setError] = useState("");

      const Login = details => {
          console.log(details);
      }

      const Logout = details => {
        console.log("Logout");
      }
    return (
        <div>
            
        </div>
    )
}

export default Admin;