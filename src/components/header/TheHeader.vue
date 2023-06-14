<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <a class="header__logo" href="/">
                    S—Shop
                </a>

                <ul class="header__menu">
                    <li class="header__menu-item">
                        <a href="/profile">
                            Profile
                        </a>
                    </li>

                    <li class="header__menu-item">
                        {{ basketCount }}
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "TheHeader",

    computed: {
        basketCount() {
            const count = this.$store.getters.basketCount;

            if (count) {
                return `Basket(${this.$store.getters.basketCount})`
            } else {
                return 'Basket';
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
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__logo {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
 }

.header__menu {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}

.header__menu-item {
    cursor: pointer;
}

.header__menu-item:not(:last-child) {
    margin-right: 44px;
}
</style>
