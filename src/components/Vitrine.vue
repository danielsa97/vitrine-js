<template>
    <div>
        <detail ref="product_details"/>
        <transition name="fade">
            <div class="v-container" v-if="products.length">
                <div class="v-row v-justify-content-center">
                    <search :products="products" @search="filterPreview"/>
                </div>
                <transition-group name="slide-fade" class="v-row v-justify-content-center">
                    <card v-for="product in preview" :key="product.id"
                          :product="product"
                          @detail="$refs.product_details.show($event)"/>
                </transition-group>
                <div class="v-row v-mt-2 v-justify-content-center">
                    <paginator v-model="startPreview" :length="products.length"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Paginator from "./Paginator";
    import Search from "./Search";
    import Card from "./Card";
    import Detail from "./Detail";

    export default {
        name: 'Vitrine',
        components: {Detail, Card, Search, Paginator},
        data() {
            return {
                products: [],
                startPreview: 0,
                preview: []
            };
        },
        watch: {
            startPreview(value) {
                this.filterPreview(this.products.slice(value, value + 9));
            }
        },
        mounted() {
            fetch(this.$root.$options.config.url).then(res => {
                res.json().then(data => {
                    this.products = Object.values(data.products);
                    this.filterPreview();
                });
            });
        },
        methods: {
            filterPreview(preview = []) {
                if (preview.length) this.preview = preview;
                else this.preview = this.products.slice(0, 9);
            }
        }
    }
</script>
