<template>

	<nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
         <router-link active-class="active" tag="li" to="/portfolio"><a>Portfolio <span class="sr-only">(current)</span></a></router-link>
         <router-link active-class="active" tag="li" to="/stocks"><a>Stocks <span class="sr-only">(current)</span></a></router-link>
         <router-link active-class="active" tag="li" to="/balance"><a>Balance <span class="sr-only">(current)</span></a></router-link>
       </ul>

       <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" @click="endDay">End Day</a>
        </li>
        <li :class="['dropdown', {'open': isOpen}]" @click="isOpen = !isOpen" >
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData">Save data</a></li>
            <li><a href="#" @click="loadData">Load data</a></li>
          </ul>
        </li>
        <li>
          <a><b>Funds: {{ funds | currency }}</b></a>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),

    endDay() {
      this.randomizeStocks()
    },

    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

      this.$http.put('data.json',data);
    },

    loadData() {
      this.fetchData()
    }
  }

}

</script>