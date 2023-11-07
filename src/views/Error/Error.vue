<template>
    <div class="image">
        <img src="../../../public/Illustration/Page_404.png" alt="">
        <h1 class="textError text-center">Trang không tồn tại</h1>
        <router-link to="/" class="btn-grad">
            Quay lại trang chủ
        </router-link>
    </div>
</template>
<style>
.image {
    margin: auto;
}

.image img {
    width: 400px;
}

.textError {
    margin: 20px;
    font-size: 28px;
    font-weight: bold;
}

.btn-grad {
    background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA 51%, #1FA2FF 100%);
    margin: auto;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    width: 300px;
    ;
}

.btn-grad:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
</style>