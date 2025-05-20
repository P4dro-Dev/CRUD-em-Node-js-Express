app.post('/task', (req, res) => {
  const { titulo } = req.body;
  const nova = { id: tarefas.length + 1, titulo };
  tarefas.push(nova);
  res.status(201).json(nova);
});