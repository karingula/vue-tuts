<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit.key">{{ fruit }}</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js'
export default {
    mixins: [fruitMixin],
    created() {
        console.log('Inside List Created')
    }
}
</script>

<style>

</style>
