<template>
  <div>
  </div>
</template>

<script>
  export default {
    created () {
      axios.post('/api/logout').then(()=>{
          location.reload()
      })
      if(!this.$store.state.isLoggedIn){
        this.$router.push({ name: "home"});
      }
    }
  }
</script>
<style>
</style>