import pool from "../database/keys";

const authentication = {};

authentication.signUp = async (req, res) => {
    const { name, email, password, role } = req.body;
    if (role == 'professor') {
        try {
            await pool.query('INSERT INTO professor (p_name, p_email, p_password) VALUES ($1, $2, $3)', [name, email, password]);
            res.status(200).json({
                message: 'Profesor registrado exitosamente',
                professor: { name, email, password }
            })
        } catch (error) {
            if (error.constraint == 'professor_p_email_key') {
                res.status(500).json({
                    message: 'Alguien más está usando este e-mail',
                    error
                })
            } else {
                res.status(500).json({
                    message: 'Ha ocurrido un error',
                    error
                })
            }
        }
    } else {
        try {
            await pool.query('INSERT INTO student (s_name, s_email, s_password) VALUES ($1, $2, $3)', [name, email, password]);
            res.status(200).json({
                message: 'Estudiante registrado exitosamente',
                student: { name, email, password }
            })
        } catch (error) {
            if (error.constraint == 'student_s_email_key') {
                res.status(500).json({
                    message: 'Alguien más está usando este e-mail',
                    error
                })
            } else {
                res.status(500).json({
                    message: 'Ha ocurrido un error',
                    error
                })
            }
        }
    }
};

module.exports = authentication;
