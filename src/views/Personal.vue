<template>
  <div class="c-container">
    <div class="left-part">
      <h2 class="container-title">Tell us a bit about yourself</h2>
      <form class="user-personal-form">
        <div class="form-group personal-input">
          <label class="user-address-label" for="user_adress">Full Name</label>
          <input @keyup="changeUserFullName(userFullName)" class="user-address-input" v-model="userFullName" type="text" name="user_address" id="user_address" placeholder="Your full name">
        </div>
        <div class="personal-input-group">
          <div class="personal-input-second">
            <label for="cel_number">Phone</label>
            <input @keyup="changeUserPhoneNumber(userPhoneNumber)" type="tel" v-model="userPhoneNumber" name="cel_number" id="cell_number" placeholder="750 0090 479">
          </div>
          <div class="personal-input-second">
            <label for="user_email">Email</label>
            <input @keyup="changeUserEmail(userEmail)" type="email" v-model="userEmail" name="user_email" id="user_email" placeholder="email@domain.com">
          </div>
        </div>
        <div class="credit-range-group">
          <label class="credit-score-label mt-5" for="credit_score">Your Credit Score</label>
          <input @change="changeUserCreditScore(userCreditScore)" class="credit-score-input" v-model="userCreditScore" value="" type="range" name="credit_score" id="credit_score" min="200" max="5000">
          <!-- here will be the value -->
          <span class="credit-score-representation">{{userCreditScore}}</span>
        </div>
      </form>
      <!-- CBTN = Custom Button -->
      <div class="cbtn-group">
        <router-link class="cbtn cbtn-light" to="/property">Back</router-link>
        <router-link @click.native="personalAuthFunct()" class="cbtn cbtn-dark" :to="personalAuth">Get Saving Estimate</router-link>
      </div>
    </div>
    <div class="right-part"></div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Personal',
  data() {
    return {
      userFullName: '',
      userPhoneNumber: '',
      userEmail: '',
      userCreditScore: 675
    }
  },
  methods: {
    ...mapMutations([
      'changeUserFullName',
      'changeUserPhoneNumber',
      'changeUserEmail',
      'changeUserCreditScore',
      'calculateAll'
    ]),
    personalAuthFunct: function () {
      if (this.userFullName === '' || this.userPhoneNumber === '' || this.userEmail === '') {
        this.$swal({icon: 'error', text: 'Please, complete all required fields'})
      }
    }
  },
  computed: {
    personalAuth: function(){
      if (this.userFullName === '' || this.userPhoneNumber === '' || this.userEmail === '') {
        return '/personal'
      } else {
        return '/savings'
      }
    }
  },
  mounted(){
    this.calculateAll()
  }
}
</script>

<style>

  .personal-input {
    display: flex;
    flex-direction: column;
  }
  .personal-input-second {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
  }
  .personal-input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .credit-range-group {
    display: flex;
    flex-direction: column;
  }

  .credit-range-group span {
    align-self: center;
    font-size: 1.2rem;
    font-weight: 700;
  }

</style>