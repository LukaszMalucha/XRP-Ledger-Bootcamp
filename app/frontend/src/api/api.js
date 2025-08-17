import { apiService } from "@/common/api.service.js";

export default {
// Get current user information
  userInfo() {
    let endpoint = "/auth/current-user/";
    return apiService(endpoint);
  },


//  XRP Ledger Logic

// Generate sample account
  generateAccount() {
    let endpoint = `/api/generate-account/`;
    return apiService(endpoint);
  },



//  Pagination
  nextPage(next) {
    let endpoint = next;
    return apiService(endpoint);
  }
}