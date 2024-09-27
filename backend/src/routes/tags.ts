import express,{Router} from 'express';

export const router= Router();
router.get("/tags", function (req:any, res:any) {
    res.send("tags home page");
  });
  
  router.post("/tags", function (req:any, res:any) {
    res.send("create a new tag");
  });
  
  router.put("/tags/:id", function (req:any, res:any) {
    res.send("update tag id: " + req.params.id);
  });
  
  router.delete("/tags/:id", function (req:any, res:any) {
    res.send("delete tag id: " + req.params.id);
  });
  
  module.exports = router;