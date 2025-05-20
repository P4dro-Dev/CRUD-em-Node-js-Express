app.delete('/task/:id', (req, res) => {
  tarefas = tarefas.filter(t => t.id != req.params.id);
  res.json({ message: 'Tarefa apagada com sucesso' });
});