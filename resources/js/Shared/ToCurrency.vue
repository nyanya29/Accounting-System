<template>
    <span>
      {{ Number(money).toLocaleString(undefined, {minimumFractionDigits: 2})  }}
    </span>
  </template>
  
  <script>
  export default {
      props:[ 'money' ]
  }
  </script>