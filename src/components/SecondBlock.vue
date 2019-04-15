<template>
  <div>
    <div class="flex_box">
    <div>Search result: Total:</div>
    <div id="button_menu_2">
      <button><img src="../../images/repost-left-icon.svg" width="16" height="16">Undo</button>
      <button><img src="../../images/clear-icon.svg" width="16" height="16">Clear</button>
    </div>
    </div>
    <ul>
      <li v-for="(block2, idx) in blocks2" :key="idx">{{block2.text}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SecondBlock',
    data () {
      return {
        blocks2: [
          {text: 'Rate'},
          {text: 'F'},
          {text: 'Source'},
          {text: 'Age'},
          {text: 'Avail'},
          {text: 'Truck'},
          {text: 'Truck-O'},
          {text: 'DH-O'},
          {text: 'F/P'},
          {text: 'Origin'},
          {text: 'Trip'},
          {text: 'Destination'},
          {text: 'DH-D'},
          {text: 'Truck-D'},
          {text: 'Lenght'},
          {text: 'Weight'},
          {text: 'Company'},
          {text: 'Phone'}
        ]
      }
    }
  }
</script>

<style scoped>
  .flex_box {
    display: flex;
  }
</style>
