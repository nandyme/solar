<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
  
  /* GLOBALS */

  :root {
    --primary-light: rgb(223, 222, 222);
    --primary-dark: rgb(194, 193, 193);
    --secondary-light: grey;
    --secondary-dark: rgb(102, 101, 101);
    --secondary-darker: rgb(66, 66, 66);
    font-family: 'Lato', sans-serif;
    color: var(--secondary-darker);
    font-size: 2.5vh;
  }
  h1, h2, h3, h4, h5, h6 {
    color: var();
  }

  /* GENERALS */

  #app {
    display: flex;
    justify-content: center;
    margin-top: 14vh;
  }

  .c-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .left-part {
    background-color: var(--primary-light);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .right-part {
    background-color: var(--secondary-light);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  @media only screen and (max-width: 1041px) {
    .left-part {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .right-part {
      border-top-left-radius: 0;
      border-bottom-left-radius: 15px;
      border-top-right-radius: 0;
    }
  }
  .left-part form {
    margin: 5vh 0;
  }
  .left-part, .right-part {
    width: 85vh;
    height: 90vh;
    padding: 50px 35px;
  }
  .container-title {
    font-size: 1.7rem;
    font-weight: bolder;
    padding-bottom: 2vh;
    font-weight: 900;
    font-stretch: ultra-condensed;
  }

  .right-part .container-title {
    color: white;
  }

  
  /* BUTTONS */
  
  .cbtn {
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
  }
  .cbtn-light {
    background-color: var(--primary-dark);
    color: var(--secondary-dark);
    /* border-style: none; */
  }
  .cbtn-dark {
    background-color: var(--secondary-dark);
    color: white;
  }
  .cbtn-light:hover, .cbtn-dark:hover {
    background-color: var(--secondary-light);
    color: white;
    text-decoration: none;
  }
  .cbtn-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
