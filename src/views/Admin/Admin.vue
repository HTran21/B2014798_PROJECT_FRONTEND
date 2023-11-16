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
                            <th scope="col">ID Đơn hàng</th>
                            <th scope="col">Tên khách hàng</th>
                            <th scope="col">Ngày đặt hàng</th>
                            <th scope="col">Ngày giao hàng</th>
                            <th>Status Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td colspan="5" v-if="data.length === 0">
                            <div class="imageOrderEmpty">
                                <img src="../../../public/Illustration/empty-box.png" alt="">
                                <p>Danh sách order trống</p>
                            </div>
                        </td>
                        <tr v-for="(order, index) in data" :key="index">
                            <th scope="row">{{ order._id }}</th>
                            <td>{{ order.MSKH[0].HoTenKH }}</td>
                            <td>{{ formatDateTime(order.NgayDH) }}</td>
                            <td><input class="inputDate" type="datetime-local" v-model="NgayGH"></td>
                            <td class="d-flex justify-content-center">
                                <button @click="handleAccess(order)" class="accept">
                                    <i class="fa-solid fa-check"></i>
                                </button>
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

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import moment from 'moment';

const data = ref([]);
const NgayGH = ref();
const idOrder = ref('');


const fetchData = () => {
    axios.get('http://localhost:3000/order')
        .then(res => {
            console.log("Data", res.data);
            data.value = res.data;
            data.value = res.data.map(item => ({
                ...item,
                NgayGH,
            }))
            console.log("Data moiw", data.value)
        })
        .catch((err) => console.log(err));
}

fetchData();


const formatDateTime = (dateTime) => {
    return moment(dateTime).format('DD-MM-YYYY HH:mm:ss');
}

const handleAccess = (order) => {
    idOrder.value = order._id;
    console.log("ID_Order", idOrder.value);
    console.log("Ngay GH", formatDateTime(NgayGH.value));
}
</script>
<style lang="scss" scoped>
@import'./Admin.scss';
</style>