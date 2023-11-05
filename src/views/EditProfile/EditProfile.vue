<template>
    <div class="containPage">
        <div class="titlePage">
            <h2>Edit Profile</h2>
        </div>
        <div class="contentPage">
            <section>
                <div class="container">

                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <img src="https://i.pinimg.com/564x/d8/fe/7f/d8fe7f327435319dcc06217991ca4bb3.jpg"
                                        alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
                                    <h5 class="my-3">Hoàng Trân</h5>
                                    <p class="text-muted mb-1">Khách hàng</p>
                                    <p class="text-muted mb-4">Đại học Cần Thơ</p>
                                    <div class="d-flex justify-content-center mb-2">
                                        <button type="button" class="btn btn-primary"><i class="fa-solid fa-image"></i>
                                            Change</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3 ">
                                            <p class="lableGroup">Họ tên</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="input-group">

                                                <input type="text" class="form-control inputGroup" value="Hoàng Trân">
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-3 ">
                                            <p class="lableGroup">Email</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="input-group">

                                                <input type="text" class="form-control inputGroup" value="tran@gmail.com">
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-3 ">
                                            <p class="lableGroup">Phone</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="input-group">

                                                <input type="text" class="form-control inputGroup" value="0976543215">
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-3 ">
                                            <p class="lableGroup">Địa chỉ</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="input-group">

                                                <input type="text" class="form-control inputGroup" value="Đại học Cần Thơ">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-secondary m-2">Close</button>

                                <button class="btn btn-primary m-2">Save</button>
                            </div>



                        </div>
                    </div>
                </div>
            </section>


        </div>

    </div>
</template>

<script setup></script>
<style lang="scss" scoped>
@import'./EditProfile.scss';
</style>