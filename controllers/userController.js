const jwt = require('jsonwebtoken');
const User = require("../model/userModel");
// const sharp = require('sharp');
// const cloudinary = require('../helper/imageUpload');

//Đăng ký
exports.createUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    // Gan email vao ham isThisEmailInUse de kiem tra email ton tai, hoac khong ton tai
    const isNewUser = await User.isThisEmailInUse(email)
    //Check email da ton tai chua? Neu co roi thi false
    if (!isNewUser)
        return res.json({
            success: false,
            message: 'Email này đã được sử dụng, hãy thử đăng nhập',
        });
    const user = await User({
        fullname,
        email,
        password,
    });
    await user.save();
    // res.json(user);
    res.json({ success: true, user });
};

//Đăng nhập 
exports.userSignIn = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user)
        return res.json({
            success: false,
            message: 'Không tìm thấy người dùng, với email đã cho'
        })
    const isMatch = await user.comparePassword(password)
    if (!isMatch)
        return res.json({
            success: false,
            message: 'Email / Mật khẩu không khớp!'
        });

    //Token
    const token = jwt.sign({
        userId: user._id
    },
        process.env.secret,
        {
            expiresIn: '1d',

        });

    let oldTokens = user.tokens || []

    if (oldTokens.lenght) {
        oldTokens = oldTokens.filter(t => {
            //parseInt chuyen ve số nguyên
            //chia giá trị cho 1000 sẽ ra giá trị tính bằng giây
            const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000
            if (timeDiff < 86400) {
                //Tra ve
                return t
            }
        })
    }

    await User.findByIdAndUpdate(user._id, { tokens: [...oldTokens, { token, signedAt: Date.now().toString() }] })

    const userInfo = {
        _id:user._id,
        fullname: user.fullname,
        email: user.email,
        avatar: user.avatar ? user.avatar : '',
        phone:user.phone,
        sex:user.sex,
        address:user.address,
        birthday:user.birthday
    }

    res.json({
        success: true,
        user: userInfo,
        token,
    })

}
//SignOut token
exports.signOut= async(req,res)=>{
    if(req.headers && req.headers.authorization){
       const token = req.headers.authorization.split(' ')[1]
       if(!token){
           return res.status(401).json({success: false,message:'Authorization Fail'});
            
       }
       const tokens=req.user.tokens;

       const newTokens = tokens.filter(t=>t.token!==token)

       await User.findByIdAndUpdate(req.user._id,{tokens:newTokens})
       res.json({success: true,message:'Sign out successfully!'})
    }
}











