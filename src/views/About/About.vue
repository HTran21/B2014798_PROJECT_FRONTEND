
<template>
    <div class="containPage">
        <div class="titlePage">
            <!-- <h2>Coffee Menu</h2> -->
            <div class="groupSearch">
                <input class="inputSearch" v-model="searchQuery" type="search" placeholder="Search" aria-label="Search">
                <span @click="searchDrinks" class="iconSearch"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
        </div>
        <div class="contentPage">
            <div class="row " v-if="data.length > 0">
                <div class="col" v-for="(item, index) in  data " :key="index">
                    <div class="item">
                        <div class="leftItem">
                            <img :src="'http://localhost:3000/' + item.HinhHH" alt="" class="imageItem">
                            <div class="numberCup">
                                <button class="btnquantity" @click="handleGiam(item)">-</button>
                                {{ item.SoLuong }}
                                <button class="btnquantity" @click="handleTang(item)">+</button>
                            </div>

                            <p class="text-center tonKho"> {{ item.SoLuongHang }}</p>

                        </div>
                        <div class="rightItem">
                            <div class="titleItem">
                                {{ item.TenHH }}
                                <span class="priceItem">{{ item.Gia }}VND</span>
                            </div>
                            <div class="desItem">{{ item.MoTaHH }}
                            </div>
                            <div class="sizeItem">
                                Size:
                                <select v-model="item.Size" name="" id="">
                                    <option value="" selected>Chọn size</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </div>

                            <button v-if="isLogin" class="btnAddToCart" @click="addToCart(item)">
                                Add to cart
                            </button>
                            <router-link v-else to="/login">
                                <button class="btnAddToCart" @click="addToCart(item)">
                                    Add to cart
                                </button>
                            </router-link>


                        </div>
                    </div>

                </div>
            </div>
            <div v-else class="textNotFound">
                Không tìm thấy đồ uống
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const data = ref([]);
const searchQuery = ref('');

const isLogin = localStorage.getItem("isLogin");


const fetchData = () => {
    axios.get('http://localhost:3000/product')
        .then(res => {
            data.value = res.data;
            data.value = res.data.map(item => ({
                ...item,
                SoLuong: 0,
                Size: '',
            }))
        })
        .catch(error => {
            console.error('Lỗi khi nhận dữ liệu từ API', error);
        });
}

fetchData();

const searchDrinks = () => {
    if (searchQuery.value.trim() === '') {
        toast.warn("Vui lòng nhập ký tự")
    }
    else {
        axios.get(`http://localhost:3000/product?search=${searchQuery.value}`)
            .then(res => {
                if (res.data.length > 0) {
                    console.log("Data search", res.data)
                    data.value = res.data;
                    data.value = res.data.map(item => ({
                        ...item,
                        SoLuong: 0,
                        Size: '',
                    }))
                }
                else {
                    data.value = [];
                }
            })
            .catch(error => {
                console.error('Lỗi khi nhận dữ liệu từ API', error);
            });
    }


}

const idDrink = ref('');
const numberCup = ref(0);
const sizeCup = ref('')
const ID_User = localStorage.getItem("ID_User");


const addToCart = (item) => {
    idDrink.value = item._id;
    numberCup.value = item.SoLuong;
    sizeCup.value = item.Size;

    const handleReset = () => {
        item.SoLuong = 0;
        item.Size = ''
    }

    if (sizeCup.value.trim() === '' || numberCup.value === 0) {
        toast.error('Vui lòng chọn số lượng và size');
    }
    else {
        axios.post('http://localhost:3000/cart/' + ID_User, { idDrink, numberCup, sizeCup })
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error)
                }
                else {
                    handleReset();
                    fetchData();
                    toast.success(res.data.message);

                }
            })
            .catch((err) => console.log(err))
    }



}

const handleGiam = (item) => {
    item.SoLuong = Math.max(item.SoLuong - 1, 0);
}
const handleTang = (item) => {
    item.SoLuong = Math.min(item.SoLuong + 1, item.SoLuongHang);
    if (item.SoLuong === item.SoLuongHang) {
        toast.error("Số lượng thức uống không đủ")
    }

}

</script>

<style lang="scss" scoped>
@import './About.scss';
</style>