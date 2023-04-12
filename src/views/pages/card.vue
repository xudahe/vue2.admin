<template>
  <div class="v-card">
    <v-card :datalist="datalist" :columns="columns"></v-card>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      datalist: [],
      columns: {
        xxl: 6,
        xl: 4,
        lg: 4,
        md: 3,
        sm: 2,
        xs: 1
      }
    };
  },
  mounted() {
    for (let i = 0; i < 36; i++) {
      this.datalist.push(i)

    }
  },
  methods: {
  }
};
</script>

<style scoped></style>
