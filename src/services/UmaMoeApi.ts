import api from "./Api";

export default class UmaMoeApi {
    private uri = 'https://uma.moe/api/v4';

    public async getClubInfo(circleId: number, year: number, month: number) {
        return await api.get(`${this.uri}/circles?circle_id=${circleId}&year=${year}&month=${month}`);
    }
}

