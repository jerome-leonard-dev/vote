<template>
    <div>
        <p>{{ message }} compagnie! </p>
        <p>{{ reponse }}</p>
    </div>
</template>

<script>
  module.exports = {
    data () {
      return {
        message: 'bonjour !',
        reponse: 'toto'
      }
    },
    mounted () {
        axios({
            "method": "GET",
            "url": "api/session"
        }).then(response => {
              this.reponse = response.data
              console.log(response);
        }).catch(response=>{
          console.log('catch')
          console.log(response)
        }).then(()=>{
          console.log('finally')
        })
    }
  }
</script>
