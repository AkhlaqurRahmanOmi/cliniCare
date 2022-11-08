import express from 'express';
import { getPatient } from '../controller/patient.js';

const router = express.Router();


router.get('/',getPatient );

export default router;