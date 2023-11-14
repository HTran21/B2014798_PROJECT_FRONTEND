<template>
    <div class="containPage">
        <h2>Order Page</h2>
        <div class="contentPage row">
            <div class="col-lg-8 col-sm-12">
                <div class="list-group p-2">
                    <div v-if="data.length === 0" class="emptyCart">
                        <img src="../../../Illustration/emptyCart.png" alt="">
                        <p class="textEmptyCart">Giỏ hàng trống</p>
                    </div>
                    <div v-for="(item, index) in  data " :key="index" class="list-group-item ">


                        <div class="row">
                            <div class="col-4">
                                <div class="infoItem row">
                                    <div class="col-4 p-0">
                                        <img class="imageItem d-flex m-auto"
                                            :src="'http://localhost:3000/' + (item.MSHH && item.MSHH[0] && item.MSHH[0].HinhHH)"
                                            alt="">
                                    </div>

                                    <div class="col-8 p-0 m-auto">
                                        <p style="font-weight: bold; font-size: 18px;">{{ item.MSHH && item.MSHH[0] &&
                                            item.MSHH[0].TenHH }}</p>
                                        <div>
                                            <select class="selectItem" v-model="item.Size" name="" id=""
                                                @change="handleSizeChange(item)">
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="price">
                                    {{ item.MSHH && item.MSHH[0] &&
                                        item.MSHH[0].Gia.toLocaleString("vi-VN") }}VND
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="quantityItem">
                                    <button class="btnAdd mr-1" @click="handleGiam(item)">-</button>
                                    {{ item.SoLuong }}
                                    <button class="btnAdd ml-1" @click="handleTang(item)">+</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="totalPrice">
                                    {{ (item.MSHH[0].Gia * item.SoLuong).toLocaleString("vi-VN") }}VND
                                </div>
                            </div>
                            <div class="col-1 d-flex m-auto justify-content-center">
                                <div class="iconMinus" @click="removeCart(item)">
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
                        Thanh toán
                    </div>
                    <div class="totalAllPrice">
                        Tổng số tiền đã mua:
                        <span class="numberTotal">{{ totalMoney.toLocaleString("vi-VN") }}VND</span>
                    </div>
                    <div class="totalAllPrice">
                        Tổng số thức uống:
                        <span class="numberTotal">{{ totalCart }}</span>
                    </div>
                    <div class="totalAllPrice">
                        Thuế:
                        <span class="numberTotal">0.000VND</span>
                    </div>
                    <div class="totalAllPrice">
                        Tổng số cần thanh toán:
                        <span class="numberTotal">{{ totalMoney.toLocaleString("vi-VN") }}VND</span>
                    </div>

                    <button class="btnPay" @click="datHang">Xác nhận đơn hàng</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const data = ref([]);
const idDrink = ref('');
const numberCup = ref(0);
const sizeCup = ref('');
const idCart = ref('');

const ID_User = localStorage.getItem("ID_User");
const fetchData = () => {
    axios.get('http://localhost:3000/cart/' + ID_User)
        .then(res => {
            // console.log("Data", res.data)
            data.value = res.data;
            const gioHangData = res.data;
            // console.log(data.value)
            // Tính tổng giỏ hàng
            const tongGioHang = tinhTongGioHang(gioHangData);

            const tongSoTien = tinhTongTien(gioHangData);

            totalCart.value = tongGioHang;
            totalMoney.value = tongSoTien;

            console.log("Tong so tien", tongSoTien);

        })
        .catch((err) => console.log(err))
}

// Hàm tính tổng giỏ hàng
const tinhTongGioHang = (gioHang) => {
    return gioHang.reduce((total, item) => total + item.SoLuong, 0);
};

// Hàm tính tổng số tiền
const tinhTongTien = (gioHang) => {
    return gioHang.reduce((total, item) => total + (item.SoLuong * item.MSHH[0].Gia), 0);
};



// Khai báo biến hoặc ref để lưu trữ tổng giỏ hàng
const totalCart = ref(0);
const totalMoney = ref(0);

fetchData();

const handleSizeChange = (item) => {
    idDrink.value = item.MSHH[0]._id;
    idCart.value = item._id;
    sizeCup.value = item.Size;
    axios.put('http://localhost:3000/cart/' + ID_User, { idDrink, sizeCup })
        .then(res => {
            if (res.data.error) {
                toast.error(res.data.error)
            }
            else {
                fetchData();

            }
        })
        .catch((err) => console.log(err))
}

const handleGiam = (item) => {
    // console.log("Gia", item.MSHH[0].Gia);
    idCart.value = item._id;
    console.log("ID Cart", idCart.value);
    item.SoLuong = Math.max(item.SoLuong - 1, 1);
    numberCup.value = item.SoLuong;
    axios.put('http://localhost:3000/cart/' + idCart.value, { numberCup })
        .then(res => {
            if (res.data.error) {
                toast.error(res.data.error)
            }
            else {
                // if (res.data.data.SoLuong === 0) {
                //     toast.warn("Số lượng không được bằng 0")
                // }

                fetchData();

            }
        })
        .catch((err) => console.log(err))
}

const handleTang = (item) => {
    idDrink.value = item.MSHH[0]._id;
    idCart.value = item._id;
    const SoLuongHang = item.MSHH[0].SoLuongHang;

    // item.SoLuong += 1;
    item.SoLuong = Math.min(item.SoLuong + 1, SoLuongHang);

    numberCup.value = item.SoLuong;
    console.log("ID Item", idDrink.value);
    console.log("So Luong", numberCup.value);
    console.log("So Luong hang trong kho", item.MSHH[0].SoLuongHang);
    if (numberCup.value = SoLuongHang) {
        toast.error("Số lượng thức uống không đủ");
    }

    axios.put('http://localhost:3000/cart/' + idCart.value, { numberCup, idDrink })
        .then(res => {
            if (res.data.error) {
                toast.error(res.data.error)
            }
            else {
                fetchData();
            }
        })
    //         .catch((err) => console.log(err))
    // if (numberCup.value > item.SoLuong) {
    //     toast.error("Số lượng thức uống không đủ");
    // }
    // else {
    //     axios.put('http://localhost:3000/cart/' + idCart.value, { numberCup, idDrink })
    //         .then(res => {
    //             if (res.data.error) {
    //                 toast.error(res.data.error)
    //             }
    //             else {
    //                 fetchData();
    //             }
    //         })
    //         .catch((err) => console.log(err))
    // }



}

const removeCart = (item) => {
    idCart.value = item._id;
    axios.delete('http://localhost:3000/cart/' + idCart.value)
        .then(res => {
            if (res.data.error) {
                toast.error(res.data.error)
            }
            else {
                fetchData();
                toast.success(res.data.message)
            }
        })
        .catch((err) => console.log(err))
}

// Dat hang
const datHang = async () => {
    try {

        if (data.value.length === 0) {
            toast.error("Giỏ hàng trống")
        }
        else {
            axios.post('http://localhost:3000/order', {
                MSKH: ID_User,
                TongTien: totalMoney,
                ChiTietGioHang: data.value,
            })
                .then(res => {
                    toast.success(res.data.message);
                    fetchData();
                })
                .catch((err) => console.log(err))
        }

    }
    catch (error) {
        console.log('Lỗi khi đặt hàng', error)
    }
}


const hanldeCheck = () => {
    if (data && data.value.length) {
        console.log("Data", data.value.length);
    }
}


</script>

<style lang="scss" scoped>
@import './Order.scss';
</style>