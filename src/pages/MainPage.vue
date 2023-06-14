<template>
    <main class="main-page">
        <div class="container">
            <TheFilter
                class="main-page__filter"
                @apply="getProduct"
            />

            <transition name="fade" mode="out-in">
                <GridLayout v-if="products && products.length">
                    <template #present>
                        <div class="main-page__count">
                            Bestsellers:
                        </div>
                    </template>

                    <template #big>
                        <ProductCard
                            v-if="bigCardProduct"
                            v-bind="bigCardProduct"
                        />
                    </template>

                    <ProductCard
                        v-for="item in products"
                        :key="item.id"
                        v-bind="item"
                    />
                </GridLayout>

                <h2 v-else>
                    No results
                </h2>
            </transition>
        </div>
    </main>
</template>

<script>
import TheFilter from "@/components/filter/TheFilter";
import GridLayout from "@/components/grid/GridLayout";
import ProductCard from "@/components/product-card/ProductCard";

export default {
    name: "MainPage",

    components: {
        TheFilter,
        GridLayout,
        ProductCard
    },

    data() {
        return {
            products: [],
        }
    },

    computed: {
        bigCardProduct() {
            return this.products.find(item => item.bigCard)
        }
    },

    methods: {
        async getProduct(filterValues = {}) {
            try {
                this.products = await this.$store.dispatch('getProducts', filterValues);
            } catch (e) {
                console.log(e)
            }
        },
    }
}
</script>

<style>
.main-page {
    padding: 80px 0 120px;
}

.main-page__filter {
    margin-bottom: 120px;
}

.main-page__count {
    text-transform: uppercase;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
}
</style>
