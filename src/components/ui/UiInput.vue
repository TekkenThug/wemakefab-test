<template>
    <div class="ui-input">
        <span class="ui-input__label" v-if="label">{{ label }}</span>

        <div class="ui-input__item-input-wrapper">
            <input
                class="ui-input__item-input"
                type="text"
                :value="value"
                @input="event => $emit('input', event.target.value)"
            >

            <transition name="fade" mode="out-in">
                <svg
                    v-if="value"
                    class="ui-input__clear-button"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="$emit('input', '')"
                >
                    <path d="M1 1L6 6M11 11L6 6M6 6L11 1L1 11" stroke="black"/>
                </svg>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "UiInput",

    props: {
        label: {
            type: String,
            default: '',
        },

        value: {
            type: String,
            default: '',
        },
    }
}
</script>

<style>
.ui-input {
    display: flex;
    flex-direction: column;
}

.ui-input__label {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 20px;
}

.ui-input__item-input-wrapper {
    position: relative;
}

.ui-input__item-input {
    padding: 19px 40px 20px 20px;
    border: none;
    background-color: #F5F5F5;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    width: 100%;
}

.ui-input__clear-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;
}
</style>
