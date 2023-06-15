<template>
    <div id="app" class="page">
        <TheHeader />

        <MainPage class="page__content" />

        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "@/components/common/header/TheHeader";
import TheFooter from "@/components/common/footer/TheFooter";
import MainPage from "@/pages/MainPage";

export default {
    name: 'App',

    components: {
        TheHeader,
        TheFooter,
        MainPage,
    },
}
</script>

<style>
body {
    margin: 0;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    font-family: Inter, Arial, sans-serif;
    background-color: #ffffff;
}

body.locked {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

* {
    box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
}

input,
select {
    outline: none;
}

a {
    text-decoration: none;
    color: inherit;
}

ul,
li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    font-size: 16px;
    line-height: 19px;
}

.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page__content {
    flex-grow: 1;
}

.container {
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1430px;
    width: 100%;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
