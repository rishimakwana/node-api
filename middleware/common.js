import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = (password) => {
    try {
        const hashedPassword = bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password");
    }
};

export const comparePasswords = (enteredPassword, hashedPassword) => {
    try {
        const match = bcrypt.compare(enteredPassword, hashedPassword);
        return match;
    } catch (error) {
        console.error("Error comparing passwords");
    }
};


