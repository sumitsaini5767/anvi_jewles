

const validations = (values) => {
    let errors = {}

    if(!values.name){
        errors.name = 'Username or email address is Required' 
    }
    if(!values.password){
        errors.password = 'Password Required' 
    }
    return errors
}

export default validations

