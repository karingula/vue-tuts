<template>
  <div class="container">
    <my-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></my-header>
    <my-new-quote @quoteAdded="addQuote"></my-new-quote>
    <my-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></my-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info" role="alert">
          Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import AppHeader from './components/Header.vue';
export default {
  data: function() {
    return {
      quotes: ['sample Quote'],
      maxQuotes: 4
    };
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please delete few quotes first!')
      } 
      this.quotes.push(quote)
    },
    deleteQuote(index) {
      console.log('this is index:', index)
      this.quotes.splice(index, 1)
    }
  },
  components: {
    'my-quote-grid': QuoteGrid,
    'my-new-quote': NewQuote,
    'my-header': AppHeader
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
