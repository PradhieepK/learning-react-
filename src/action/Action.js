import { ADD_EMPLOYEE, GET_EMPLOYEE } from "../actionType/ActionType";
import axios from "axios";

export const getEmployee = (employee) => {
  return {
    type: GET_EMPLOYEE,
    payload: employee,
  };
};

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

export const addEmployeeData =(data)=>{
    console.log(data)
    
        return axios.post("http://localhost:8080/api/lj/addEmployee",data).catch((error)=>alert(error.response.data));
    }