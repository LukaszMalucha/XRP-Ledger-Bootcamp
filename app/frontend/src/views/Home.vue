<template>
    <div class="dashboard-cards">
        <div class="row row-cards">
            <div class="card card-description">

              <div class="row plain-element">
                <div class=" col col-12 col-sm-12 col-md-6 col-lg-3 plain-element">
                  <div class="row plain-element text-start">
                    <div class="input-field col col-sm-9 col-form">
                      <a href="/api/generate-account/">
                        <div class="card menu-card">
                          <h5><i class="fas fa-chevron-right"></i> Generate Account </h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    ...mapActions( ["performDisplayLastLedgerIndex"]),
  },
  computed: {
    ...mapGetters( ["getLedgerInfo"]),
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