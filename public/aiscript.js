document.getElementById('wiki_ai').addEventListener('click',function(){
    app.get("/explore/AI/",function(req,res){
        res.sendFile(__dirname+'/public/ai.html');
        res.redirect('https://en.wikipedia.org/wiki/Artificial_intelligence');
    });
});
document.getElementById('ai_pro').addEventListener('click',function(){
    app.get("/explore/AI/pros/",function(req,res){
        res.sendFile(__dirname+'/public/ai_pros.html');
    });
});
document.getElementById('ai_con').addEventListener('click',function(){
    app.get("/explore/AI/cons/",function(req,res){
        res.sendFile(__dirname+'/public/ai_cons.html');
    });
});
document.getElementById('ai_real').addEventListener('click',function(){
    app.get("/explore/AI/real/",function(req,res){
        res.sendFile(__dirname+'/public/ai_real.html');
    });
});
