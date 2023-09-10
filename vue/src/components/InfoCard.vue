<template type="ts">
    <v-card
      class="mx-auto my-12"
      max-width="374"
    >
  
      <img
        height="300" 
        width="380"
        src='../assets/img/maruichi/outside.jpg'
      >
  
      <v-card-item>
        <v-card-title>丸一</v-card-title>
  
      </v-card-item>
  
      <v-card-text>
        <div class="pr-4">
          <v-chip
            class="mr-2 mb-2"
            color="pink"
            label
            text-color="white"
          >
          <v-icon start icon="mdi-label"></v-icon>
          和食
          </v-chip>
          <v-chip
            class="mr-2 mb-2"
            color="#9966ff"
            label 
          >
          <v-icon start icon="mdi-label"></v-icon>
          体験
          </v-chip>
        </div>
  
        <div>
          <v-icon start color="orange" icon="mdi-map-marker"></v-icon> 
          ここら辺      
        </div>
        <div>
          <v-icon start  color="green" icon="mdi-check-bold"></v-icon>
          12:00~20:00
        </div>
        <div class="mt-3">
          <v-btn block color="#80eaff">詳細</v-btn>
        </div>
      </v-card-text>
    </v-card>

  </template>
  