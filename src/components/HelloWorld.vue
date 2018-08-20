<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>取值来自于this.$store.state.count：{{ count }}</p>
    <p>取值来自于this.$store.state.name1：{{ yourName1 }}</p>
    <p>取值来自于this.$store.state.name2：{{ yourName2 }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="changeName('change1')">change1</button>
      <button @click="yourName2 = 'change2'">change2</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    yourName1 () {
      return this.$store.state.name1
    },
    yourName2: {
      get: function () {
        return this.$store.state.name2
      },
      set: function (v) {
        this.$store.state.name2 = v
      }
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    changeName (v) {
      this.$store.commit('changeName', v)
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
