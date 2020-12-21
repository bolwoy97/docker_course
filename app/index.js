const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res)=>{
  //res.send('Server is working...')
   res.sendFile(__dirname + '/views/index.html')
})


app.listen(PORT, (err) => {
  if(err) console.log('Error on server start',err)
  console.log(`Listening at http://localhost:${PORT}`)
})

