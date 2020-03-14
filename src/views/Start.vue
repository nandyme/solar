<template>
  <div class="c-container">
    <div class="left-part">
      <h2 class="container-title">Want to know how much <br/> you could save with solar? </h2>
      <span><small style="color: red"> This is just a prototype. Please introduce 00501 or 00601 as your Zip Code</small></span>
      <form class="user-zipcode-form">
        <!-- UCEB = User Current Energy Bill -->
        <label class="user-zipcode-label" for="user_zipcode">Your Zipcode</label>
        <input class="user-zipcode-input" @keyup="changeZipCode(selectedZipCode)" v-model="selectedZipCode" type="text" name="user_zipcode" id="user_zipcode" placeholder="Please introduce 00501 or 00601">
        <label class="uceb-label" for="uce_bill">Current Energy Bill</label>
        <input class="uceb-input" @change="changeEnergyBill(currentEnergyBill)" v-model="currentEnergyBill" value="" type="range" name="uce_bill" id="uce_bill" min="0" max="2000">
        <!-- here will be the value -->
        <span class="uceb-representation">{{'$'+currentEnergyBill}}</span>
      </form>
      <!-- CBTN = Custom Button -->
      <div class="cbtn-group">
        <router-link class="cbtn cbtn-light" to="/">Cancel</router-link>
        <router-link @click.native="startAuthFunct()" class="cbtn cbtn-dark" :to="startAuth">Continue</router-link>
      </div>
    </div>
    <div class="right-part"></div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Start',
  data() {
    return {
      selectedZipCode: '',
      currentEnergyBill: 1000
    }
  },
  methods: {
    ...mapMutations([
      'changeZipCode', 'changeEnergyBill'
    ]),
    startAuthFunct: function () {
      if (this.selectedZipCode === '') {
        this.$swal({icon: 'error', text: 'Please, select a correct Zip Code'})
      }
    }
  },
  computed: {
    ...mapState([]),
    startAuth: function(){
      if (this.selectedZipCode === '') {
        return '/'
      } else {
        return '/property'
      }
    }
  },

}
</script>

<style>

  /* FORM STYLES */
  /* UCEB = User Current Energy Bill */
  .user-zipcode-form {
    display: flex;
    flex-direction: column;
  }
  .uceb-representation {
    text-align: center;
  }
  .user-zipcode-input {
    padding: 1rem .5rem;
    font-size: 1rem;
  }
  .uceb-input {
    font-size: 3rem;
  }
  .user-zipcode-input, .uceb-representation {
    margin-bottom: 3vh;
  }
  .uceb-representation {
    font-size: 1.2rem;
    font-weight: 700;
  }

</style>
