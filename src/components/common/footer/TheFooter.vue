<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <TheLogo theme="white" />

                <ul class="footer__contact-list">
                    <li class="footer__contact-item">
                        <a href="/copyright">Copyright</a>
                    </li>

                    <li class="footer__contact-item">
                        <a href="/contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
import TheLogo from "@/components/common/logo/TheLogo";

export default {
    name: "TheFooter",

    components: {
        TheLogo,
    },
}
</script>

<style>
.footer {
    padding: 40px 0 41px;
    background-color: #1B1B1B;
}

.footer__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer__contact-list {
    display: flex;
    align-items: center;
}

.footer__contact-item {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
}

.footer__contact-item:not(:last-child) {
    margin-right: 40px;
}
</style>
