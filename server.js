const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('D:/RESUME nalintorn')));

app.get('/',function(reg,res){
  res.sendFile(path.join('D:/RESUME nalintorn/home.html'));
});

app.get('/page2',function(reg,res){
    res.sendFile(path.join('D:/RESUME nalintorn/page2.html'));
  });

app.get('/page3',function(reg,res){
    res.sendFile(path.join('D:/RESUME nalintorn/page3.html'));
  });

app.get('/page4',function(reg,res){
    res.sendFile(path.join('D:/RESUME nalintorn/page4.html'));
  });

app.listen(3000, function(){
  console.log('Server listening on port 3000');
});