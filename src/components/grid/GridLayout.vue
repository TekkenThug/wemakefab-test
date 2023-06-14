<template>
    <div :class="['grid-layout', { 'grid-layout--biggest': $slots.big }]">
        <div
            v-if="$slots.present"
            :class="['grid-layout__present', { 'grid-layout__present--big': $slots.big }]"
        >
            <slot name="present" />
        </div>

        <div
            v-if="$slots.big"
            class="grid-layout__big-element"
        >
            <slot name="big" />
        </div>

        <slot />
    </div>
</template>

<script>
export default {
    name: "GridLayout",

    props: {
        text: {
            type: String,
            default: '',
        },
    },
}
</script>

<style>
.grid-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 60px;
}

.grid-layout--biggest {
    grid-template-rows: 380px auto;
}

.grid-layout__present {
    grid-area: 1 / span 4
}

.grid-layout__present--big {
    grid-area: 1 / 1 / 2 / 3;
}

.grid-layout__big-element {
    grid-area: 1 / 3 / 3 / 5;
}
</style>
