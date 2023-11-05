<template>
    <div class="containPage">
        <h2>Order Page</h2>
        <div class="contentPage row">
            <div class="col-lg-8 col-sm-12">
                <div class="list-group p-2">
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-4">
                                <div class="infoItem row">
                                    <div class="col-3 p-0">
                                        <img class="imageItem d-flex m-auto" src="../../../CupCoffee/cup1.png" alt="">
                                    </div>

                                    <div class="col-9 p-0 m-auto">
                                        <h4 style="font-weight: bold;">Capuchino</h4>
                                        <div>Size: M</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="price">
                                    50.000VND
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="quantityItem">
                                    1
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="totalPrice">
                                    50.000VND
                                </div>
                            </div>
                            <div class="col-1 d-flex m-auto justify-content-center">
                                <div class="iconMinus">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-4">
                                <div class="infoItem row">
                                    <div class="col-3 p-0">
                                        <img class="imageItem d-flex m-auto" src="../../../CupCoffee/cup1.png" alt="">
                                    </div>

                                    <div class="col-9 p-0 m-auto">
                                        <h4 style="font-weight: bold;">Capuchino</h4>
                                        <div>Size: M</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="price">
                                    50.000VND
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="quantityItem">
                                    1
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="totalPrice">
                                    50.000VND
                                </div>
                            </div>
                            <div class="col-1 d-flex m-auto justify-content-center">
                                <div class="iconMinus">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-4">
                                <div class="infoItem row">
                                    <div class="col-3 p-0">
                                        <img class="imageItem d-flex m-auto" src="../../../CupCoffee/cup1.png" alt="">
                                    </div>

                                    <div class="col-9 p-0 m-auto">
                                        <h4 style="font-weight: bold;">Capuchino</h4>
                                        <div>Size: M</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="price">
                                    50.000VND
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="quantityItem">
                                    1
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="totalPrice">
                                    50.000VND
                                </div>
                            </div>
                            <div class="col-1 d-flex m-auto justify-content-center">
                                <div class="iconMinus">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 p-2">

                <div class="total">
                    <div class="titelTotal">
                        Summary
                    </div>
                    <div class="totalAllPrice">
                        Tổng số tiền đã mua:
                        <span class="numberTotal">150.000VND</span>
                    </div>
                    <div class="totalAllPrice">
                        Phí thuê:
                        <span class="numberTotal">0.000VND</span>
                    </div>
                    <div class="totalAllPrice">
                        Tổng số cần thanh toán:
                        <span class="numberTotal">150.000VND</span>
                    </div>

                    <button class="btnPay">Check out</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import './Order.scss';
</style>