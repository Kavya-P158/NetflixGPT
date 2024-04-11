
const validateinput = (email, password) => {


    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    if (!emailregex) return "Invalid email"
    var passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)
    if (!passwordregex) return "Invalid password"

    return null

}

export default validateinput;