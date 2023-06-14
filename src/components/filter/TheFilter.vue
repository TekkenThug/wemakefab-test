<template>
    <div class="filter">
        <UiInput
            label="Search"
            v-model="values.search"
        />

        <UiSelect
            :options="categories"
            label="Product category"
            :value="values.category"
            @change="value => values.category = value"
        />

        <UiSelect
            label="Sale"
            :options="sales"
            :value="values.sale"
            @change="value => values.sale = value"
        />

        <button
            class="filter__apply-button"
            @click="$emit('apply', values)"
        >
            Apply
        </button>
    </div>
</template>

<script>
import UiInput from "@/components/ui/UiInput";
import UiSelect from "@/components/ui/UiSelect";

export default {
    name: "TheFilter",

    components: {
        UiInput,
        UiSelect
    },

    created() {
        this.$emit('apply', this.values)
    },

    data() {
        return {
            values: {
                search: '',
                category: 'sneaker',
                sale: 'sale',
            },

            categories: [
                {
                    label: 'Sneakers',
                    value: 'sneaker',
                },
                {
                    label: 'T-shirts',
                    value: 't-shirt',
                },
            ],

            sales: [
                {
                    label: 'Bestsellers',
                    value: 'sale',
                },
                {
                    label: 'Common',
                    value: 'common',
                },
            ]
        }
    },
}
</script>

<style>
.filter {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    align-items: flex-end;
    justify-content: space-between;
}

.filter__apply-button {
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    background-color: #1B1B1B;
    color: #ffffff;
    padding: 20px 20px 19px;
}
</style>
