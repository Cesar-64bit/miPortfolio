import express from 'express';
import {
    paginaSobreMi, paginaPortfolio,
    paginaAprender, paginaExercises
} from '../controllers/menuController.js';

const router = express.Router();

router.get('/', paginaSobreMi);
router.get('/portfolio', paginaPortfolio);
router.get('/learn', paginaAprender);
router.get('/exercises', paginaExercises)

export default router;