<template>
  <div class="c-container">
    <div class="left-part">
      <h2 class="container-title">Your potential savings!</h2>
      <div class="content">
        <div class="container blank-space">
          <!-- Put the results here -->
          <span>{{ 'Your DC System will cost: $'+ (parseInt(totalSystemCost*100)/100).toString().replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ',')}}</span>
        </div>
        <span class="saving-text">{{'$' + (parseInt(actualConsumption)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' per month'}}</span>
        <span class="saving-text">{{'$' + (parseInt((actualConsumption*12))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' per year'}}</span>
        <span class="saving-text">{{'$' + (parseInt((actualConsumption*120))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' over 10 years'}}</span>
      </div>
      <!-- CBTN = Custom Button -->
      <div class="cbtn-group">
        <router-link class="cbtn cbtn-light" to="/">Close</router-link>
        <router-link @click.native="sharedOnFacebook()" class="cbtn cbtn-dark" to="/savings">Share on Facebook</router-link>
      </div>
    </div>
    <div class="right-part">
      <h2 class="container-title">Book an appointment with us</h2>
      <div class="content">
        <div class="input-group mb-3">
          <select class="custom-select" id="range_of_time">
            <option selected>This week</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="options-list">
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
          <span @click="sendInfo()">Monday from 9am to 11am</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Savings',
  data() {
    return {
      shared: false,
    }
  },
  computed: {
    ...mapState([
      'actualConsumption',
      'dcSystemSizeInWatts',
      'numberOfPanels',
      'spaceToBeUsed',
      'totalSystemCost',
      'totalFederalTaxCredit',
      'dcSystemSizeInKiloWatts'
    ]),
  },
  methods: {
    ...mapMutations([
      'calculateAll'
    ]),
    sendInfo: function () {
      this.$swal({icon: 'success', title: 'Your contact information was sended!<br/> We\'ll call you in the time frame that you selected.'})
    },
    sharedOnFacebook: function () {
      this.shared = true
      this.$swal('Confirm your facebook post.')
    }
  },
}
</script>

<style>
  .blank-space{
    height: 18vh;
    width: 93%;
    background-color: var(--primary-dark);
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }
  .saving-text {
    font-size: xx-large;
    font-weight: bolder;
  }
  .range-of-time {
    background-color: var(--secondary-dark);
    border: none;
    color: white;
    width: 23%;
  }
  .custom-select {
    background-color: var(--primary-darker);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    max-width: 33%;
  }
  .custom-select:active,
  .custom-select:hover,
  .custom-select:focus,
  .custom-select:focus-within,
  .custom-select:visited {
    color: white;
    border: none;
    border-color: transparent;
  }
  .options-list {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    height: 60vh;
  }

  .options-list span {
    border: 1px solid white;
    margin: 0.5rem 0.5rem;
    text-align: center;
    font-size: medium;
    padding: 1rem .8rem;
    border-radius: 5px;
  }

  .options-list span:hover {
    cursor: -webkit-pointer;
    cursor: -moz-pointer;
    cursor: pointer;
    text-decoration: white underline;
    font-weight: 600;
  }

</style>