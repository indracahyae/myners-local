var connection = require('../config/db');
 
function AnggotaPenggunaController() {

    this.create = function(req,res){
        connection.acquire(function(err,con){
            if (err) throw err;
              con.query(`INSERT INTO anggota_pengguna SET ?`,req.body, function(err,data){
                    con.release();
                    if(err)
                     return res.json({status:false,message:err,result:[]});
                    
                    return res.json({status:true,message:'success',result:data});
       
              });
         }); 
      }
 
  this.get = function(req,res,next) {
     connection.acquire(function(err,con){
        if (err) throw err;
          con.query(`SELECT * FROM anggota_pengguna where id_pengguna=${req.params.id}`, function(err,data){
            con.release();
            if(err)
               return res.json({status:false,message:err,result:[]});
               
            return res.json({status:true,message:'success',result:data});
   
          });
     });
  };

  this.select = function(req,res){
    connection.acquire(function(err,con){
        if (err) throw err;
          con.query(`SELECT * FROM anggota_pengguna where id=${req.params.id}`, function(err,data){
            con.release();
            if(err)
               return res.json({status:'400',message: 'Failed',result:[]});
               
            return res.json({status:'200',message:'success',result:data});
   
          });
     });
  }

  this.update = function(req,res){
    connection.acquire(function(err,con){
        if (err) throw err;
          con.query(`UPDATE anggota_pengguna SET ? WHERE id=?`,[req.body, req.params.id], function(err,data){
                con.release();
                if(err)
                return res.json({status:'400',message: 'Failed, tyr again',result:[]});
                
                return res.json({status:true,message:'success',result:data});
   
          });
     }); 
  }

  this.delete = function(req,res){
    connection.acquire(function(err,con){
        if (err) throw err;
          con.query(`DELETE FROM anggota_pengguna where id=${req.params.id}`, function(err,data){
            con.release();
            if(err)
               return res.json({status:'400',message: 'Failed',result:[]});
               
            return res.json({status:true,message:'success',result:data});
   
          });
     });
  }

}
module.exports = new AnggotaPenggunaController();