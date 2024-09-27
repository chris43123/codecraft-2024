import express,{Router} from 'express';

export const router= Router();

router.get("/taks", function (req:any, res:any) {
    res.send("taks home page");
  });

  router.get("/taks/:id", function (req:any, res:any) {
    res.send("tak id: " + req.params.id);
  });
  

  router.post("/taks", function (req:any, res:any) {
    res.send("create a new tag");
  });
  
  router.put("/taks/:id", function (req:any, res:any) {
    res.send("update tag id: " + req.params.id);
  });
  
  router.delete("/taks/:id", function (req:any, res:any) {
    res.send("delete tag id: " + req.params.id);
  });
  
  module.exports = router;