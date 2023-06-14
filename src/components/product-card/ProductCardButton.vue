<template>
    <button class="product-card-button">
        <span>{{ text }}</span>

        <transition name="fade" mode="out-in">
            <svg
                v-if="isAdded"
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1 6L6 11L15 1" stroke="black" stroke-width="1.5"/>
            </svg>

            <svg
                v-else
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M8 0.5V8.5M8 16.5V8.5M8 8.5H0H16" stroke="white" stroke-width="1.5"/>
            </svg>
        </transition>
    </button>
</template>

<script>
export default {
    name: "ProductCardButton",

    props: {
        isAdded: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        text() {
            return this.isAdded ? 'Added' : 'Add to basket';
        }
    }
}
</script>

<style>
.product-card-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    padding: 18px 22px 20px 20px;
    background-color: #2E2E2E;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
}
</style>
