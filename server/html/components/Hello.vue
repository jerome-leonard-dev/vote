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
        fetch("api/session", {
        "method": "GET"
        })
        .then(response => response.json())
        .then(response => {
            reponse = response
            console.log(reponse)
        });
    }
  }
</script>
