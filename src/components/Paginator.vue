<template>
    <div class="v-paginator v-bg-blue v-rounded" ref="paginator">
        <button :class="['v-outline-none',  value === 0 ? 'v-disabled' : null]" :disabled="value === 0"
                @click.prevent="prev">
            &laquo;
        </button>
        <button :class="['v-outline-none',  length - value <= 9 ? 'v-disabled' : null]" @click.prevent="next"
                :disabled="length - value <= 9">&raquo;
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
        methods: {
            next() {
                this.$emit('input', parseInt(this.value) + 9)
            },
            prev() {
                this.$emit('input', parseInt(this.value) - 9)
            }
        }
    }
</script>