<template>
<div class="pr-page">
  <h1>PR</h1>
  <div class="pr" v-for="point in pr" :key="point.key">
    <h2>{{ point.key}}</h2>
    <p>{{ point.value}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'PR',
  data() {
    return {
      pr: [
        { key: "興味・関心", value: "現職(銀行)で投資商品を取り扱う中、AIやFintechなどITをテーマとする商品も多く、将来性がある分野だと感じ、IT分野に興味を持ちました。また同時に銀行業務の非効率さを感じ、IT技術で解決できないのかと思い、IT技術に触れてみようとプログラミングを学習し始めました。" },
        { key: "強み　ー　最後までやり遂げる力", value: "私が所属する店舗では法人営業が弱い点が課題でした。そんな中、新型コロナウイルス感染拡大により、コロナ対策制度融資が始まったものの、私自身法人融資の経験が浅い上に、突発的に始まった制度であったため、わからないことも多く出遅れていた状況でした。この状況を改善するためにスピード感を持ち、制度の変化にいち早く対応することを心がけました。当行審査部や市、保証協会など様々な機関から情報を早く集めたり、何度も申請書類を書き直したりして徐々に自分のものにしていき、結果、融資目標達成率150%を達成、新規顧客の取り込みにも成功し、新規法人顧客貸出金１億円も達成できました。" },
        { key: "将来のビジョン", value: "短期：プログラミングの知識経験積み上げ、開発スキル向上、業務の流れを把握し、仕事のペースをつかむ。中長期：プロジェクトの企画設計や顧客折衝、マネジメントもできるようになりたい!" },
        ],
    }
  }
}
</script>

<style scoped>
.pr-page{
  height: 93vh;
}

h1{
  padding-top: 80px;
  border-bottom: 2px solid skyblue;
}

.pr{
  margin: 40px auto;
  padding: 10px;
  box-shadow: 0px 0px 5px #333333;
  border-radius: 5px;
  width: 55vw;
}

h2{
  font-size: 20px;
  border-bottom: 1px solid skyblue;
  margin-bottom: 10px;
}
</style>