 export const checkvalidate =(email,password)=>{
    const isemailid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isemailid) return "Email is not valid";
    if(!ispassword) return "password is not valid";
    return "null";
}