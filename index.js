//import json-server
const jsonserver=require('json-server')

//create a json server app
const server=jsonserver.create()
// set up path for db.json
const router= jsonserver.router('db.json')
//returns middleware used by json servver
const middleware= jsonserver.defaults()
//set up port
const port= process.env.PORT ||4000
//use router ,middleware in server
server.use(middleware)
server.use(router)
//app listen
server.listen(port,()=>{
    console.log(`json server started at port ${port}`);
})