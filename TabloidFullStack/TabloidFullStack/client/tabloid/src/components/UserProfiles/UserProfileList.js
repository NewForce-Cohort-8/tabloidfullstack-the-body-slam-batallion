import { useEffect, useState } from "react";
import { getAllUsers } from "../../Managers/UserProfileManager";
import { Link, useNavigate } from "react-router-dom";
import { Button} from "reactstrap";

export default function UserProfileList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const getUsers = () => {
      getAllUsers().then(allUsers => setUsers(allUsers));
    };

    useEffect(() => {
      getUsers();
    }, []);
    return (
        <div>
    
        <table>
            <tr>
              <th>ID</th>
              <th>Display Name</th>
              <th></th>
              <th>User Type</th>
              <th>Full Name</th>



            </tr>
            {users.map((user) => (
              <tr key={user.id} >
                <td>{user.id}</td>
                <td>{user.displayName}</td>
                <Link to={`/users/${user.id}`}>
                <strong>Details</strong>
                </Link>
                <td>{user.userType.name}</td>
                <td>{user.fullName}</td>

               
                
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(`/users/edit/${user.id}`);
                    }}
                >
                    Edit User
                </Button>
         
              </tr>
              
            ))}
        </table>
    

        
      </div>
      );
    }