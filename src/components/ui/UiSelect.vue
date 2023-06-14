<template>
    <div class="ui-select">
        <span class="ui-select__label" v-if="label">{{ label }}</span>

        <div class="ui-select__item-select-wrapper">
            <select
                class="ui-select__item-select"
                :value="value"
                @change="event => $emit('change', event.target.value)"
            >
                <option
                    v-for="item in options"
                    :key="item.value"
                    :value="item.value"
                >
                    {{ item.label }}
                </option>
            </select>

            <svg
                class="ui-select__dropdown-icon"
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1 1L8 8L15 1" stroke="black"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "UiSelect",

    props: {
        label: {
            type: String,
            default: '',
        },

        value: {
            type: String,
            default: '',
        },

        options: {
            type: Array,
            default: () => ([])
        }
    },
}
</script>

<style>
.ui-select {
    display: flex;
    flex-direction: column;
}

.ui-select__label {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 20px;
}

.ui-select__item-select-wrapper {
    position: relative;
}

.ui-select__item-select {
    padding: 19px 40px 20px 20px;
    border: none;
    background-color: #F5F5F5;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    width: 100%;
    appearance: none;
}

.ui-select__item-select::-ms-expand {
    display: none;
}

.ui-select__dropdown-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
}
</style>
