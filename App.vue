<template>
  <v-app>
    <v-app-bar app color="#292929" dark>
      <v-icon class="mr-2">mdi-zip-box-outline</v-icon>
      <v-toolbar-title>PeguinShop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

         <v-list>
          <v-list-item>
            <v-list-item-title>โปรไฟล์</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="signout">
            <v-list-item-title class="red--text">ออกจากระบบ</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "App",

  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user == null) this.$router.replace("/signin").catch(()=>{});
      else this.$router.replace("/").catch(()=>{});
    });
  },

  methods: {
    signout() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  font-family: "Kanit";
}
</style>