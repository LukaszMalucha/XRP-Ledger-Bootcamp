<template>
    <div class="dashboard">
        <div class="dashboard-nav">
          <SideBarComponent/>
        </div>
        <div class="dashboard-cards">
            <div class="card card-description">

              <div class="row plain-element">
                <div class=" col col-12 col-sm-12 col-md-6 col-lg-3 plain-element">
                  <div class="row plain-element text-start">
                    <div class="input-field col col-sm-9 col-form">

                    </div>
                    <p v-if="getAccountInfo">
                        {{ getAccountInfo }}

                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import SideBarComponent from "@/components/navigation/SideBarComponent.vue";


export default {
  name: 'HomeView',
  components: {
    SideBarComponent
  },
  methods: {
    ...mapActions( ["performDisplayLastLedgerIndex", "performGenerateAccount"]),
    generateAccounts() {
        this.performGenerateAccount()
    },

  },
  computed: {
    ...mapGetters( ["getLedgerInfo","getAccountInfo"]),
  },
  watch: {

  },
  created() {
    document.title = "XRP Ledger";
    this.performDisplayLastLedgerIndex();
    window.scrollTo(0,0);
  }
};

</script>