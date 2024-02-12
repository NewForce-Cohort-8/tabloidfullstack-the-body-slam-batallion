import { useEffect, useState } from "react";
import { getAllUsers } from "../../Managers/UserProfileManager";
import { useNavigate } from "react-router-dom";
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Display Name</th>
              <th>Full Name</th>


            </tr>
            {users.map((user) => (
              <tr key={user.id} >
                <td>{user.id}</td>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.DisplayName}</td>
                <td>{user.FullName}</td>
                
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(`/user/edit/${user.id}`);
                    }}
                >
                    Edit Tag
                </Button>
         
              </tr>
              
            ))}
        </table>
    

        
      </div>
      );
    }