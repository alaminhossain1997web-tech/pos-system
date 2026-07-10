const bcrypt = require("bcrypt");

// password hashing before saving the user to the database
  const hashPassword = async function () {
    try {
        if (!this.isModified("password")) {
            return ;
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        console.log(error);
        ;
    }
};
// compare Password
const comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = {hashPassword, comparePassword}