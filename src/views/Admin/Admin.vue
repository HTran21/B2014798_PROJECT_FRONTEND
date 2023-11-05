<template>
    <div class="containPage">
        <h2>Dashboard</h2>
        <div class="contentPage">
            <div class="listCard">
                <div class="row pl-3">
                    <div class="col">
                        <div class="cardInfo">
                            <div class="leftCard">
                                <div class="iconCard">
                                    <i class="  fa-solid fa-cart-shopping"></i>

                                </div>
                            </div>
                            <div class="rightCard">
                                <div class="numberCard">
                                    47
                                </div>
                                <div class="nameCard">
                                    Orders
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex">
                        <div class="cardInfo">
                            <div class="leftCard">
                                <div class="iconCard" style="background-color: #CBE2FF;">
                                    <i class="fa-solid fa-hourglass-half" style="color: #007BFF;"></i>

                                </div>
                            </div>
                            <div class="rightCard">
                                <div class="numberCard">
                                    47
                                </div>
                                <div class="nameCard">
                                    Total Pending
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex">
                        <div class="cardInfo">
                            <div class="leftCard">
                                <div class="iconCard" style="background-color: #CDF1EF;">
                                    <i class="fa-solid fa-money-bill-wave" style="color: #05B9AA;"></i>

                                </div>
                            </div>
                            <div class="rightCard">
                                <div class="numberCard">
                                    15.555$
                                </div>
                                <div class="nameCard">
                                    Total Revenue
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex">
                        <div class="cardInfo">
                            <div class="leftCard">
                                <div class="iconCard" style="background-color: #E5CFF7;">
                                    <i class="fa-solid fa-user" style="color: #BC7AF9;"></i>

                                </div>
                            </div>
                            <div class="rightCard">
                                <div class="numberCard">
                                    47
                                </div>
                                <div class="nameCard">
                                    Total Customer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="px-4 mt-2 mb-0">Orders</h3>
            <div class="ordersCustomer mt-1">

                <table class="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Amount</th>
                            <th>Status Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>15/10/2023, 11.11AM</td>
                            <td>Hoang Tran</td>
                            <td>$164.52</td>
                            <td class="d-flex justify-content-center">
                                <span class="accept">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <span class="reject">
                                    <i class="fa-solid fa-x"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>15/10/2023, 11.11AM</td>
                            <td>Hoang Tran</td>
                            <td>$164.52</td>
                            <td class="d-flex justify-content-center">
                                <span class="accept">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <span class="reject">
                                    <i class="fa-solid fa-x"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>15/10/2023, 11.11AM</td>
                            <td>Hoang Tran</td>
                            <td>$164.52</td>
                            <td class="d-flex justify-content-center">
                                <span class="accept">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <span class="reject">
                                    <i class="fa-solid fa-x"></i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup></script>
<style lang="scss" scoped>
@import'./Admin.scss';
</style>