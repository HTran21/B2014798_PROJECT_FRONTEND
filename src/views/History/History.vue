<template>
    <div class="containPage">
        <h2>Order History</h2>
        <div class="contentPage">
            <div class="list-group">
                <div v-for="order in data" :key="order._id" class="list-group-item list-group-item-action mt-3 rounded">
                    <h5>Chi tiết đơn hàng:</h5>
                    <table class="table text-center">
                        <thead>
                            <tr class="table-borderless">
                                <th scope="col">STT</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Size</th>
                                <th scope="col">Trạng thái</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="detail in order.ChiTietDatHang" :key="detail._id">
                                <td>1</td>
                                <td>{{ detail.MSHH[0].TenHH }}</td>
                                <td>{{ detail.SoLuong }}</td>
                                <td>{{ (detail.MSHH[0].Gia * detail.SoLuong).toLocaleString("vi-VN") }}VND</td>
                                <td>{{ detail.Size }}</td>
                                <td>

                                    <div class="statusOrderSuccess">
                                        Đã duyệt
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <!-- <tbody>
                            <tr v-for="(item, index) in  data " :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ item.MSHH[0].TenHH }}</td>
                                <td>{{ item.SoLuong }}</td>
                                <td>{{ (item.SoLuong * item.MSHH[0].Gia).toLocaleString('vi-VN') }}VND</td>
                                <td>{{ formatDateTime(item.SoDonDH[0].NgayDH) }}</td>
                                <td>
                                   
                                    <div class="statusOrderSuccess">
                                        Đã duyệt
                                    </div>
                                </td>
                            </tr>
                        </tbody> -->
                    </table>
                    <!-- <div class="statusOrderWait">
                                        Chưa duyệt
                                    </div> -->
                    <!-- <div class="d-flex">
                        <div class="statusOrderWait">
                            Chưa duyệt
                        </div>
                        
                        <div class="timeOrder ml-auto">
                        </div>
                    </div> -->
                    <p>Ngày đặt hàng: {{ formatDateTime(order._doc.NgayDH) }}</p>
                </div>
            </div>
            <!-- <h2>Danh sách đơn hàng</h2>
            <div v-for="order in data" :key="order._id">
                <h3>Đơn hàng {{ order._id }}</h3>
                <p>Ngày đặt hàng: {{ formatDateTime(order._doc.NgayDH) }}</p>
                <p>Tổng tiền: {{ order.GiaDatHang }} VND</p>
                <h4>Chi tiết đơn hàng:</h4>
                <ul>
                    <li v-for="detail in order.ChiTietDatHang" :key="detail._id">
                        {{ detail.MSHH.TenHH }} - Số lượng: {{ detail.SoLuong }} - Size: {{ detail.Size }}
                    </li>
                </ul>
                <hr>
            </div> -->

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import moment from 'moment';

const data = ref([]);

const ID_User = localStorage.getItem("ID_User");

const fetchData = () => {
    axios.get("http://localhost:3000/order/" + ID_User)
        .then(res => {
            console.log("Data", res);
            data.value = res.data;
        })
        .catch((err) => console.log(err))
}


const formatDateTime = (dateTime) => {
    return moment(dateTime).format('DD-MM-YYYY HH:mm:ss');
}
fetchData();
</script>

<style lang="scss" scoped>
@import'./History.scss';
</style>