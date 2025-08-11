<template>
    <div class="dashboard-cards">
        <p v-if="getLedgerInfo"> {{ getLedgerInfo }} </p>
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