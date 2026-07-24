import ReportRepository from "../repositories/ReportRepository";


class ReportService {


    async dashboard(){

        return ReportRepository.dashboard();

    }


}


export default new ReportService();