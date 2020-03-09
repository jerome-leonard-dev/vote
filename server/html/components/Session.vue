<template>
    <div>
        <input v-model="session.title" placeholder="edit me">
    </div>
</template>

<script>
  module.exports = {
    props: {
      session
    }
  }
</script>
