import jwt from 'jsonwebtoken';


export function createAssessToken(payLoad) {
    const SECRET_KEY = "tu_clave_secreta";
    return new Promise((resolve, reject) => {
        jwt.sign(
            payLoad, 
            SECRET_KEY, 
            { expiresIn: '1h' }, 
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('No se pudo generar el token');
                }
                resolve(token);
        });
    });
}