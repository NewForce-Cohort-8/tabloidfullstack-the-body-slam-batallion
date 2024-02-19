import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardImg } from "reactstrap";
import { getUserById } from "../../Managers/UserProfileManager";





export const UserDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    

    
  
    useEffect(() => {
      getUserById(id).then(setUser);
    }, []);
  


    

return (
<Card className="User-Card">
     
      
      <CardBody>
        <p>
      <p className="display-name"> Display Name: <strong>{user.displayName}</strong> </p>
      <p className="user-type"> User Type:  {user.userType?.name} </p>
      <p className="date-created">Created on: {user.createDateTime} </p>
      <p className="full-name"> Full Name:    {user.fullName}</p>
      <p className="text-left px-2">Email: {user.email} </p>
       <CardImg top src={user.imageLocation} alt="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=2048x2048&w=is&k=20&c=ghuWTYunO5oRNKtdm6ot58tlfw7oB1WV_o8NzHSjZKc=" />
       
        </p>
      </CardBody>
    </Card>  
);
};