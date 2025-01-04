const http= require('http')

const server= http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Web Server Hosting</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1><i>Server Listening....</i></h1>')
    res.write('<h1><i>My Name is Mukesh</i></h1>')
    res.write('</body>')
    res.write('</html>')
    console.log(req.url)
    res.end()

})

server.listen(3000)