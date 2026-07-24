import DashboardRepository from "../repositories/DashboardRepository";


class DashboardService{


    async getDashboard(){

        return DashboardRepository.getDashboardData();

    }


}


export default new DashboardService();