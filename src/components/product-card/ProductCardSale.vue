<template>
    <div class="product-card-sale">
        Sale -{{ percentage }}%
    </div>
</template>

<script>
export default {
    name: "ProductCardSale",

    props: {
        percentage: {
            type: Number,
            default: 0,
        },
    },
}
</script>

<style>
.product-card-sale {
    padding: 12px 20px;
    font-weight: 500;
    color: #ffffff;
    background-color: #FF6B00;
}
</style>
