import { Router } from "express";
import {
    getRecetas,
    getRecetaById,
    createReceta,
    updateReceta,
    deleteReceta
} from "../controllers/recetas.controller.js"

const router = Router()

router.get("/receta", getRecetas)
router.get("/receta/:id", getRecetaById)
router.post("/receta", createReceta)
router.put("/receta/:id", updateReceta)
router.delete("/receta/:id", deleteReceta)

export default router;