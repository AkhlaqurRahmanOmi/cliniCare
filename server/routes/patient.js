import express from 'express';
import { getUser } from '../controller/patient.js';

const router = express.Router();


router.get('/',getPatient );

export default router;