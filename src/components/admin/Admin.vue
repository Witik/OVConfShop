<template>
    <div>
        <div class="admin-new m-2">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <ul class="admin-menu list-group">
                            <router-link to="/admin/products" class="list-group-item list-group-item-action">
                                View Products
                            </router-link>
                            <router-link to="/admin/new" class="list-group-item list-group-item-action">
                                New Product
                            </router-link>
                        </ul>
                    </div>
                    <div class="col-10">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>