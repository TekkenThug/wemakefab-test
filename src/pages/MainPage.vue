<template>
    <main class="main-page">
        <div class="container">
            <TheFilter
                v-model="filter"
                class="main-page__filter"
            />

            <GridLayout>
                <template #present>
                    <div class="main-page__count">
                        Bestsellers:
                    </div>
                </template>
            </GridLayout>
        </div>
    </main>
</template>

<script>
import TheFilter from "@/components/filter/TheFilter";
import GridLayout from "@/components/grid/GridLayout";

export default {
    name: "MainPage",

    components: {
        TheFilter,
        GridLayout
    },
}
</script>

<style>
.main-page {
    padding-top: 80px;
}

.main-page__filter {
    margin-bottom: 120px;
}

.main-page__count {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
}
</style>
