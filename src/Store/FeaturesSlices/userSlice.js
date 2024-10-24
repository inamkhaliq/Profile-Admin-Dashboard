import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    users:[
        {   name:"",
            text:"hello world"
        },
    ],
    userStatus:{
        email:"",
        LogedIn:false,
    }
}
export const userSlice=createSlice({
    name:"_users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const user={
                id:nanoid(),
                firstName:"inam",
                lastName:"khaliq",
                email:"inam@gmail.com",
                password:"i",
                confirmPassword:"i"
            }
            state.users.push(user);
        },
        editUser:(state,action)=>{
            console.log("please plhy isli functionality likho")
        },
        logedInUser:(state,action)=>{
            state.userStatus.email=action.payload;
            state.userStatus.LogedIn=true;
        },
        logedOffUser:(state,action)=>{
            state.userStatus.email=null;
            state.userStatus.LogedIn=false;
        }
    }
})
export const {addUser,editUser,logedInUser,logedOffUser} =userSlice.actions;
export default userSlice.reducer;
