<template>
    <div class="v-modal" ref="modal" tabindex="1">
        <button @click="hidden" class="v-btn v-btn-close  v-outline-none">&times;</button>
        <div class="v-modal-body v-p-1">
            <div :style="colorTextModal ? `color:${colorTextModal}` : null" class="v-container v-text-white"
                 v-if="Object.keys(product).length">
                <div class="v-row">
                    <div class="v-card">
                        <img :src="image"
                             @load="removeLoading"
                             ref="image"
                             :alt="product.name"
                             class="v-img-fluid v-w-100 v-loading v-rounded">
                    </div>
                    <div class="v-detail-column">
                        <h3>{{product.name}}</h3>
                        Loja: {{product.sellerName}}<br>
                        <div v-if="product.ratingAverage">
                            Avaliação:
                            <b class="v-text-yellow">
                                &#x2605;{{parseFloat(product.ratingAverage).toFixed(1)}}
                            </b>
                        </div>
                        R$<span class="v-money"> {{product.offerPrice}}</span><br>
                        <b v-if="product.installment">Em {{product.installment}}</b>
                        <div>
                            <h5>FORMAS DE PAGAMENTO DISPONÍVEIS</h5>
                            <table class="v-table">
                                <tr v-for="(type, idx) in product.paymentOptions" :key="idx">
                                    <th class="v-text-right">{{idx.replace('_', ' ')}}</th>
                                    <td>{{type.price | decimalToMoney}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data() {
            return {
                product: {}
            }
        },
        filters: {
            decimalToMoney(decimal) {
                if (decimal) {
                    return (decimal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
                }
            }
        },
        mounted() {
            let {bgModal} = this.$root.$options?.config;
            if (bgModal) this.$refs.modal.style.background = bgModal;
        },
        computed: {
            colorTextModal() {
                return this.$root.$options?.config?.colorTextModal;
            },
            image() {
                return this.product?.image?.extraLarge ?? this.product?.image?.large;
            }
        },
        methods: {
            removeLoading({target}) {
                target.classList.remove('v-loading');
            },
            show(product) {
                this.product = product;
                this.$refs.modal.classList.add('v-show-modal');
            },
            hidden() {
                this.$refs.modal.classList.remove('v-show-modal');
                Object.assign(this.$data, this.$options.data.apply(this));
                this.$refs.image.classList.add('v-loading');
            }
        }
    }
</script>