function guardar(req, res){
 
    let rut = req.body.rut;
    res.status(200).send({persona:req.body});
    }

    module.exports = {
        guardar
    };