<!-- 应用系统登录 -->
<template>
    <div class="login-page1">
        <div class="container right-panel-active">
            <!-- Sign Up -->
            <div class="container__form container--signup">

            </div>

            <!-- Sign In -->
            <div class="container__form container--signin">

            </div>

            <!-- Overlay -->
            <div class="container__overlay">
                <div class="overlay">
                    <div class="overlay__panel overlay--left">
                        <button class="btn" id="signIn" @click="signInBtn">Sign In</button>
                    </div>
                    <div class="overlay__panel overlay--right">
                        <button class="btn" id="signUp" @click="signUpBtn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>


export default {
    data() {
        return {

        };
    },
    methods: {
        signInBtn() {
            const container = document.querySelector(".container");
            container.classList.remove("right-panel-active");
        },
        signUpBtn() {
            const container = document.querySelector(".container");
            container.classList.add("right-panel-active");
        },

    },
    mounted() {

    },
    created() {

    },
    beforeDestroy() {

    }
};
</script>
  
<style lang="less">
:root {
    /* COLORS */
    --white: #fff;
    --gray: #333;
    --blue: #0367a6;
    --lightblue: #008997;

    /* RADII */
    --button-radius: 15px;

    /* SIZES */
    --max-width: 758px;
    --max-height: 420px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.login-page1 {
    align-items: center;
    background-color: var(--white);
    background: url("@/assets/login/background_oeuhe7.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    height: 100%;
    width: 100%;
    place-items: center;
}


.container {
    background-color: var(--white);
    border-radius: var(--button-radius);
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25), 0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    height: var(--max-height);
    max-width: var(--max-width);
    overflow: hidden;
    position: relative;
    width: 100%;
}

.container__form {
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.6s ease-in-out;
}

.container--signin {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container .right-panel-active .container--signin {
    transform: translateX(100%);
}

.container--signup {
    left: 0;
    opacity: 0;
    width: 50%;
    z-index: 1;
}

.container .right-panel-active .container--signup {
    -webkit-animation: show 0.6s;
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
}

.container__overlay {
    height: 100%;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease-in-out;
    width: 50%;
    z-index: 100;
}

.container .right-panel-active .container__overlay {
    transform: translateX(-100%);
}

.overlay {
    background-color: var(--lightblue);
    background: url("@/assets/login/background_oeuhe7.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: -100%;
    position: relative;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 200%;
}

.container .right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay__panel {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 50%;
}

.overlay--left {
    transform: translateX(-20%);
}

.container .right-panel-active .overlay--left {
    transform: translateX(0);
}

.overlay--right {
    right: 0;
    transform: translateX(0);
}

.container .right-panel-active .overlay--right {
    transform: translateX(20%);
}

.btn {
    background-color: var(--blue);
    background-image: linear-gradient(90deg, var(--blue) 0%, var(--lightblue) 74%);
    border-radius: 20px;
    border: 1px solid var(--blue);
    color: var(--white);
    cursor: pointer;
    font-size: 0.2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 0.2rem 0.4rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}


.btn:active {
    transform: scale(0.95);
}

.btn:focus {
    outline: none;
}


@-webkit-keyframes show {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

@keyframes show {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}
</style>
  