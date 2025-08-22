<template>
  <div>
      <div class="row text-start">
          <a @click="generateAccounts()">
            <div class="card menu-card">
              <a class="link-quicknav"><i class="fas fa-chevron-right"></i> Generate Accounts </a>
            </div>
          </a>
      </div>
      <div class="row text-start">
          <a @click="transferXRP()">
            <div class="card menu-card">
              <a class="link-quicknav"><i class="fas fa-chevron-right"></i> Transfer XRP </a>
            </div>
          </a>
      </div>

    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'SideBarComponent',
  components: {

  },
  methods: {
      ...mapActions( ["performDisplayLastLedgerIndex", "performGenerateAccount"]),
    generateAccounts() {
        this.performGenerateAccount()
    },

  },
  computed: {

  },
  watch: {

  },
  created() {

  }
};

</script>