const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;


exports.signup = async (req, res) => {
    const password = await bcrypt.hash(req.body.password, saltRounds);
    const data = { ...req.body, password }
    const user = await User.create(data);
    res.json({ user });
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ error: 'Password does not match' });
    }
    const token = await jwt.sign({ user }, "fake-jwt-secret")

    res.json({ user, access_token: token });


}