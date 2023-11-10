
<template>
    <div class="containPage">
        <div class="titlePage d-flex">
            <h2>Coffee Menu</h2>
            <div class="ml-auto mt-1">
                <button @click="showModal" class="btnAdd"><i class="fa-solid fa-mug-hot"></i> Thêm</button>
                <a-modal style="top: 40px;" v-model:open="isModal" width="800px" title="Thêm thức uống" @ok="handleOk"
                    @cancel="handleCancel" okText="Thêm thức uống" cancelText="Đóng">
                    <form action="" enctype="multipart/form-data">
                        <div class="contentModal row">
                            <div class="leftModal col">
                                <img class="imageLeftModal" :src="imageUpload" alt="">
                                <div class="btnAddImage d-flex">
                                    <label for="image"><i class="fa-solid fa-image iconModal"></i>Thêm ảnh</label>
                                    <input type="file" name="image" id="image" accept="image/jpeg, image/png, image/jpg"
                                        @change="handleImage" required>
                                </div>
                                <!-- <p class="errorText" v-if="errors.picture">{{ errors.picture }}</p> -->

                            </div>
                            <div class="rightModal col">
                                <div class="groupForm">
                                    <span>Tên</span>
                                    <input type="text" class="inputGroup" v-model="nameDrink" name="nameDrink" id=""
                                        placeholder="Tên thức uống" autocomplete="off">

                                </div>
                                <p class="errorText" v-if="errors.name">{{ errors.name }}</p>
                                <div class="groupForm">
                                    <span>Giá</span>
                                    <input type="number" class="inputGroup" v-model="priceDrink" name="priceDrink" id=""
                                        placeholder="Giá thức uống" autocomplete="off">
                                </div>
                                <p class="errorText" v-if="errors.price">{{ errors.price }}</p>


                                <div class="groupForm">
                                    <span>Số lượng</span>
                                    <input type="number" class="inputGroup" v-model="quantityDrink" name="quantytiDrink"
                                        id="" placeholder="Số lượng thức uống" autocomplete="off">
                                </div>
                                <p class="errorText" v-if="errors.quantity">{{ errors.quantity }}</p>
                                <div class="groupForm">
                                    <span>Ghi chú</span>
                                    <input type="text" class="inputGroup" v-model="noteDrink" name="noteDrink" id=""
                                        placeholder="Ghi chú thức uống" autocomplete="off">
                                </div>
                                <div class="groupForm2">
                                    <span>Mô tả</span>
                                    <textarea class="groupText" name="desDrink" id="" v-model="desDrink"
                                        placeholder="Mô tả thức uống" cols="20" autocomplete="off" spellcheck="false"
                                        rows="5"></textarea>
                                </div>
                                <p class="errorText" v-if="errors.des">{{ errors.des }}</p>

                            </div>
                        </div>
                    </form>

                </a-modal>
            </div>
        </div>
        <div class="contentPage">
            <!-- <div class="row ">
                <div class="col">
                    <div class="item">
                        <div class="leftItem m-auto">
                            <img src="../../../CupCoffee/cup1.png" alt="" class="imageItem">

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

                            <div class="actionItem">
                                <i class="fa-solid fa-pen-to-square iconEdit"></i>
                                <i class="fa-solid fa-trash iconRemove"></i>
                            </div>

                        </div>
                    </div>
                </div>


            </div> -->
            <div class="row ">
                <div class="col" v-for="(item, index) in  data " :key="index">
                    <div class="item">
                        <div class="leftItem m-auto">
                            <img :src="'http://localhost:3000/' + item.HinhHH" alt="Drink Image" class="imageItem">
                            <div class=" quanlityTiem">
                                {{ item.SoLuongHang }}

                            </div>
                        </div>
                        <div class="rightItem">
                            <div class="titleItem">
                                {{ item.TenHH }}
                                <span class="priceItem">{{ item.Gia }}VND</span>
                            </div>
                            <div class="desItem">{{ item.MoTaHH }}
                            </div>


                            <div class="actionItem">
                                <button @click="showModalEdit(item)"> <i
                                        class="fa-solid fa-pen-to-square iconEdit"></i></button>
                                <button @click="showModalDelete(item)">
                                    <i class="fa-solid fa-trash iconRemove"></i>
                                </button>

                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <a-modal style="top: 40px;" v-model:open="isModalEdit" width="800px" title="Chỉnh sửa thức uống"
                @ok="handleOkEdit" @cancel="handleCancelEdit" okText="Cập nhật thức uống" cancelText="Đóng">
                <form action="" enctype="multipart/form-data">
                    <div class="contentModal row">
                        <div class="leftModal col">
                            <img class="imageLeftModal" :src="imageUploadEdit" alt="">
                            <div class="btnAddImage d-flex">
                                <label for="image"><i class="fa-solid fa-image iconModal"></i>Thêm ảnh</label>
                                <input type="file" name="image" id="image" accept="image/jpeg, image/png, image/jpg"
                                    @change="handleImageUpate" required>
                            </div>
                            <!-- <p class="errorText" v-if="errors.picture">{{ errors.picture }}</p> -->
                        </div>
                        <div class="rightModal col">
                            <div class="groupForm">
                                <span>Tên</span>
                                <input type="text" class="inputGroup" v-model="selectedItem.TenHH" name="nameDrink" id=""
                                    placeholder="Tên thức uống" autocomplete="off">

                            </div>
                            <p class="errorText" v-if="errors.name">{{ errors.name }}</p>
                            <div class="groupForm">
                                <span>Giá</span>
                                <input type="number" class="inputGroup" v-model="selectedItem.Gia" name="priceDrink" id=""
                                    placeholder="Giá thức uống" autocomplete="off">
                            </div>
                            <p class="errorText" v-if="errors.price">{{ errors.price }}</p>


                            <div class="groupForm">
                                <span>Số lượng</span>
                                <input type="number" class="inputGroup" v-model="selectedItem.SoLuongHang"
                                    name="quantytiDrink" id="" placeholder="Số lượng thức uống" autocomplete="off">
                            </div>
                            <p class="errorText" v-if="errors.quantity">{{ errors.quantity }}</p>
                            <div class="groupForm">
                                <span>Ghi chú</span>
                                <input type="text" class="inputGroup" v-model="selectedItem.GhiChu" name="noteDrink" id=""
                                    placeholder="Ghi chú thức uống" autocomplete="off">
                            </div>
                            <div class="groupForm2">
                                <span>Mô tả</span>
                                <textarea class="groupText" name="desDrink" id="" v-model="selectedItem.MoTaHH"
                                    placeholder="Mô tả thức uống" cols="20" autocomplete="off" spellcheck="false"
                                    rows="5"></textarea>
                            </div>
                            <p class="errorText" v-if="errors.des">{{ errors.des }}</p>

                        </div>
                    </div>
                </form>

            </a-modal>

            <!-- Modal Delete -->
            <a-modal style="top: 40px;" v-model:open="isModalDelete" title="Xóa thức uống" @ok="handleOkDelete"
                @cancel="handleCancelDelete" :ok-button-props="okButtonProps" okText="Xác nhận" cancelText="Đóng">
                <p>Bạn có chắc muốn xóa thức uống: {{ selectedItem.TenHH }}</p>
            </a-modal>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const nameDrink = ref('');
const priceDrink = ref(0);
const quantityDrink = ref(0);
const noteDrink = ref('');
const desDrink = ref('');
const image = ref();

const data = ref([]);


const handlePageChange = (page) => {
    currentPage.value = page;
    // Gọi hàm fetchData để cập nhật dữ liệu cho trang mới
    fetchData();
};

const fetchData = () => {
    axios.get('http://localhost:3000/product')
        .then(res => {
            data.value = res.data;
        })
        .catch((err) => console.log(err))
}

fetchData();



const isModal = ref(false);

const showModal = () => {
    isModal.value = true;
}
const handleCancel = () => {
    nameDrink.value = '';
    priceDrink.value = 0;
    quantityDrink.value = 0;
    noteDrink.value = '';
    desDrink.value = '';
    image.value = {};
    imageUpload.value = '../../public/Illustration/imageIcon.png';
    isModal.value = false;
}

const errors = ref({
    name: '',
    price: '',
    picture: '',
    quantity: '',
    des: '',
});

const validateName = () => {
    errors.value.name = nameDrink.value.trim() ? '' : 'Tên bắt buộc nhập';
};

const validateDes = () => {
    errors.value.des = desDrink.value.trim() ? '' : 'Mô tả bắt buộc nhập';
};

const validatePrice = () => {
    if (priceDrink.value <= 0) {
        errors.value.price = 'Giá phải là số nguyên dương'
    } else {
        errors.value.price = ''
    }
};

const validateQuantyti = () => {
    if (isNaN(quantityDrink.value) || quantityDrink.value <= 0) {
        errors.value.quantity = 'Số lượng phải là số dương'
    } else {
        errors.value.quantity = ''
    }
};


const handleOk = () => {
    validateName();
    validatePrice();
    // validatePicture();
    validateQuantyti();
    validateDes();

    const isValid = Object.values(errors.value).every((error) => !error);

    if (isValid) {
        const formData = new FormData();
        formData.append('image', image.value);
        formData.append('nameDrink', nameDrink.value);
        formData.append('priceDrink', priceDrink.value);
        formData.append('quantityDrink', quantityDrink.value);
        formData.append('noteDrink', noteDrink.value);
        formData.append('desDrink', desDrink.value);

        axios.post('http://localhost:3000/product', formData)
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error)

                }
                else if (res.data.update) {
                    handleCancel();

                    toast.info(res.data.update);
                    fetchData();
                }
                else {
                    handleCancel();

                    toast.success(res.data.message);
                    fetchData();


                }
            })
            .catch((err) => console.log(err))
    }
    else {
        console.log('Form is invalid. Please check your inputs.');
    }



}
// image
const imageUpload = ref('../../public/Illustration/imageIcon.png')

const handleImage = (e) => {

    if (e.target.files && e.target.files[0]) {
        imageUpload.value = URL.createObjectURL(e.target.files[0]);
        image.value = e.target.files[0];
    }
}

// Modal edit
const imageUploadEdit = ref('../../public/Illustration/imageIcon.png')

const isModalEdit = ref(false);
const selectedItem = ref(null);
const imageUpdate = ref();

const showModalEdit = (item) => {
    isModalEdit.value = true;
    selectedItem.value = item;
    imageUploadEdit.value = `http://localhost:3000/${item.HinhHH}`
}

const handleImageUpate = (e) => {

    if (e.target.files && e.target.files[0]) {
        imageUploadEdit.value = URL.createObjectURL(e.target.files[0]);
        imageUpdate.value = e.target.files[0];
    }
}
const handleCancelEdit = () => {
    isModalEdit.value = false;
    imageUpdate.value = null
}

const handleOkEdit = () => {
    isModalEdit.value = false;

    console.log("Noi dung", selectedItem.value.TenHH)

    const formData = new FormData();
    formData.append('image', imageUpdate.value);
    formData.append('nameDrink', selectedItem.value.TenHH);
    formData.append('priceDrink', selectedItem.value.Gia);
    formData.append('quantityDrink', selectedItem.value.SoLuongHang);
    formData.append('noteDrink', selectedItem.value.GhiChu);
    formData.append('desDrink', selectedItem.value.MoTaHH);
    axios.put('http://localhost:3000/product/' + selectedItem.value._id, formData)
        .then(res => {
            if (res.data.error) {
                toast.error(res.data.error)

            }
            else if (res.data.message) {
                handleCancel();

                toast.success(res.data.message);
                fetchData();
            }
        })
        .catch((err) => console.log(err))


}
// Modal delete
const isModalDelete = ref(false);

const handleCancelDelete = () => {
    isModalDelete.value = false;
}
const showModalDelete = (item) => {
    isModalDelete.value = true;
    selectedItem.value = item;
}
const handleOkDelete = () => {
    axios.delete('http://localhost:3000/product/' + selectedItem.value._id)
        .then(res => {
            if (res.data.error) {
                toast.error(res.data.error)

            }
            else if (res.data.message) {
                handleCancelDelete();

                toast.success(res.data.message);
                fetchData();
            }
        })
        .catch((err) => console.log(err))

}

const okButtonProps = {
    style: {
        background: 'red',  // Đặt màu đỏ cho nút "OK"
    },
};





</script>

<style lang="scss" scoped>
@import './AboutAdmin.scss';
</style>