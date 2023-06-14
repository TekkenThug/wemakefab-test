<template>
    <div class="grid-layout">
        <div class="grid-layout__present">
            <slot name="present" />
        </div>

        <div class="grid-layout__big-element">
            <slot name="big" />
        </div>
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
}

.grid-layout__present {
    grid-area: 1 / 1 / 2 / 3;
}

.grid-layout__big-element {
    grid-area: 1 / 3 / 3 / 5;
}
</style>
