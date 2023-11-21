<template>
    <div class="containPage">
        <h2>Danh sách user</h2>
        <div class="contentPage" :style="`${isLogin ? '' : 'display: none'}`">
            <a-tabs v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="Khách hàng">
                    <h4>Danh sách người dùng</h4>
                    <a-table :dataSource="data" :columns="columns" rowKey="_id">
                    </a-table>
                </a-tab-pane>
                <a-tab-pane key="2" tab="Nhân viên" force-render>
                    <h4>Danh sách nhân viên</h4>
                    <a-table :dataSource="dataStaff" :columns="columnsStaff" rowKey="_id">
                    </a-table>
                </a-tab-pane>

            </a-tabs>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import moment from 'moment';

const activeKey = ref('1');
const data = ref([]);
const dataStaff = ref([]);

const isLogin = localStorage.getItem("isLogin");

const columns = [
    {
        title: 'ID User',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Họ tên',
        dataIndex: 'HoTenKH',
        key: 'HoTenKH',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'SoDienThoai',
        key: 'SoDienThoai',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'DiaChi',
        key: 'DiaChi',
    },
]

const fetchData = () => {
    axios.get("http://localhost:3000/customer")
        .then(res => {
            data.value = res.data;
        })
        .catch((err) => console.log(err));
}

const fetchDataStaff = () => {
    axios.get("http://localhost:3000/customer/admin")
        .then(res => {
            dataStaff.value = res.data;
        })
        .catch((err) => console.log(err));
}

fetchData();
fetchDataStaff();

const columnsStaff = [
    {
        title: 'ID Staff',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Họ tên',
        dataIndex: 'HoTenNV',
        key: 'HoTenNV',
    },
    {
        title: 'Chức vụ',
        dataIndex: 'ChucVu',
        key: 'ChucVu',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'SoDienThoai',
        key: 'SoDienThoai',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'DiaChi',
        key: 'DiaChi',
    },
]

</script>

<style lang="scss" scoped>
@import'./Customer.scss';
</style>