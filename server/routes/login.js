'use strict'

const jwt = require('jsonwebtoken')
const secretKey = require('../config/secretKey')

module.exports = app => {
    const usersCollection = app.config.firebaseConfig.collection('users');

    app.post('/login', async ( req, res) => {
        const fireDocs  = await usersCollection.get();
        let user = null;

        const users = fireDocs.docs.find( doc => {
            let actualUser = extractUser(doc);
            
            if(actualUser.email === req.body.email && actualUser.password === req.body.password){
                user = extractUser(doc);
                return true;
            }
        });

        if(user){
            const id = user.id;

            const token = jwt.sign( { id }, secretKey);
            return res.send({user : { name : user.name, email : user.email}, auth : true, token: token})
        }
        else return res.status(500).send('Invalid');
    });

}

const extractUser = doc => {
    let user = doc.data();

    return {
        id: doc.id,
        name: user.name,
        email :user.email,
        password : user.password
    }
}