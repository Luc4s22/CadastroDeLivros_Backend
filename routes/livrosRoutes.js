const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

router.get('/', livrosController.listEntries);
router.get('/:id', livrosController.getEntryById);
router.post('/', livrosController.createEntry);
router.put('/:id', livrosController.updateEntry);
router.delete('/:id', livrosController.deleteEntry);

module.exports = router;
