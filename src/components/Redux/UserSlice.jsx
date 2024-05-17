import {
    createSlice
} from "@reduxjs/toolkit";
import { GetUsers } from "../services/Api";
export const UserSlice=createSlice ({
    name:"user",
    initialState:
    {
        user:null,
        userList: []
    },
    reducers:{
        Login:(state,action)=>{
            state.user=action.payload;
        },
        Logout:(state)=>{
            state.user=null;
        },
        addUser:(state, action) => {
          const newUser = action.payload;
          const existingUserIndex = state.userList.findIndex(
            (user) => user.id === newUser.id
          );
          if (existingUserIndex === -1) {
            state.userList.push(newUser);
          } else {
            state.userList[existingUserIndex] = newUser;
          }
        },
        
    }
})
export const fetchUsers = () => async (dispatch) => {
  try {
      const response = await GetUsers();
      if (response.status === 200) {
          console.log('Fetched Users:', response.data);
          dispatch(addUser(response.data));
      }
  } catch (error) {
      console.error('Error fetching projects:', error);
  }
};
export const {Login,Logout,addUser}=UserSlice.actions;
export const selectUser=(state)=>state.user.user;
export default UserSlice.reducer;