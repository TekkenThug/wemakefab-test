<template>
    <div class="header-basket-popup">
        <div class="header-basket-popup__content">
            <template v-if="basket.length">
                <div class="header-basket-popup__total">
                    <h3 class="header-basket-popup__total-title">
                        Total
                    </h3>

                    <div
                        v-if="subtotalPrice"
                        class="header-basket-popup__total-row"
                    >
                        <div>
                            Subtotal:
                        </div>

                        <div class="header-basket-popup__total-row-value">
                            ${{ subtotalPrice }}
                        </div>
                    </div>

                    <div
                        v-if="salePrice"
                        class="header-basket-popup__total-row"
                    >
                        <div>
                            Sale:
                        </div>

                        <div class="header-basket-popup__total-row-value">
                            ${{ salePrice }}
                        </div>
                    </div>

                    <div class="header-basket-popup__total-row">
                        <div>
                            Content:
                        </div>

                        <button
                            :class="[
                                'header-basket-popup__total-row-value',
                                'header-basket-popup__total-row-value--underline'
                            ]"
                            @click="cleanBasket"
                        >
                            Remove all
                        </button>
                    </div>
                </div>

                <div class="header-basket-popup__order-total">
                    <span>Order total:</span> <span>${{ orderTotal }}</span>
                </div>

                <div class="header-basket-popup__product-list">
                    <ProductCardShort
                        v-for="item in basket"
                        :key="item.id"
                        class="header-basket-popup__product-item"
                        v-bind="item"
                    />
                </div>

                <a href="/checkout" class="header-basket-popup__checkout-link">
                    <span>Checkout</span>

                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15L8 8L0.999999 1" stroke="white" stroke-width="2"/>
                    </svg>
                </a>
            </template>

            <div v-else class="header-basket-popup__empty">
                Basket is empty
            </div>
        </div>

        <div class="header-basket-popup__overlay" @click.self="$emit('close')" />
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ProductCardShort from "@/components/product-card/ProductCardShort";

export default {
    name: "HeaderBasketPopup",

    components: {
        ProductCardShort,
    },

    computed: {
        ...mapGetters([
            'subtotalPrice',
            'salePrice',
            'orderTotal',
        ]),

        ...mapState([
            'basket'
        ])
    },

    methods: {
        async cleanBasket() {
            await this.$store.dispatch('cleanBasket');
        }
    }
}
</script>

<style>
.header-basket-popup {
    position: absolute;
    top: -35px;
    right: -15px;
    min-width: 455px;
    height: max-content;
}

.header-basket-popup__overlay {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    z-index: 10;
}

.header-basket-popup__content {
    padding-top: 100px;
    position: relative;
    z-index: 11;
    background-color: #ffffff;
}

.header-basket-popup__empty {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.header-basket-popup__total,
.header-basket-popup__empty,
.header-basket-popup__order-total,
.header-basket-popup__product-list {
    border-top: 1px solid #BDBDBD;
    padding-left: 40px;
    padding-right: 15px;
}

.header-basket-popup__total-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.header-basket-popup__total {
    padding-top: 20px;
    padding-bottom: 40px;
}

.header-basket-popup__order-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
}

.header-basket-popup__product-list {
    padding-top: 40px;
    padding-bottom: 40px;
}

.header-basket-popup__product-item:not(:last-child) {
    margin-bottom: 40px;
}

.header-basket-popup__checkout-link {
    background-color: #000000;
    padding: 30px 40px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
}

.header-basket-popup__total-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-basket-popup__total-row:not(:last-of-type) {
    margin-bottom: 20px;
}

.header-basket-popup__total-row-value {
    font-weight: 500;
}

.header-basket-popup__total-row-value--underline {
    text-decoration: underline;
    cursor: pointer;
}
</style>
