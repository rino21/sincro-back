const Auth = require("../models/auth.js")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const loginMembre = async (req, res)=>{
    try{
        const [rows] = await Auth.getEmailMembre(req.body.email);
        if(rows.length == 0){
            return res.status(401).json({message : "Votre email ou mot de passe est incorrecte." })
        }

        const match = bcrypt.compareSync(req.body.pwd,rows[0].pwd)
        if(match){
            const accessToken = generateAccessToken(rows[0])
            const refreshToken = generateRefreshToken(rows[0])
            res.json({accessToken, refreshToken, membre: rows[0], stat: true})
            return
        }else{
            res.status(401).send('Mot de passe incorrecte !')
            return
        }
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}


 const refreshToken = (req,res)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token)
    {
        return res.sendStatus(401)
    }
    jwt.verify(token,process.env.REFRESH_TOKEN_SECRET, (err,user)=>{
        if(err) {
            return res.sendStatus(401)
        }    
        delete user.iat
        delete user.exp
        
        const refreshToken = generateAccessToken(user)
        res.json({accessToken: refreshToken})
    }) 
 }


const generateAccessToken = (user) => {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn: '60m'})
}

const generateRefreshToken = (user) => {
    return jwt.sign(user,process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1y'})
}

const tokenAuthentification = (req,res,next) => {
    var authHeader = req.headers['authorization']
    var token = authHeader && authHeader.split(' ')[1]
    if(!token)
    {
        return res.sendStatus(401)
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) {
            return res.sendStatus(401)
        } 
        req.user = user
        next()
    })
}

const generatePassword = (pwd) => {return bcrypt.hash(pwd, 8)} 

module.exports = { tokenAuthentification, refreshToken, loginMembre, generatePassword };
