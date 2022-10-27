import { createSlice } from "@reduxjs/toolkit";

const listOfEmployee = [
    {empId: 1, fullname: 'Tri', salary: 4500},
    {empId: 2, fullname: 'Puji', salary: 3500},
    {empId: 3, fullname: 'Iyas', salary: 5500}
]

export const empSlice = createSlice({
    name: 'cart',
    initialState:{
        employee : [...listOfEmployee],
        totalSalary : listOfEmployee.reduce((sum,el)=> sum + parseInt(el.salary),0)
    },
    reducers : {
        doGetEmps : state => {
            return state
        },
        doAddEmps: (state, action) =>{
            const {payload} = action
            return {
                ...state,
                employee : [...state.employee,payload],
                totalSalary : listOfEmployee.reduce((sum,el)=> sum + parseInt(el.salary),0)
            }
        }
    }
})

export const {doAddEmps,doGetEmps} = empSlice.actions
export default empSlice.reducer