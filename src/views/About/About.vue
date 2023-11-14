
<template>
    <div class="containPage">
        <div class="titlePage">
            <h2>Coffee Menu</h2>
        </div>
        <div class="contentPage">
            <div class="row ">
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

                            <button class="btnAddToCart" @click="addToCart(item)">
                                Add to cart
                            </button>

                        </div>
                    </div>
                </div>

                <!-- <div class="col">
                    <div class="item">
                        <div class="leftItem">
                            <img src="../../../CupCoffee/cup7.png" alt="" class="imageItem">
                            <div class="numberCup">
                                <input type="button" class="btnquantity" value="+">
                                <input type="text" class="quantity" value="0">
                                <input type="button" class="btnquantity" value="-">
                            </div>
                        </div>
                        <div class="rightItem">
                            <div class="titleItem">
                                Capuchino
                                <span class="priceItem">50.00VND</span>
                            </div>
                            <div class="desItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                                exercitationem?
                            </div>
                            <div class="sizeItem">
                                Size:
                                <input type="radio" name="sizeItem" id="sizeM" value="M">
                                <label for="sizeM">M</label>
                                <input type="radio" name="sizeItem" id="sizeL" value="L">
                                <label for="sizeL">L</label>
                            </div>

                            <button class="btnAddToCart">
                                Add to cart
                            </button>

                        </div>
                    </div>
                </div> -->
            </div>
            <!-- <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const data = ref([]);


const fetchData = () => {
    axios.get('http://localhost:3000/product')
        .then(res => {
            data.value = res.data;
            data.value = res.data.map(item => ({
                ...item,
                SoLuong: 0,
                Size: '',
            }))
            // data.value = Object.values(res.data);




        })
        .catch(error => {
            console.error('Lỗi khi nhận dữ liệu từ API', error);
        });
    // .then(res => {
    //      data.value = res.data;

    //     console.log(res.data)
    // })
    // .catch((err) => console.log(err))
}

fetchData();


// console.log(data.value)
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