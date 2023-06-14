<template>
    <div class="product-card">
        <div class="product-card__image-wrapper">
            <img
                class="product-card__image"
                :src="image"
                alt="Product"
            >
        </div>

        <div class="product-card__content">
            <h4 class="product-card__content-title">
                {{ name }}
            </h4>

            <strong v-if="price" class="product-card__content-price">
                ${{ price }}
            </strong>
        </div>

        <ProductCardButton />
    </div>
</template>

<script>
import ProductCardButton from "@/components/product-card/ProductCardButton";

export default {
    name: 'ProductCard',

    components: {
        ProductCardButton
    },

    props: {
        image: {
            type: String,
            default: ''
        },

        name: {
            type: String,
            default: ''
        },

        price: {
            type: Number,
            default: 0,
        }
    }
}
</script>

<style>
.product-card {}

.product-card__image-wrapper {
    height: 400px;
}

.product-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.product-card__content {
    margin: 15px 0;
}

.product-card__content-title {
    margin-bottom: 5px;
}

.product-card__content-price {
    font-weight: 600;
}
</style>
