import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardImg } from "reactstrap";
import { getUserById } from "../../Managers/UserProfileManager";





export const UserDetails = () => {
    const [user, setUser] = useState();
    const { id } = useParams();

    

    
  
    useEffect(() => {
      getUserById(id).then(setUser);
    }, []);
  


    

return (
<Card className="User-Card">
      <p className="text-left px-2">Email: {user.userProfile.email} </p>
      <p className="Full-Name">Created on: {user.userProfile.createDateTime} </p>
      <p>{user.userProfile.createDateTime} </p>
      {user.userProfile.UserType.name}
      <CardImg top src={user.userProfile.imageLocation} alt="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=2048x2048&w=is&k=20&c=ghuWTYunO5oRNKtdm6ot58tlfw7oB1WV_o8NzHSjZKc=" />
      Avatar
      <CardBody>
        <p>
      
          <strong>{user.userProfile.fullName}</strong>
         
        </p>
        <strong>{user.userProfile.displayName}</strong>
       
      </CardBody>
    </Card>  
);
};