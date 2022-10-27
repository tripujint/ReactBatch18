import { GET_EMP, ADD_EMP } from "../Constant/emp_constant";

const listOfEmployee = [
    {empId: 1, fullname: 'Tri', salary: 4500},
    {empId: 2, fullname: 'Puji', salary: 3500},
    {empId: 3, fullname: 'Tyas', salary: 5500}
]

const INIT_STATE = {
    employee: [...listOfEmployee],
    totalSalary : listOfEmployee.reduce((sum,el)=> sum + parseInt(el.salary),0)
}

const empReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_EMP:
            return {...state}
        case ADD_EMP:
            return applyAddEmp(state,action)
        default:
            return state
    }
}

const applyAddEmp = (state,action) => {
    const {payload} = action
    return {
        ...state,
        employee:[...state.employee,payload],
        totalSalary: state.employee.reduce((sum,el)=> sum + parseInt(el.salary),0)
    }
}

export default empReducer