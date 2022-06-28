import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Bigdream Social' })
})

router.get('/about', (req, res) => {
    res.render('about', { title: 'About us' })
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'About us' })
})

export default router