<template>
<div class="works-page">
  <h1>Works</h1>
  <div class="work-list">
    <div v-for="work in works" :key="work.title" class="works">
      <h2>{{work.title}}</h2>
      <img class="works-image" :src="work.image"/>
      <p>{{work.language}}</p>
      <p>{{work.text}}</p>
      <a :href="work.link">{{work.link}}</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      works: [
        {
        title: "ReportApp",
        image: "img/reportapp_image.png",
        language: "Ruby on Rails",
        text: "報告書を簡単に作成、提出できるアプリです",
        link: 'https://report-app-1121.herokuapp.com/'
        },
        {
        title: "Portfolio Site",
        image: "img/portfolio_image.png",
        language: "Vue.js",
        text: "ポートフォリオサイト（このサイト）です",
        link: "https://shuhei1121.github.io/myportfolio/"
        },
        {
        title: "フリマアプリ",
        image: "img/furima_image.png",
        language: "Ruby on Rails",
        text: "フリマアプリのクローンサイトです",
        link: "https://furima-30311.herokuapp.com/"
        }
      ]
    }
  }
}
</script>

<style scoped>
.works-page{
  height: 93vh;
}

h1{
  padding-top: 80px;
  border-bottom: 2px solid skyblue;
}

.work-list{
  display: flex;
  margin: 40px;
  margin-top: 100px;
  justify-content: space-between;
}

.works{
  box-shadow: 0px 0px 5px #333333;
  border-radius: 5px;
  width: 400px;
}

.works-image{
  height: 300px;
  width: 400px;
}

</style>