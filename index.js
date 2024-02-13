const express=require("express");
const app=express();
const port=5000;
app.use(express.json());
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});

let cities=['Tiruppur', 'Coimbatore', 'Erode','Salem'];
app.get('/api/cities',(req,res)=>{
  res.json(cities);
});
app.post('/api/cities',(req,res)=>{
  const newCity=req.body;
  cities.push(newCity.name);
  res.status(201).json(newCity);
});
app.put('/api/cities/:id', (req, res) => {
  const cityId = parseInt(req.params.id);
  const updatedCity = req.body.name; 
  cities[cityId] = updatedCity;
  res.json(updatedCity);
});
app.delete('/api/cities/:id', (req, res) => {
  const cityId = parseInt(req.params.id);
  cities.splice(cityId, 1);
  res.status(204).send();
});

