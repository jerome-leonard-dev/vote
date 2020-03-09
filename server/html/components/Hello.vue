<template>
    <div>
        <p>Hello World</p>
        <p>{{ message }}<br />{{ uuid }}</p>
    </div>
</template>

<script>
  module.exports = {
    data () {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        uuid: localStorage.getItem('uuid')
      }
    },
    mounted () {
        if( !localStorage.getItem('uuid')){
          localStorage.setItem( 'uuid', this.getUUID())
        }
    },
        methods: {
          getUUID: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            })
          }
        }
  }
</script>
