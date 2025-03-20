import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";
import { useContext, useEffect, useState } from "react"

const baseUrl = 'http://localhost:3030/data/games';

export default {
    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`);
    },
    
    delete(gameId) {
        return request.delete(`${baseUrl}/${gameId}`);
    },
    edit(gameId, gameData) {
        return request.put(`${baseUrl}/${gameId}`, { ...gameData, _id: gameId });
    },
};

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        request.get(baseUrl).then(setGames);
    }, []);

    return {
        games,
    };
};

export const useCreateGame = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const create = (gameData) => {
        return request.post(baseUrl, gameData, options);
    };

    return {
        create,
    };
};