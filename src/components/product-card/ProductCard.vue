<template>
    <div class="product-card">
        <div class="product-card__image-wrapper">
            <img
                class="product-card__image"
                :src="image"
                alt="Product"
            >

            <ProductCardSale
                v-if="salePercent"
                :percentage="salePercent"
                class="product-card__image-sale"
            />
        </div>

        <div class="product-card__content">
            <h4 class="product-card__content-title">
                {{ name }}
            </h4>

            <div v-if="price" class="product-card__content-price">
                ${{ price }} <span v-if="oldPrice" class="product-card__content-price-old">${{ oldPrice }}</span>
            </div>
        </div>

        <ProductCardButton :is-added="isAdded" @click="processCartItem" />
    </div>
</template>

<script>
import ProductCardButton from "@/components/product-card/ProductCardButton";
import ProductCardSale from "@/components/product-card/ProductCardSale";

export default {
    name: 'ProductCard',

    components: {
        ProductCardButton,
        ProductCardSale
    },

    props: {
        id: {
            type: Number,
            required: null,
        },

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
        },

        salePercent: {
            type: Number,
            default: 0,
        },

        oldPrice: {
            type: Number,
            default: 0,
        },
    },

    data() {
        return {
            isAdded: false,
        }
    },

    async mounted() {
        this.isAdded = await this.$store.dispatch('hasProductInBasket', this.id)
    },

    methods: {
        async processCartItem() {
            this.isAdded = await this.$store.dispatch('setBasketToItem', {
                ...this.$props
            })
        }
    }
}
</script>

<style>
.product-card {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.product-card__image-wrapper {
    position: relative;
    flex-grow: 1;
}

.product-card__image-sale {
    position: absolute;
    top: 25px;
    right: 25px;
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

.product-card__content-price-old {
    position: relative;
    color: #B7B7B7;
    font-weight: 500;
    margin-left: 10px;
}

.product-card__content-price-old::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #000000;
}
</style>
