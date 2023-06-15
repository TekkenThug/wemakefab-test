<template>
    <a :class="['logo', `logo--${theme}`]" href="/">
        S—Shop
    </a>
</template>

<script>
export default {
    name: "TheLogo",

    props: {
        theme: {
            type: String,
            default: 'dark',
            validator: v => ['dark', 'white'].includes(v)
        }
    }
}
</script>

<style>
.logo {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
}

.logo--dark {
    color: #000000;
}

.logo--white {
    color: #ffffff;
}
</style>
