const express = require('express')
const http = require('http');
const path = require('path')
const app = express()
const port = process.env.PORT || 80

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res)=>{
  //res.send('Server is working...')
   res.sendFile(__dirname + '/views/index.html')
})


/*app.listen(PORT, (err) => {
  if(err) console.log('Error on server start',err)
  console.log(`Listening at http://localhost:${PORT}`)
})*/

var server = http.createServer(app);
server.listen(port, () => {
  //console.log(`Server started on  http://localhost:${port} ...`)
})
server.on('error', (err)=>{
  console.error(err);
  process.exit(1);
});
server.on('listening', () =>{
  console.log(`http://localhost:${port}`);
});








