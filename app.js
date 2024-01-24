const express = require('express');
const app = express();
const path = require('node:path');
/**/
const { url } = require('node:inspector');


app.get( '/', ( req, res ) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    res.sendFile(pathHome);
} 
)   
app.get( '/contact', ( req, res ) =>{
    const pathContact = path.join(__dirname, 'views/contact.html')
    res.sendFile(pathContact );
})          
 
app.get( '/about-us', ( req, res ) =>{
    res.sendFile( path.join(__dirname, 'views/about.html'))
    } 
    )  

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server up on port: http://localhost:${PORT}`))
