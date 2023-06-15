<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <TheLogo />

                <ul class="header__menu">
                    <li class="header__menu-item">
                        <a href="/profile">
                            Profile
                        </a>
                    </li>

                    <li
                        :class="['header__menu-item', { 'header__menu-item--active': isOpenedBasket }]"
                        @click="toggleBasketPopup"
                    >
                        {{ basketCountCaption }}
                    </li>
                </ul>

                <transition name="fade" mode="out-in">
                    <HeaderBasketPopup
                        v-if="isOpenedBasket"
                        class="header__basket-popup"
                        @close="toggleBasketPopup"
                    />
                </transition>
            </div>
        </div>
    </header>
</template>

<script>
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import HeaderBasketPopup from "@/components/common/header/HeaderBasketPopup";
import TheLogo from "@/components/common/logo/TheLogo";

export default {
    name: "TheHeader",

    components: {
        TheLogo,
        HeaderBasketPopup,
    },

    data() {
        return {
            isOpenedBasket: false,
        };
    },

    computed: {
        basketCountCaption() {
            const count = this.$store.getters.basketCount;

            if (count) {
                return `Basket(${this.$store.getters.basketCount})`;
            } else {
                return 'Basket';
            }
        }
    },

    methods: {
        toggleBasketPopup() {
            this.isOpenedBasket = !this.isOpenedBasket;

            if (this.isOpenedBasket) {
                enablePageScroll()
            } else {
                disablePageScroll()
            }
        }
    }
}
</script>

<style>
.header {
    padding: 35px 0 36px;
    border-bottom: 1px solid #BDBDBD;
}

.header__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__menu {
    position: relative;
    z-index: 15;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}

.header__menu-item {
    cursor: pointer;
    user-select: none;
}

.header__menu-item--active {
    color: #FF6B00;
}

.header__menu-item:not(:last-child) {
    margin-right: 44px;
}

.header__basket-popup {
    z-index: 10;
}
</style>
