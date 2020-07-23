<template>
    <div class="v-paginator v-bg-blue v-rounded" ref="paginator">
        <button class="btn v-outline-none v-disabled" disabled>
            {{currentPage}} / {{totalPage}}
        </button>
        <button :class="['v-outline-none',  value === 0 ? 'v-disabled' : null]"
                :disabled="value === 0"
                @click.prevent="first">
            &laquo;
        </button>
        <button v-if="currentPage -1 > 0" @click.prevent="prev" class="v-outline-none" :disabled="value === 0">
            &lsaquo;
        </button>
        <button v-if="currentPage + 1  <= totalPage" class="v-outline-none" @click.prevent="next">
            &rsaquo;
        </button>
        <button :class="['v-outline-none',  length - value <= 9 ? 'v-disabled' : null]" @click.prevent="last"
                :disabled="length - value <= 9"> &raquo;
        </button>
    </div>
</template>

<script>
    export default {
        name: "Paginator",
        props: {
            value: undefined,
            length: {
                type: Number,
                required: true
            }
        },
        mounted() {
            let {mainColor} = this.$root.$options?.config;
            if (mainColor) this.$refs.paginator.style.background = mainColor;
        },
        computed: {
            totalPage() {
                return Math.ceil(this.length / 9);
            },
            currentPage() {
                return Math.floor(this.value / 9) + 1;
            }
        },
        methods: {
            first() {
                this.$emit('input', 0)
            },
            last() {
                this.$emit('input', this.length - (this.length - (9 * (this.totalPage - 1))))
            },
            next() {
                this.$emit('input', parseInt(this.value) + 9)
            },
            prev() {
                this.$emit('input', parseInt(this.value) - 9)
            }
        }
    }
</script>