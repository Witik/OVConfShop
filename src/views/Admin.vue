<template>
    <b-container>
        <b-row>
            <b-col cols="2">
                <b-list-group>
                    <b-list-group-item to="/admin/products">
                        View Products
                    </b-list-group-item>
                    <b-list-group-item to="/admin/new">
                        New Product
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col class="md-layout-item">
                <router-view></router-view>
            </b-col>
        </b-row>
    </b-container>
</template>