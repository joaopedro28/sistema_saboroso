var conn = require("./db");
module.exports = {
    render(req, res, error, success){
        res.render('contact', { 
            title: 'Contato | Restaurante Saboroso!',
            background: 'images/img_bg_2.jpg',
            h1: 'Diga um oi NO CONTATO MAGRÃO',
            body: req.body,
            error,
            success
        })
    },
    save(fields){
        return new Promise((resolve, reject)=>{
            conn.query(`
                INSERT INTO tb_contacts (name, email, message) VALUE(?, ?, ?)
            `, [
                fields.name,
                fields.email,
                fields.message
            ], (err, results)=>{
                if (err) {
                    reject(err)
                } else {
                    resolve(results);
                }
            })
        })
    }
}