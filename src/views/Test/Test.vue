<template>
    <div>
        <h1>Thông tin KhachHang</h1>
        <ul>
            <li v-for="khachhang in khachhangs" :key="khachhang._id">{{ khachhang.HoTenKH }}</li>
        </ul>

        <div>
            <h1>Đăng ký tài khoản</h1>
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="username">Tên đăng nhập</label>
                    <input type="text" id="username" v-model="username" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Mật khẩu</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    </div>
    <button @click="notify">notify by click</button>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const khachhangs = ref([]);
// const fetchKhachHang = () => {
//     axios.get('http://localhost:3000/authentication/info')
//         .then((res) => {
//             khachhangs.value = res.data;
//         })
//         .catch((error) => {
//             console.error('Lỗi khi lấy thông tin khachhang:', error);
//         });
// }
// onMounted(() => {
//     fetchKhachHang();
// });

const username = ref('');
const email = ref('');
const password = ref('');

const register = async () => {
    const formData = {
        username: username.value,
        email: email.value,
        password: password.value,
    };
    console.log(formData)
};


const notify = () => {
    // or
    toast.success('toastify success');
};
</script>