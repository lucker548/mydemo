import express,{Request,Response} from 'express'
const app = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {

   let lol='Hello fufels!1!!!   ';
  res.send(lol)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})