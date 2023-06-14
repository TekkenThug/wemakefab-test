import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basket: JSON.parse(localStorage.getItem('basket')) || [],
    },

    getters: {
        basketCount(state) {
            return state.basket.length;
        }
    },

    mutations: {
        SET_BASKET(state, basket) {
            state.basket = basket
        }
    },
    
    actions: {
        /**
         * Импровизированный бэк с фильтрацией
         */
        async getProducts(context, payload) {
            let { data } = await axios.get('data.json').then(({ data }) => data);

            let filtered = [...data]

            if (payload.category) {
                filtered = filtered.filter(item => item.category === payload.category)
            }

            if (payload.sale) {
                filtered = filtered.filter(item => item.sale === payload.sale)
            }

            if (payload.search) {
                filtered = filtered.filter(item => item.name.toLowerCase().includes(payload.search.toLowerCase()))
            }

            return filtered;
        },

        hasProductInBasket(context, id) {
            return Boolean(context.state.basket.find(item => item.id === id))
        },

        setBasketToItem(context, product) {
            let basket = JSON.parse(localStorage.getItem('basket'));

            if (!basket) {
                basket = []
            }

            const item = basket.find(item => item.id === product.id)

            if (item) {
                basket = [...basket.filter(item => item.id !== product.id)];
                context.commit('SET_BASKET', basket);
                localStorage.setItem('basket', JSON.stringify(basket))

                return false;
            } else {
                basket = [
                    ...basket,
                    product,
                ]
                context.commit('SET_BASKET', basket);
                localStorage.setItem('basket', JSON.stringify(basket))

                return true;
            }
        }
    },
    modules: {}
})
