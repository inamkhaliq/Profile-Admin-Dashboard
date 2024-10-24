import { createSlice } from "@reduxjs/toolkit";
const initialState={
    books:[
        {
            Book_name:"Seven Rules of Love",
            price:"none"
        }
    ]
}

const bookSlice=createSlice({
    name:"_books",
    initialState,
    reducers:{
        addBook:(state,action)=>{
            console.log("Functionality Likh Ly AddBook Slice ki")
        },
        editBook:(state,action)=>{
            console.log("Functionality Likh Ly EditBook Slice ki")
        },
        deleteBook:(state,action)=>{
            console.log("Functionality Likh Ly deleteBook Slice ki")
        }
    }
});
export const {addBook,editBook,deleteBook}=bookSlice.actions;
export default bookSlice.reducer;
