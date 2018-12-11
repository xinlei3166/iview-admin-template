<template>
    <div class="paginator-style" style="">
        <Page :total="pageTotal" :current="current" :page-size="pageSize" :page-size-opts="[10, 20, 30, 50, 100]" show-total show-sizer show-elevator transfer/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component
    export default class Main extends Vue {
        @Prop({type: Number, required: true}) private pageTotal!: number
        @Prop({type: Number, default: 1}) private current!: number
        @Prop({type: Number, default: 10}) private pageSize!: number
    }
</script>

<style lang="stylus" scoped>
    .paginator-style
        margin-top: 18px
        display: flex
        align-items: center
        justify-content: center
</style>
