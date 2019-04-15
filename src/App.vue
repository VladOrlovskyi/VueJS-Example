<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <p>Post Trucks</p>
    <div id="table_1">


      <div id="block_1">
        <app-first-block></app-first-block>
      </div>

    </div>
    <div id="table_2">

      <div id="block_2">
        <!--<app-second-block></app-second-block>-->
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body {
    width: 100%;
    background: skyblue;
  }

  ul {
    width: 100%;
    list-style-type: none;
  }

  li {
    display: inline-block;
    border: 1px white solid;
    color: white;
    background: black;
    padding: 10px;


  }

  .w-50 {
    width: 50%;
  }


  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
