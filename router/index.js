import express from 'express';
import { paginaSobreMi, paginaPortfolio, paginaAprender } from '../controllers/menuController.js';

const router = express.Router();

router.get('/', paginaSobreMi);
router.get('/portfolio', paginaPortfolio);
router.get('/learn', paginaAprender);

export default router;