import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentinian",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 80,
      "Shooting": 91,
      "Passing": 92,
      "Dribbling": 95,
      "Defending": 35,
      "Physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al Nassr",
    "nationality": "Portuguese",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 85,
      "Shooting": 93,
      "Passing": 80,
      "Dribbling": 83,
      "Defending": 38,
      "Physical": 88
    }
  },
  {
    "id": 3,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "French",
    "position": "Forward",
    "statistics": {
      "Overall": 92,
      "Pace": 97,
      "Shooting": 90,
      "Passing": 81,
      "Dribbling": 93,
      "Defending": 39,
      "Physical": 78
    }
  },
  {
    "id": 4,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgian",
    "position": "Midfielder",
    "statistics": {
      "Overall": 91,
      "Pace": 74,
      "Shooting": 88,
      "Passing": 94,
      "Dribbling": 87,
      "Defending": 62,
      "Physical": 77
    }
  },
  {
    "id": 5,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norwegian",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 90,
      "Shooting": 94,
      "Passing": 66,
      "Dribbling": 80,
      "Defending": 45,
      "Physical": 92
    }
  },
  {
    "id": 6,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Dutch",
    "position": "Defender",
    "statistics": {
      "Overall": 90,
      "Pace": 81,
      "Shooting": 60,
      "Passing": 71,
      "Dribbling": 72,
      "Defending": 91,
      "Physical": 88
    }
  },
  {
    "id": 7,
    "name": "Neymar Jr.",
    "club": "Santos",
    "nationality": "Brazilian",
    "position": "Forward",
    "statistics": {
      "Overall": 89,
      "Pace": 87,
      "Shooting": 84,
      "Passing": 86,
      "Dribbling": 94,
      "Defending": 37,
      "Physical": 61
    }
  },
  {
    "id": 8,
    "name": "Luka Modrić",
    "club": "Real Madrid",
    "nationality": "Croatian",
    "position": "Midfielder",
    "statistics": {
      "Overall": 88,
      "Pace": 72,
      "Shooting": 79,
      "Passing": 90,
      "Dribbling": 91,
      "Defending": 70,
      "Physical": 66
    }
  },
  {
    "id": 9,
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "nationality": "Egyptian",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 92,
      "Shooting": 89,
      "Passing": 82,
      "Dribbling": 90,
      "Defending": 45,
      "Physical": 76
    }
  },
  {
    "id": 10,
    "name": "Alisson Becker",
    "club": "Liverpool",
    "nationality": "Brazilian",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 89,
      "Pace": 55,
      "Shooting": 25,
      "Passing": 68,
      "Dribbling": 30,
      "Defending": 45,
      "Physical": 80
    }
  },
  {
    "id": 11,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nationality": "English",
    "position": "Midfielder",
    "statistics": {
      "Overall": 89,
      "Pace": 82,
      "Shooting": 83,
      "Passing": 84,
      "Dribbling": 88,
      "Defending": 78,
      "Physical": 85
    }
  },
  {
    "id": 12,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "nationality": "Brazilian",
    "position": "Forward",
    "statistics": {
      "Overall": 89,
      "Pace": 96,
      "Shooting": 83,
      "Passing": 78,
      "Dribbling": 92,
      "Defending": 32,
      "Physical": 70
    }
  },
  {
    "id": 13,
    "name": "Rúben Dias",
    "club": "Manchester City",
    "nationality": "Portuguese",
    "position": "Defender",
    "statistics": {
      "Overall": 89,
      "Pace": 68,
      "Shooting": 39,
      "Passing": 65,
      "Dribbling": 61,
      "Defending": 90,
      "Physical": 89
    }
  },
  {
    "id": 14,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "nationality": "English",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 70,
      "Shooting": 93,
      "Passing": 85,
      "Dribbling": 82,
      "Defending": 49,
      "Physical": 84
    }
  },
  {
    "id": 15,
    "name": "Thibaut Courtois",
    "club": "Real Madrid",
    "nationality": "Belgian",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 90,
      "Pace": 52,
      "Shooting": 22,
      "Passing": 65,
      "Dribbling": 27,
      "Defending": 46,
      "Physical": 79
    }
  },
  {
    "id": 16,
    "name": "Joshua Kimmich",
    "club": "Bayern Munich",
    "nationality": "German",
    "position": "Midfielder",
    "statistics": {
      "Overall": 88,
      "Pace": 71,
      "Shooting": 70,
      "Passing": 88,
      "Dribbling": 84,
      "Defending": 80,
      "Physical": 79
    }
  },
  {
    "id": 17,
    "name": "Bruno Fernandes",
    "club": "Manchester United",
    "nationality": "Portuguese",
    "position": "Midfielder",
    "statistics": {
      "Overall": 88,
      "Pace": 75,
      "Shooting": 86,
      "Passing": 90,
      "Dribbling": 83,
      "Defending": 68,
      "Physical": 75
    }
  },
  {
    "id": 18,
    "name": "Federico Valverde",
    "club": "Real Madrid",
    "nationality": "Uruguayan",
    "position": "Midfielder",
    "statistics": {
      "Overall": 88,
      "Pace": 90,
      "Shooting": 82,
      "Passing": 83,
      "Dribbling": 85,
      "Defending": 78,
      "Physical": 86
    }
  },
  {
    "id": 19,
    "name": "Lautaro Martínez",
    "club": "Inter Milan",
    "nationality": "Argentinian",
    "position": "Forward",
    "statistics": {
      "Overall": 87,
      "Pace": 85,
      "Shooting": 86,
      "Passing": 75,
      "Dribbling": 84,
      "Defending": 50,
      "Physical": 84
    }
  },
  {
    "id": 20,
    "name": "Jamal Musiala",
    "club": "Bayern Munich",
    "nationality": "German",
    "position": "Midfielder",
    "statistics": {
      "Overall": 87,
      "Pace": 84,
      "Shooting": 79,
      "Passing": 81,
      "Dribbling": 92,
      "Defending": 55,
      "Physical": 68
    }
  }
]

export const findAllPlayers = async ():Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id);

  if (index !== -1){
    database.splice(index, 1);
    return true
  }

  return false
}

export const findAndModifyPlayer = async (id:number, statistics:StatisticsModel):Promise<PlayerModel> => {
  const playerIndex = database.findIndex(player => player.id === id);

  if (playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}