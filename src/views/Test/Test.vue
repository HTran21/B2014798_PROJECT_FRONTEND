<template>
    <div>
        <h1>Thông tin KhachHang</h1>
        <ul>
            <li v-for="khachhang in khachhangs" :key="khachhang._id">{{ khachhang.HoTenKH }}</li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const khachhangs = ref([]);
const fetchKhachHang = () => {
    axios.get('http://localhost:3000/authentication/info')
        .then((res) => {
            khachhangs.value = res.data;
        })
        .catch((error) => {
            console.error('Lỗi khi lấy thông tin khachhang:', error);
        });
}
onMounted(() => {
    fetchKhachHang();
});
</script>