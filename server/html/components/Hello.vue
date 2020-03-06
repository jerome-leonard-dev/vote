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
        reponse: ''
      }
    },
    created () {
        axios({
            "method": "GET",
            "url": "api/session"
        }).then(response => {
            if( response.status == 200){
              reponse = response.data
              console.log(response);
            } else {
              console.log(response)
            }
        }).catch(response=>{
          console.log('catch')
          console.log(response)
        }).then(()=>{
          console.log('finally')
        })
    }
  }
</script>
