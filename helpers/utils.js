const validateEmail = (email)=>{
  const emailRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}
const validPassword = (password)=> {
    const mediumPasswordRegex = /^.{8,}$/;
return mediumPasswordRegex.test(password)
}
module.exports = {validateEmail, validPassword}