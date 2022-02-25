import RestService from "../RestService";

export const ManageService = {
  // 영업상태 조회하기
  async getStatus() {
    const url = "/v1/manage/status";
    return await RestService.get(url);
  },
};
