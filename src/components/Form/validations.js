
function validation(userData) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3,}$/;
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=])(?!.*\s).{8,}$/;

    let errors = {}
        if(!userData.email){
            errors.email = "Por favor complete este campo"
        }
        else if(userData.email.length >35){
            errors.email = "No puede superar los 35 caracteres"
        }
        else if (!regexEmail.test(userData.email)) {
            errors.email = 'Email invalido';
        }else{
            errors.email = ""
        }

        if(!userData.password){
            errors.password = 'Password is requires'
        }

        else if(userData.password.length < 8){
            errors.password = "Tiene que tener mas de 8 digitos"
        }
        else if(!userData.password.match(/\d/)){
            errors.password = "La contraseña debe de terner al menos un numero"
        }
        else if(passwordRegex.test(userData.password)){
            errors.password = 'password is invlid'
        }
        else{
            errors.password = ""
        }

        return errors;
        }

export default validation