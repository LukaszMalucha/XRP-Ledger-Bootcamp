const xrpl = require("xrpl");
import api from "../../api/api.js";

const state = {
    ledger_info: null,
    account_info: null
};


const getters = {
    getLedgerInfo: state => state.ledger_info,
    getAccountInfo: state => state.account_info
};


const actions = {
    async performGenerateAccount({commit}) {
        const response = await api.generateAccount();
        if (!response)  {
          commit("setFormError", "Something went wrong. Try again later")
          commit("setLoader", false);
        } else {
          commit("setAccountInfo", response.account_info);
          commit("setLoader", false);
        }
    },


    async performDisplayLastLedgerIndex({commit}) {
        const client = new xrpl.Client("wss://xrplcluster.com");

        try {
            await client.connect()

            const ledgerInfo = await client.request({
                command: "ledger",
                ledger_index: "validated",
            });

            console.log(`Hello world ${ledgerInfo.result}`);
            commit("setLedgerInfo", ledgerInfo.result.ledger_index);
            await client.disconnect();
        } catch (error) {
            console.error("Error fetching ledger info:", error);

        }

    }

};


const mutations = {
  setAccountInfo:  (state, account_info) => {
    state.account_info = account_info;
  },
  setLedgerInfo:  (state, ledger_info) => {
    state.ledger_info = ledger_info;
  },
};


export default {
  state,
  getters,
  actions,
  mutations
}