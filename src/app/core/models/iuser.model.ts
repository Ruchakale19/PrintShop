export interface User{     
    User_Id : Number;
    User_Name : String;
    User_Pass : String;
    Name : String;
    User_Email : String;    
    User_Mobile : Number;
    Role_ID : Number; 
    CreatedBy : String;   
    CreatedDate : String;
    modifyBy : String;
    modifyDate : String; 

}

export interface IUserResponce{    
    message:String; 
    status :Number;
    data : User[];
}

export interface UserRole{     
   
    RoleID:Number; 
    RoleName:string; 
}

export interface IUserRoleResponce{    
    Msg:String; 
    ServiceResponse :number;
    Data : UserRole[];
}