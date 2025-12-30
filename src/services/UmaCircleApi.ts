import api from "./Api";

export default class UmaCircleApi {
    public async getClubInfo(circleId: number, year: number, month: number) {
        return await api.get(`/circles?circle_id=${circleId}&year=${year}&month=${month}`);
    }
}

