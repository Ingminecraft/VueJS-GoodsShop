<template>
  <v-container>
    <v-row >
    <v-btn v-if="haveOrders" large block color="#292929" dark to="/checkout" style="margin-top: 5px;">
      มีสินค้า {{ numberOfOrders }} รายการรอการชำระเงิน
    </v-btn>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="24">
          <v-carousel cycle show-arrows hide-delimiters height="300">
            <v-carousel-item v-for="(item, index) in specials" :key="index">
              <v-img
                height="300"
                :src="item.image"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.0)"
              >
                <v-card-title class="white--text">{{ item.text }}</v-card-title>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" md="3" v-for="(item, index) in menus" :key="index">

        <v-card :to="'/order/'+index">
          <v-img
            height="200"
            :src="item.image"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"                        
          >
            <v-card-title class="white--text">
                {{ item.text }}&nbsp;-&nbsp;<strong>{{ item.price }} บ.</strong>
            </v-card-title>
          </v-img>

          <v-card-actions>
              <v-spacer></v-spacer>
              
              <v-icon v-if="item.love" class="mr-5" color="pink">mdi-heart</v-icon>
              <v-icon v-else class="mr-5">mdi-heart-outline</v-icon>

              <v-icon>mdi-share-variant</v-icon>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AppHome',
  computed: {
    specials() {
      return this.$store.getters.specials;
    },
    menus() {
        return this.$store.getters.menus;
    },
    haveOrders() {
      return this.$store.getters.haveOrders;
    },
    numberOfOrders() {
      return this.$store.getters.numberOfOrders;
    }
  }
};
</script>