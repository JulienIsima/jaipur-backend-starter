import express from "express"
import * as db from "../database"
import * as gameService from "../services/gameService"

const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", function (req, res) {
  if(!req.body.name)
    return res.status(400).send("No name");

  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })

  console.log("Game créée :", newGame.name)
})


router.get("/", function (req, res) {
  const games = db.getGames() 
  games.map((game) => ({ id: game.id, name: game.name}))
  
  res.status(200).json(games)
})

router.delete("/:gameId", function (req, res) {
  console.log("iferfgez", req)
  //res.status(200).json("suppresion")
})



export default router