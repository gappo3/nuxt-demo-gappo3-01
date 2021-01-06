<template>
  <div>
    <b-table striped hover :items="users"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let { data } = await this.$axios.get("/members");
      console.log(data.data);
      if (!data.error) {
        this.users = data.data;
      } else {
        alert("ผิดพลาด " + data.message);
      }
    },
  },
};
</script>