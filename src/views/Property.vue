<template>
  <div class="c-container">
    <div class="left-part">
      <h2 class="container-title">A bit about your property</h2>
      <form class="user-property-form">
        <div class="form-group selectable">
          <label class="user-address-label" for="user_adress">Your Address</label>
          <input class="user-address-input" @keyup="changeUserAddress(userAddress)" v-model="userAddress" type="text" name="user_address" id="user_address" placeholder="Ex: 1000 Wallstreet">
        </div>
        <div class="select-group">
          <div class="selectable">
            <label for="shade_percent">Shade Percentage</label>
            <select @change="changeShadePercentage(shadePercentage)" v-model="shadePercentage" name="shade_percent" id="shade_percent">
              <option value="0">0%</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
              <option value="90">90%</option>
              <option value="100">100%</option>
            </select>
          </div>
          <div class="selectable">
            <label for="mounting">Mounting</label>
            <select @change="changeMounted(mounted)" v-model="mounted" name="mounting" id="mounting">
              <option value="roof">On your roof</option>
              <option value="platform">On a platform</option>
              <option value="garden">On your garden</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div class="form-group toggles mt-5">
          <label for="home_owner">Are you the home owner?</label>
          <toggle-button @change="changeHomeOwner(homeOwner)" id="home_owner" v-model="homeOwner" :value="false" :color="colors" :sync="true" :labels="options"/>
        </div>
        <div class="form-group toggles">
          <label for="possible_ev_user">Do you own or plan on buying an EV?</label>
          <toggle-button @change="changePossibleEvUser(possibleEvUser)" id="possible_ev_user" v-model="possibleEvUser" :value="false" :color="colors" :sync="true" :labels="options"/>
        </div>
        <div class="form-group toggles">
          <label for="power_during_failure">Do you want power during grid failure?</label>
          <toggle-button @change="changePowerDuringFailure(powerDuringFailure)" id="power_during_failure" v-model="powerDuringFailure" :value="false" :color="colors" :sync="true" :labels="options"/>
        </div>
      </form>
      <!-- CBTN = Custom Button -->
      <div class="cbtn-group">
        <router-link class="cbtn cbtn-light" to="/">Back</router-link>
        <router-link @click.native="propertyAuthFunct()" class="cbtn cbtn-dark" :to="propertyAuth">Continue</router-link>
      </div>
    </div>
    <div class="right-part"></div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Property',
  data() {
    return {
      userAddress: '',
      shadePercentage: 0,
      mounted: 'roof',
      options: {'checked': 'YES', 'unchecked': 'NO'},
      colors: {'checked': '#808080', 'unchecked': '#CCCCCC'},
      homeOwner: false,
      possibleEvUser: false,
      powerDuringFailure: false
    }
  },
  computed: {
    propertyAuth: function(){
      if (this.userAddress === '') {
        return '/property'
      } else {
        return '/personal'
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeUserAddress',
      'changeShadePercentage',
      'changeMounted',
      'changeHomeOwner',
      'changePowerDuringFailure'
    ]),
    propertyAuthFunct: function () {
      if (this.userAddress === '') {
        this.$swal({icon: 'error', text: 'Please, complete all required fields'})
      }
    }
  }
}
</script>

<style>
  .select-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .selectable {
    display: flex;
    flex-direction: column;
  }
  .toggles {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>