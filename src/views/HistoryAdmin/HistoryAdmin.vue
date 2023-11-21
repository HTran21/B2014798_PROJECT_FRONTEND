<template>
    <div class="containPage">
        <h2>Đơn hàng đã duyệt</h2>
        <div class="contentPage" :style="`${isLogin ? '' : 'display: none'}`">
            <div class="list-group">
                <div v-if="data.length === 0" class="orderEmpty">
                    <img src="../../../public/Illustration/empty2.png" alt="">
                    <p>Đơn hàng trống</p>
                </div>
                <div v-for="order in  sortedOrders " :key="order._id"
                    class="list-group-item list-group-item-action mt-3 rounded">
                    <div class="infoUser mb-2">
                        <h5>Thông tin khách hàng:</h5>
                        <p class="d-inline">Họ tên: {{ order._doc.MSKH[0].HoTenKH }}</p>
                        <p class="ml-3 d-inline">Số điện thoại: {{ order._doc.MSKH[0].SoDienThoai }}</p>
                        <p class="ml-3 d-inline">Địa chỉ: {{ order._doc.MSKH[0].DiaChi }}</p>
                    </div>
                    <div class="d-flex">
                        <h5>Chi tiết đơn hàng:</h5>
                        <a-dropdown class="ml-auto" v-if="order._doc.TrangthaiDH === 'W'">
                            <a class="ant-dropdown-link" @click.prevent>
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </a>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item>
                                        <a @click="showModal(order)"><i class="fa-solid fa-circle-info"
                                                style="color: blue;"></i></a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a @click="showModalDelete(order)"><i class="fa-solid fa-trash"
                                                style="color: red"></i></a>
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>

                        <a-modal style="top: 40px;" v-model:open="isModalDelete" title="Xóa đơn hang" @ok="handleOkDelete()"
                            :ok-button-props="okButtonProps" @cancel="handleCancelDelete" cancelText="Đóng"
                            okText="Xóa đơn hàng">
                            <p>Bạn có chắc muốn xóa đơn hàng.</p>
                        </a-modal>

                        <a-modal style="top: 40px;" v-model:open="isModal" width="800px" title="Chi tiết đơn hàng"
                            @ok="handleOk" @cancel="handleCancel" cancelText="Đóng" :ok-button-props="okButtonHidden">
                            <table class="table text-center">

                                <thead>
                                    <tr class="table-borderless">
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Giá</th>
                                        <th scope="col">Size</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(detail, index) in dataDetail.ChiTietDatHang" :key="detail._id">
                                        <!-- <td><input type="radio" @change="handleSelectDetail(detail)" name="checkDetail"
                                                id=""></td> -->
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ detail.MSHH[0].TenHH }}</td>
                                        <td>
                                            <div class="numberCup">
                                                <!-- <button class="btnquantity" @click="handleGiam(detail)">-</button> -->
                                                <!-- <input class="inputNumberCup" type="text" :value="detail.SoLuong" name=""
                                                    id=""> -->
                                                <p class="ml-1 mr-1 mb-0">{{ detail.SoLuong }}</p>
                                                <!-- <p v-else class="ml-1 mr-1 mb-0">{{ numberDetail }}</p> -->
                                                <!-- <button class="btnquantity" @click="handleTang(detail)">+</button> -->
                                            </div>
                                        </td>
                                        <td>{{ (detail.MSHH[0].Gia * detail.SoLuong).toLocaleString("vi-VN") }}VND</td>
                                        <td>
                                            <div class="seletcSize">
                                                M
                                            </div>
                                            <!-- <select class="seletcSize" name="" id="" :value="detail.Size">
                                                <option value="" selected>Chọn size</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                            </select> -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </a-modal>

                    </div>

                    <table class="table text-center">
                        <thead>
                            <tr class="table-borderless">
                                <th scope="col">STT</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Size</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(detail, index) in order.ChiTietDatHang" :key="detail._id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ detail.MSHH[0].TenHH }}</td>
                                <td>{{ detail.SoLuong }}</td>
                                <td>{{ (detail.MSHH[0].Gia * detail.SoLuong).toLocaleString("vi-VN") }}VND</td>
                                <td>{{ detail.Size }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex">
                        <div>
                            <p>Tổng tiền: {{ tinhTongTien(order.ChiTietDatHang).toLocaleString("vi-VN") }}VND</p>
                            <p class="d-inline">Thời gian đặt hàng: {{ formatDateTime(order._doc.NgayDH) }}</p>
                            <p class="d-inline ml-3" v-if="order._doc.NgayDH !== null">Thời gian nhận hàng: {{
                                formatDateTime(order._doc.NgayGH) }}
                            </p>
                        </div>

                        <div v-if="order._doc.TrangthaiDH === 'Y'" class="statusOrderSuccess mr-0 mb-0">

                            Đã duyệt
                        </div>
                        <div v-else class="statusOrderWait mr-0  mb-0">
                            Chưa duyệt
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import moment from 'moment';

const data = ref([]);

const isLogin = localStorage.getItem("isLogin");

const fetchData = () => {
    axios.get("http://localhost:3000/order/admin")
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

const sortedOrders = computed(() => {
    // Sử dụng Array.sort() để sắp xếp mảng theo ngày giảm dần
    return data.value.slice().sort((a, b) => {
        return new Date(b._doc.NgayDH) - new Date(a._doc.NgayDH);
    });
});


const dataDetail = ref([]);
const sizeDetail = ref('');
const numberDetail = ref(0);
const idDetail = ref('');

const isModal = ref(false);

const showModal = (order) => {
    isModal.value = true;
    console.log("Don Hang", order)
    dataDetail.value = order;

}

const handleCancel = () => {
    isModal.value = false;
}

const handleOk = () => {
    isModal.value = false;
}

const handleSelectDetail = (detail) => {
    console.log("Chi tiet detail", detail);
    numberDetail.value = detail.SoLuong;
    console.log("So Luong", numberDetail.value)
}

const handleGiam = (detail) => {
    console.log("So Luong", detail.SoLuong)
}
const handleTang = (detail) => {
    console.log("So Luong", detail.SoLuong)
}

const tinhTongTien = (chiTietDonHang) => {
    return chiTietDonHang.reduce((total, detail) => {
        return total + detail.MSHH[0].Gia * detail.SoLuong;
    }, 0);
}

const isModalDelete = ref(false);

const idOrder = ref('');


const showModalDelete = (order) => {
    isModalDelete.value = true;
    idOrder.value = order._doc._id
    console.log("Don Hang", order._doc._id);

}

const handleCancelDelete = () => {
    isModalDelete.value = false;
}


const handleOkDelete = () => {
    console.log("ID_Don hang", idOrder.value)
    axios.delete('http://localhost:3000/order/' + idOrder.value)
        .then(res => {
            if (res.data.error) {
                toast.error(res.data.error)
            }
            else {
                handleCancelDelete();
                fetchData();
                toast.success(res.data.message)
            }
        })
        .catch((err) => console.log(err))
}

const okButtonProps = {
    style: {
        background: 'red',  // Đặt màu đỏ cho nút "OK"
    },
};

const okButtonHidden = {
    style: {
        display: 'none'
    }
}


</script>

<style lang="scss" scoped>
@import'./HistoryAdmin.scss';
</style>