import pool from "../database/keys";

const authentication = {};

authentication.signUp = (req, res) => {
    const { name, email, password, role } = req.body;
    if (role == 'professor') {
        res.send('Profesor');
    } else if (role == 'student') {
        res.send('Estudiante');
    } else {
        res.send('Ni estudiante ni profesor');
    }
};

module.exports = authentication;
