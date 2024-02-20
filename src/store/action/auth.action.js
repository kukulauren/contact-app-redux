import { api } from "../../service/api";
import { login } from "../../service/auth.service";

export const loginAction=async (dispatch,formData) => {
    try{
        dispatch({type:"process"})
    const res=await login(formData)
    if(res.data){
        dispatch({
            type:"login",
            payload:res.data
        })
    }else{
        dispatch({type:"error",payload:res.msg})
    }
    }catch(e){
        dispatch({
            type:"error",
            payload:res.msg
        })
    }
}