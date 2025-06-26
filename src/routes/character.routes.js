import { Router } from "express";
import { createCharacter, deleteCharacter, getAllCharacters, getCharacterById, updateCharacter } from "../controllers/character.controller.js";

const routerCharacter = Router();

routerCharacter.get("/characters", getAllCharacters);
routerCharacter.get("/characters/:id", getCharacterById);
routerCharacter.post("/characters", createCharacter);
routerCharacter.put("/characters/:id", updateCharacter);
routerCharacter.delete("/characters/:id", deleteCharacter);

export default routerCharacter;