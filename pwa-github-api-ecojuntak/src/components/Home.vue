<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" name="username" v-model="username" /> <br />
    <button @click="getUserData">Search</button>

    <div v-if="user !== null" class="profile">
      <img v-bind:src="user.avatar_url" width="200" height="200" /> <br />
      <label>Username : {{ user.login }}</label> <br />
      <label>Profile name : {{ user.name }}</label> <br />
      <label>Profile bio : {{ user.bio }}</label>
    </div>
  </div>
</template>

<script>
import GithubService from "@/services/GithubService";

export default {
  name: "hello",
  data() {
    return {
      msg: "VueJS PWA consuming Github API",
      username: "",
      user: null
    };
  },
  methods: {
    async getUserData() {
      this.user = null;
      const result = await GithubService.searchUser({
        username: this.username
      })
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      if (this.user !== null) {
        console.log(this.user);
      }
    }
  }
};
</script>

<style scoped></style>
