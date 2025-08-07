import { badRequest, created, noContent, ok } from "../utils/http-helper";
import * as PlayerRepository from "../repositories/players-repository";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await ok(data);
    }
    else{
        response = await noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0){
    await PlayerRepository.insertPlayer(player);

    response = created();
  }
  else {
    response = badRequest();
  }

  return response;
}


export const deletePlayerService = async (id:number) => {
  let response = null;
  const is_deleted = await PlayerRepository.deleteOnePlayer(id);

  if (is_deleted) {
    response = await ok({message: "deleted"})
  }
  else{
    response = await badRequest();
  }


  return response
}

export const updatePlayerService = async (id:number, statistics:StatisticsModel) => {
  const data = await PlayerRepository.findAndModifyPlayer(id,statistics);
    let response = null

  if (Object.keys.length === 0){
    response = await badRequest();
  }
  else{
    response = ok(data);
  }


  return response;
}