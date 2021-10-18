//imports
const express =  require('express')
const app = express()

const port = process.env.PORT || 3000

//static files
app.use(express.static('public'))
app.use('/CSS',express.static(__dirname + 'public/CSS'))
app.use('/JS',express.static(__dirname + 'public/JS'))
app.use('/images',express.static(__dirname + 'public/images'))

app.get('',(req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/homepage.html',(req, res) => {
  res.sendFile(__dirname + '/views/homepage.html')
})

app.get('/homeDay.html',(req, res) => {
  res.sendFile(__dirname + '/views/homeDay.html')
})

app.get('/create.html',(req, res) => {
  res.sendFile(__dirname + '/views/create.html')
})

app.get('/createDay.html',(req, res) => {
  res.sendFile(__dirname + '/views/createDay.html')
})

app.get('/view.html',(req, res) => {
  res.sendFile(__dirname + '/views/view.html')
})

app.get('/viewDay.html',(req, res) => {
  res.sendFile(__dirname + '/views/viewDay.html')
})

//listen on port 3000
app.listen(port,() => console.info(`Listening on port ${port}`))



