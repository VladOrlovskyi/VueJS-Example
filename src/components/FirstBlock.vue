<template>
  <div>
    <div class="button_menu_1">
      <button @click="autoBlock('auto_li')"><img src="../../images/play-icon.svg" width="16" height="16"></button>
      <button @click="showModalWindowOpen('block')"><img src="../../images/plus-icon.svg" width="16" height="16">New
      </button>

      <div id="filter_modal" @click="showModalWindowOpen('none')"></div>
      <div id="modal_window">
        <ul id="ul_txt" class="ul_class">
          <li id="li_txt" v-for="(block1, idx) in blocks1" :key="idx">{{block1.text}}<br>
            <input name="message_txt" id="inputTxt" type="text" size="3" class="input"></li>
        </ul>
        <button @click="resetInput()"><img src="../../images/cancel-icon.svg" width="16" height="16">Delete All</button>
        <button @click="repostInput()"><img src="../../images/repost-right-icon.svg" width="16" height="16">Repost All
        </button>
      </div>
      <div>
        <ul class="ul_repost">
          <li class="li_repost" v-for="(block3, indx) in blocks3" :key="`A-${indx}`">{{block3}}</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="flex_box">
        <div>Search result: Total:</div>
        <div id="button_menu_2">
          <button @click="undoBlock()"><img src="../../images/repost-left-icon.svg" width="16" height="16">Undo</button>
          <button @click="clearBlock()"><img src="../../images/clear-icon.svg" width="16" height="16">Clear</button>
        </div>
      </div>
      <ul id="ul_auto">
        <li v-for="(block2, idxx) in blocks2" :key="`B-${idxx}`">{{block2.text}}</li>
        <br>
        <li v-on:click="autoBlock" class="li_auto" id="auto_li" v-for="(block4, indxx) in blocks4" :key="`C-${indxx}`">{{block4.text}}</li>
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
        ],
        blocks3: [],
        blocks4: [],
        resetInput () {
          let inputValue = document.getElementById('ul_txt').getElementsByTagName('input')
          for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i].type === 'text') {
              console.log(inputValue[i].value)
              inputValue[i].value = ''
            }
          }
        },
        repostInput () {
          let inputValueRepost = document.getElementById('ul_txt').getElementsByTagName('input')
          for (let i = 0; i < inputValueRepost.length; i++) {
            if (inputValueRepost[i].type === 'text') {
              console.log(inputValueRepost[i].value)
              this.blocks3.push(inputValueRepost[i].value)
              console.log(this.blocks3[i])
            }
          }
        },

        blockAuto () {
          let blocks5 = [
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},
            {text: 'Some text'},];
          for (let i = 0; i < blocks5.length; i++) {
            console.log(blocks5[i].text)
            let ul_auto_ul = document.getElementById('ul_auto')
            let li_auto_li = document.createElement('li')
            ul_auto_ul.appendChild(li_auto_li)
              }


        },
        autoBlock () {
          setInterval(this.blockAuto, 1000)
        },

        clearBlock () {
          this.blocks4 = []

        },
        undoBlock () {
          this.blocks4.pop()
        },

        showModalWindowOpen (state) {
          document.getElementById('modal_window').style.display = state
          document.getElementById('filter_modal').style.display = state
        },

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

  #filter_modal {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    display: none;
  }

  #modal_window {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 150;
    display: none;
  }

</style>
