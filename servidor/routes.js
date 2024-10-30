const express = require('express');
const router = express.Router();
const pool = require('./db');

// CREATE - Adicionar novo produto
router.post('/', async (req, res) => {
  const { nome, descricao, preco, estoque, data } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO produto (nome, descricao, preco, estoque, data) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, descricao, preco, estoque, data]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar produto' });
  }
});

// READ - Obter todos os produtos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produto');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// READ - Obter um produto por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM produto WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// UPDATE - Atualizar um produto por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, estoque, data } = req.body;
  try {
    const result = await pool.query(
      'UPDATE produto SET nome = $1, descricao = $2, preco = $3, estoque = $4, data = $5 WHERE id = $6 RETURNING *',
      [nome, descricao, preco, estoque, data, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// DELETE - Excluir um produto por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM produto WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
});

module.exports = router;
