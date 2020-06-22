<template>
  <div class="home">
    <img alt="news update logo" src="../assets/logo.png">
    <h1>Top headlines</h1>
    <!-- {{topHeadlines}} -->
    <p v-for="(article, index) in topHeadlines.articles" :key="`article-${index}`">
      <!-- {{article.urlToImage}} -->
      <img class="max-w-90pc" :src="article.urlToImage">
    </p>
  </div>
</template>

<script>
fetch()

export default {
  name: 'Home',

  data () {
    return {
      topHeadlines: {}
    }
  },

  beforeMount () {
    this.getTopHeadlines()
  },

  methods: {
    async getTopHeadlines () {
      const res = await fetch('http://localhost:3000/news/top')
      // const res = await fetch('https://news-updates-server.herokuapp.com/news/top')
      const data = await res.json()
      this.topHeadlines = data
    }
  },

  components: {
  }
}
</script>
