<template>
    <div id="app" class="page">
        <TheHeader class="page__header" />

        <MainPage />
    </div>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
import MainPage from "@/pages/MainPage";

export default {
    name: 'App',

    components: {
        TheHeader,
        MainPage,
    },

    data() {
        return {
            sneakers: [
                {
                    image: 'https://fridaywear.ru/upload/resize_cache/webp/iblock/d71/58jspwoh7ox2r1vio6tp29f1jir195v7.webp',
                    name: 'Convers Chuck',
                    price: 49.99,
                }
            ]
        }
    }
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
}

a:link {
    color: black;
}

a:visited {
    color: black;
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
