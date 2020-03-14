import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Example of api based on the Zip Code
    dataByZipCode: {
      '00501': {
        state: {
          name: 'New York',
          symbol: 'NY'
        },
        city: 'HOLTSVILLE',
        price: 19.3
      },
      '00601': {
        state: {
          name: 'Puerto Rico',
          symbol: 'PR'
        },
        city: 'ADJUNTAS',
        price: 25.3
      },
    },

    // obtained data by the app forms
    finalZipCode: '',
    finalEnergyBill: 1000,
    finalUserAddress: '',
    finalShadePercentage: 0,
    finalMounted: 'roof',
    finalHomeOwner: false,
    finalPossibleEvUser: false,
    finalPowerDuringFailure: false,
    finalUserFullName: '',
    finalUserPhoneNumber: '',
    finalUserEmail: '',
    finalUserCreditScore: 675,

    // variables for the mathematic results to be showed on the Savings Page
    averageSolarCost: 3.50, // average cost in dollars per watt installed
    averageModuleSize: 325, // 325wpp (watts per panel average)
    federalTaxCreditPercentage: 0.26, // 26%

    
    actualConsumption: 0, // finalEnergyBill / dataByZipCode('finalZipCode').price * 12
    dcSystemSizeInWatts: 0, // actualConsumption / 1.4
    numberOfPanels: 0, // dcSystemSizeInWatts / averageModuleSize
    spaceToBeUsed: 0, // numberOfPanels * 18 sqft (Sq Foots)
    totalSystemCost: 0, // averageSolarCost * spaceToBeUsed
    totalFederalTaxCredit: 0, // (money back to homeowner depending on tax liability) totalSystemCost * federalTaxCreditPercentage
    dcSystemSizeInKiloWatts: 0 //dcSystemSizeInWatts / 1000
    
  },
  mutations: {
    // FOR THE START PAGE
    changeZipCode: (state, newZipCode) => {
      state.finalZipCode = newZipCode
    },
    changeEnergyBill: (state, newEnergyBill) => {
      state.finalEnergyBill = newEnergyBill
    },

    // FOR THE PROPERTY PAGE
    changeUserAddress: (state, newUserAddress) => {
      state.finalUserAddress = newUserAddress
    },
    changeShadePercentage: (state, newShadePercentage) => {
      state.finalShadePercentage = newShadePercentage
    },
    changeMounted: (state, newMounted) => {
      state.finalMounted = newMounted
    },
    changeHomeOwner: (state, newHomeOwner) => {
      state.finalHomeOwner = newHomeOwner
    },
    changePowerDuringFailure: (state, newPowerDuringFailure) => {
      state.finalPowerDuringFailure = newPowerDuringFailure
    },

    // FOR THE PERSONAL PAGE
    changeUserFullName: (state, newUserFullName) => {
      state.finalUserFullName = newUserFullName
    },
    changeUserPhoneNumber: (state, newUserPhoneNumber) => {
      state.finalUserPhoneNumber = newUserPhoneNumber
    },
    changeUserEmail: (state, newUserEmail) => {
      state.finalUserEmail = newUserEmail
    },
    changeUserCreditScore: (state, newUserCreditScore) => {
      state.finalUserCreditScore = newUserCreditScore
    },

    // FOR THE MATHS
    calculateAll: (state) => {
      state.actualConsumption = state.finalEnergyBill / state.dataByZipCode[state.finalZipCode].price * 12
      state.dcSystemSizeInWatts = state.actualConsumption / 1.4
      state.numberOfPanels = state.dcSystemSizeInWatts / state.averageModuleSize
      state.spaceToBeUsed = state.numberOfPanels * 18
      state.totalSystemCost = state.averageSolarCost * state.spaceToBeUsed
      state.totalFederalTaxCredit = state.totalSystemCost * state.federalTaxCreditPercentage
      state.dcSystemSizeInKiloWatts = state.dcSystemSizeInWatts / 1000
    },


  },
  actions: {
  },
  modules: {
  }
})
