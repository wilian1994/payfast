module.exports = (app) => {
    app.get("/pagamentos", function(req, res){
        res.send('ok');
    });
}
