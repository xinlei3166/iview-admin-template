<template>
    <div>
        <MyTable :columns="columns" :data="data"></MyTable>
        <Paginator ref="paginator" :pageTotal="data.length"></Paginator>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import MyTable from "@/components/MyTable.vue"
    import Paginator from "@/components/Paginator.vue"

    @Component({
        components: { MyTable, Paginator }
    })
    export default class Pic extends Vue {
        columns = [
            {
                type: "index",
                width: 60,
                align: "center"
            },
            {
                title: "Name",
                key: "name",
                sortable: true,
                render: (h: any, params: any) => {
                    return h("div", [
                        h("Icon", {
                            props: {
                                type: "person"
                            }
                        }),
                        h("strong", params.row.name)
                    ]);
                }
            },
            {
                title: "Age",
                key: "age",
                tooltip: true,
                sortable: true,
            },
            {
                title: "Address",
                key: "address",
                tooltip: true,
                sortable: true,
            },
            {
                title: "Action",
                key: "action",
                tooltip: true,
                width: 150,
                align: "center",
                render: (h: any, params: any) => {
                    return h("div", [
                        h("Button", {
                            props: {
                                type: "primary",
                                size: "small"
                            },
                            style: {
                                marginRight: "5px"
                            },
                            on: {
                                click: () => {
                                    this.show(params.index)
                                }
                            }
                        }, "View"),
                        h("Button", {
                            props: {
                                type: "error",
                                size: "small"
                            },
                            on: {
                                click: () => {
                                    this.remove(params.index)
                                }
                            }
                        }, "Delete")
                    ]);
                }
            }
        ]

        data = [
            {
                name: "John Brown",
                age: 18,
                address: "New York No. 1 Lake Park"
            },
            {
                name: "Jim Green",
                age: "241111111111112121212212113123123131312312312312312312312313122312312313222",
                address: "London No. 1 Lake Park"
            },
            {
                name: "Joe Black",
                age: 30,
                address: "Sydney No. 1 Lake Park"
            },
            {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            },
            {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            },
            {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            },
            {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            },
            {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            },
            {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park"
            },
        ]

        show(index: number) {
            this.$Modal.info({
                title: "User Info",
                content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
            })
        }

        remove(index: number) {
            this.data.splice(index, 1);
        }
    }
</script>

<style lang="stylus" scoped>
</style>
