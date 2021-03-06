import RestService from "../RestService";

export const ManageService = {
  // 영업상태 조회하기
  async getStatus() {
    try {
      const url = "/v1/manage/status";
      const { data } = await RestService.get(url);
      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
