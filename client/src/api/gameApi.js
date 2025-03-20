import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";
import { useContext } from "react"

const baseUrl = 'http://localhost:3030/data/games';

export default {
    async getAll() {
        const result = await request.get(baseUrl);
        const games = Object.values(result);

        return games;
    },
    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`);
    },
    
    delete(gameId) {
        return request.delete(`${baseUrl}/${gameId}`);
    },
    edit(gameId, gameData) {
        return request.put(`${baseUrl}/${gameId}`, { ...gameData, _id: gameId });
    },
}

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