<template>
<div class="profile-page">
  <h1>Profile</h1>
  <div class="box-wrapper">
    <img class="profile-img" src="../../img/profile_img.jpg" alt="no-image">
      <table>
        <tbody>
          <tr v-for="(profile, index) in profiles" :key="index">
            <th class="key">{{ profile.key }}</th>
            <td class="value">{{ profile.value }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      profiles: [
        { key: '氏名', value: '鈴木 脩平 ( Shuhei Suzuki )' },
        { key: '生年月日', value: '1995/11/21 ( 25歳 )' },
        { key: '出身地', value: '愛知県半田市' },
        { key: '最終学歴', value: '名古屋市立大学経済学部卒業' },
        { key: '趣味', value: '野球観戦、音楽観賞、ゲーム' },
        ],
    }
  }
}
</script>

<style scoped>
.profile-page{
  height: 93vh;
}

h1{
  padding-top: 80px;
  border-bottom: 2px solid skyblue;
}

.box-wrapper{
  font-size: 20px;
  margin-top: 130px;
  display: flex;
  justify-content: space-around;
}

.profile-img{
  height: 340px;
  width: 340px;
  border-radius: 50%;
}

.key{
  height: 65px;
  width: 150px;
}

.value{
  width: 300px;
  text-align: left;
}
</style>