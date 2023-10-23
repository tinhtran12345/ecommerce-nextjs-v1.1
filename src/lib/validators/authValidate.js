import validator from "validator";
export const validate = (email, password, username) => {
    if (!email) {
        return {
            err: true,
            email: "Missing input",
        };
    }
    if (!username) {
        return {
            err: true,
            username: "Missing input",
        };
    }
    if (!password) {
        return {
            err: true,
            password: "Missing input",
        };
    }
    if (!validator.isEmail(email)) {
        return {
            err: true,
            email: "Wrong email!",
        };
    }
    if (username.length <= 3) {
        return {
            err: true,
            username: "Username is not valid",
        };
    }
    if (
        !validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
    ) {
        return {
            err: true,
            password: "Weak passwords",
        };
    }
};
export const validateLogin = (email, password) => {
    if (!email) {
        return {
            err: true,
            email: "Missing input",
        };
    }

    if (!password) {
        return {
            err: true,
            password: "Missing input",
        };
    }
    if (!validator.isEmail(email)) {
        return {
            err: true,
            email: "Wrong email!",
        };
    }
    if (
        !validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
    ) {
        return {
            err: true,
            password: "Weak passwords",
        };
    }
};
