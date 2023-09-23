import Vue from "vue";
import Vuex from "vuex";

const state = {
    specials : [
        {
            image: "https://daiseiso.com/cdn/shop/products/O1CN01rrPaHl1R8H1SvyTVO__2206488662066.jpg?v=1665474802&width=713",
            text:""
        },
        {
            image: "https://daiseiso.com/cdn/shop/products/image_2022-10-11_155206590.png?v=1665474800&width=713",
            text:""
        },
        {
            image: "https://daiseiso.com/cdn/shop/products/image_2022-10-11_155308345.png?v=1665474801&width=713",
            text:""
        } 
    ],
    menus: [
        {
            image: "https://ae01.alicdn.com/kf/S5161bc88847249c6b498d261698fba5dv.jpg_640x640q90.jpg",
            text: "Saga",
            price: 350,
            love: false
        },
        {
            image: "https://ae01.alicdn.com/kf/S57c51f99534e4b7fa70b2f0faaf0d392f.jpg_640x640q90.jpg",
            text: "Blaze",
            price: 350,
            love: true
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TaJFDSaRmUk5OEkxHT9-50zqu2x_hDIx7BZAZ7J6PEh6q5eeIFR2RtOpDSR6pxRPEkk&usqp=CAU",
            text: "Kal'tsit",
            price: 350,
            love: false
        },
        {
            image: "https://ae01.alicdn.com/kf/S980fb9c472a64553a696398fc86d5c68q/Original-Arknights-Resource-Saga-Kal-tsit-Blaze-Mizuki-Jaye-Tequila.jpg",
            text: "Jaye",
            price: 350,
            love: false
        },
        {
            image: "https://ae01.alicdn.com/kf/S20b20ff88f3f4c089d60ecce194bcb351.jpg_640x640q90.jpg",
            text: "Misuki",
            price: 350,
            love: false
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWmOjtgSdo3XYasprH4qOZ2b6ngwlJKWHraicd4WuY7flrQnwLQUDre_X1ga70-xti4Q&usqp=CAU",
            text: "Tequila",
            price: 360,
            love: false
        }
    ],
    orders : [],
    orderInfo: null
};

const getters = {
    specials(state) {
        return state.specials;
    },
    menus(state) {
        return state.menus;
    },
    haveOrders(state) {
        return state.orders.length > 0;
    },
    numberOfOrders(state) {
        return state.orders.length;
    },
    orders(state) {
        return state.orders;
    }
};

const mutations = {
    ADD_ORDER(state, order) {
        state.orders.push(order);
    },
    DELETE_ORDER(state, index) {
        state.orders.splice(index, 1);
    },
    SUBMIT_ORDER(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
    CLEAR_ORDER(state) {
        state.orders = [];
    }
};

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;