<template>
  <div>
    <div class="button_menu_1">
      <button><img src="../../images/play-icon.svg" width="16" height="16"></button>
      <button @click="seen = true"><img src="../../images/plus-icon.svg" width="16" height="16">New</button>
      <button @click="resetInput()"><img src="../../images/cancel-icon.svg" width="16" height="16">Delete All</button>
      <button @click="repostInput()"><img src="../../images/repost-right-icon.svg" width="16" height="16">Repost All
      </button>
      <div>
        <ul v-if="seen" id="ul_txt" class="ul_class">
          <li id="li_txt" v-for="(block1, idx) in blocks1" :key="idx">{{block1.text}}<br>
            <input name="message_txt" id="inputTxt" type="text" size="3" class="input"></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="flex_box">
        <div>Search result: Total:</div>
        <div id="button_menu_2">
          <button><img src="../../images/repost-left-icon.svg" width="16" height="16">Undo</button>
          <button><img src="../../images/clear-icon.svg" width="16" height="16">Clear</button>
        </div>
      </div>
      <ul>
        <li v-for="(block1, idx) in blocks1" :key="idx">{{block1.text}}<br>
          <div id="txt_block"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FirstBlock',
    data () {
      return {
        blocks1: [
          {text: 'Call Controll'},
          {text: 'Read'},
          {text: 'Sound / Auto Call'},
          {text: 'Truck'},
          {text: 'Origin'},
          {text: 'Destination'},
          {text: 'Pickup'},
          {text: 'DH-O'},
          {text: 'DH-D'},
          {text: 'F/P'},
          {text: 'Lenght'},
          {text: 'Weight'},
          {text: 'Trip'},
          {text: 'Alarm'},
          {text: 'Actions'}
        ],
        seen: false,
        resetInput () {
          var inputValue = document.getElementById('ul_txt').getElementsByTagName('input')
          for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i].type === 'text') {
              console.log(inputValue[i].value)
              inputValue[i].value = ''
            }
          }
        },
        repostInput () {

        }
      }
    }
  }


</script>

<style scoped>
  .input[type=text] {
    width: 100%;
  }

  .flex_box {
    display: flex;
  }

</style>
