<template>
    <div class="containPage">
        <section>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card loginForm">
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-6 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">

                                        <form>

                                            <div class="d-flex align-items-center mb-3 pb-1">
                                                <div class="logo">
                                                    <img src="../../assets/coffee-cup.png" alt="">
                                                    <span class="titleWeb">COFF<span class="text-dark">EE</span></span>
                                                </div>
                                            </div>

                                            <div class="fw-normal pb-2 desLogin">Create an account to use the service</div>

                                            <div class="group">
                                                <label for="username"><i class="fa-solid fa-envelope iconForm"></i></label>
                                                <input type="email" id="username" class="groupInput" autocomplete="off"
                                                    placeholder="Nhập email" />

                                            </div>
                                            <div class="group">
                                                <label for="username"><i class="fa-solid fa-user iconForm"></i></label>
                                                <input type="email" id="username" class="groupInput" autocomplete="off"
                                                    placeholder="Nhập Username" />

                                            </div>

                                            <div class="group">
                                                <label for="username"><i class="fa-solid fa-lock iconForm"></i></label>
                                                <input type="email" id="username" class="groupInput" autocomplete="off"
                                                    placeholder="Nhập mật khẩu" />

                                            </div>
                                            <div class="pt-1 mb-4">
                                                <button class="btnPay">Register</button>
                                            </div>
                                            <p class="mb-1 pb-lg-2" style="color: #393f81;">Do you have an account?
                                                <router-link to="/login" class="button">


                                                    <span style="color: #393f81;">Login here</span>
                                                </router-link>
                                            </p>

                                        </form>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 d-none d-md-block m-auto">
                                    <img src="../../../public/Illustration/Coffe_Meeting.png" alt="login form"
                                        class="imageLogin " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import './Register.scss';
</style>