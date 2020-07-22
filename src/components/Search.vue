<template>
    <div class="search-box">
        <input type="text" @input="search"
               class="v-form-control v-border v-rounded v-outline-none" placeholder="Buscar produto..."/>
        <span v-if="filter.length">{{filter.length}} Resultados...</span>
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                filter: []
            }
        },
        methods: {
            search({target}) {
                let search = (target.value ?? '').toLowerCase();
                this.filter = [];
                if (search) {
                    this.filter = this.products.filter(({name}) => {
                        name = name.toLowerCase();
                        return name.indexOf(search) !== -1 || String(name).includes(search);
                    });
                }
                this.$emit('search', this.filter);
            }
        }
    }
</script>