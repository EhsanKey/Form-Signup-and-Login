export const Validate = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = "email required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email adderss is in valid"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "password required"
    } else if (data.password.length < 8) {
        errors.password = "password need to be 8 charachter or more"
    } else {
        delete errors.password
    }

    if (type === "Signup") {
        if (!data.name.trim()) {
            errors.name = "mame required"
        } else {
            delete errors.name
        }

        if (!data.confrimPassword) {
            errors.confrimPassword = "confrimPassword the password"
        } else if (data.password !== data.confrimPassword) {
            errors.confrimPassword = "password do not match"
        } else {
            delete errors.confrimPassword
        }
    
        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Accept our regulations"
        }
    }

    return errors
}