<template>
    <div ref="card" class="v-card v-rounded v-bg-light">
        <div class="v-rating" v-if="product.ratingAverage">
            &#x2605;{{parseFloat(product.ratingAverage).toFixed(1)}}
        </div>
        <img :src="product.image.large" class="v-img-fluid v-rounded" loading="lazy">
        <div class="v-text-center v-details">
            <button class="v-btn" ref="btn_detail" @click="$emit('detail', product)">Detalhes</button>
        </div>
        <div class="v-info">
            {{product.name.substr(0, 50)}}
            <span v-if="product.name.length>=50">...</span>
            <br>
            <div>
                R$<span class="v-money"> {{product.offerPrice}}</span>
            </div>
            <b>Loja:</b> {{product.sellerName}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        mounted() {
            let {bgCard, mainColor} = this.$root.$options?.config;
            if (bgCard) this.$refs.card.style.background = bgCard;
            if (mainColor) this.$refs.btn_detail.style.background = mainColor;
        }
    }
</script>