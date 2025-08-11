const xrpl = require("xrpl");

const state = {
    ledger_info: null,
};


const getters = {
    getLedgerInfo: state => state.ledger_info
};


const actions = {
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