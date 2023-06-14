<template>
    <div class="product-card-short">
        <div class="product-card-short__image-wrapper">
            <img
                class="product-card-short__image"
                :src="image"
                alt="Product"
            >
        </div>

        <div>
            <h3 class="product-card-short__title">
                {{ name }}
            </h3>

            <div class="product-card-short__price">
                ${{ price }}
            </div>

            <button
                class="product-card-short__remove-button"
                @click="removeProduct"
            >
                Remove
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCardShort",

    props: {
        id: {
            type: Number,
            required: true,
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
    },

    methods: {
        async removeProduct() {
            await this.$store.dispatch('setBasketToItem', {
                ...this.$props
            })
        }
    }
}
</script>

<style>
.product-card-short {
    display: flex;
    align-items: flex-start;
}

.product-card-short__image-wrapper {
    width: 100px;
    height: 100px;
    margin-right: 10px;
}

.product-card-short__image {
    width: 100%;
    height: 100%;
    display: block;
    object-position: center;
    object-fit: cover;
}

.product-card-short__title {
    color: #818181;
    margin-bottom: 5px;
}

.product-card-short__price {
    font-weight: 500;
}

.product-card-short__remove-button {
    margin-top: 38px;
    text-decoration: underline;
}
</style>
