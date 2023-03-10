import express from 'express';
import { insertProduct, searchProduct, generateQR, updateIpfs, fetchIpfs } from '../controllers/product.js';

const router = express.Router();

router.post('/insertProcduct', async(req, res) => {
    insertProduct(req, res);
})

router.get('/searchProcduct', async(req, res) => {
    searchProduct(req, res);
})

router.get('/generateQR', async(req, res) => {
    generateQR(req, res);
})

router.post('/updateIpfs', async(req, res) => {
    updateIpfs(req, res);
})

router.get('/fetchIpfs', async(req, res) => {
    fetchIpfs(req, res);
})

export default router;