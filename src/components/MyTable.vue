<template>
    <Card>
        <Table :height="height" :highlight-row="highlightRow" :no-data-text="noDataText" :no-filtered-data-text="noFilteredDataText"
               :columns="columns" :data="data"></Table>
    </Card>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component
    export default class MyTable extends Vue {
        @Prop({type: Number, default: 520}) private height!: number
        @Prop({type: Boolean, default: true}) private highlightRow!: boolean
        @Prop({type: String, default: '暂无数据'}) private noDataText!: string
        @Prop({type: String, default: '没有找到你要搜索的数据'}) private noFilteredDataText!: string
        @Prop({type: Array, required: true}) private columns!: object[]
        @Prop({type: Array, required: true}) private data!: object[]
    }
</script>

<style scoped>

</style>
