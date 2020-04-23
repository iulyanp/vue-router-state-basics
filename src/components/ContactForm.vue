<template>
    <form>
      <input name="name" placeholder="Name" v-model="name" @change="changeName()"/>

      {{ fullName }}
    </form>
</template>

<script>
export default {
  name: 'MyContact',
  data () {
    return {
      name: '',
      fullName: ''
    }
  },
  mounted () {
    this.name = this.$store.getters.fullName
  },
  methods: {
    changeName () {
      this.$store.dispatch('changeName', { name: this.name })
      this.fullName = this.$store.getters.fullName
    }
  }
}
</script>

<style scoped>

</style>
