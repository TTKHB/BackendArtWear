const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    avatar: Buffer,
    tokens:[{type: Object}],

});

userSchema.pre('save', function (next) {
    // Mã hoá password
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 8, (err, hash) => {
            if (err)
                return next(err);
            this.password = hash;
            next();
        })
    }
})

// So sánh password
userSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error('Password is mission, can not compare!');
    try {
        const result = await bcrypt.compare(password, this.password);
        return result;

    } catch (error) {
        console.log('Error while comparing password!', error.message);

    }
}


//Toi muon email phai la duy nhat trong database(Khong duoc trung email)
userSchema.statics.isThisEmailInUse = async function (email) {
    //Check email
    if (!email) throw new Error('Invalid Email');
    try {
        //tim mot nguoi dung(Neu email da duoc su dung, da ton tai thi tra ve false)
        const user = await this.findOne({ email })
        if (user)
            return false;
        //Nguoc lai tra ve true
        return true;
    } catch (error) {
        console.log('error inside isThisEmailInUse method', error, message);
        return false;
    }
}


module.exports = mongoose.model('User', userSchema)



