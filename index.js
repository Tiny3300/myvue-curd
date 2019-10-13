window.onload = function () {
    new Vue({
        el: "#com",
        data() {
            return {
                items: [
                    {
                        id: 1,
                        title: "燃烧王座",
                        user: "梦想",
                        dates: "2016-05-02"
                    },
                    {
                        id: 2,
                        title: "冰封",
                        user: "王小二",
                        dates: "2019-05-09"
                    }
                ],
                addItems: {
                    title: '',
                    user: '',
                    dates: ''
                },
                editItems: {
                    title: '',
                    user: '',
                    dates: ''
                },
                lay: false
            }
        },
        methods: {
            add() {
                if (!this.addItems.title) {
                    alert('标题不能为空!')
                    return
                };
                var _id = Math.max(...this.items.map((v) => {
                    return v.id
                })) + 1
                this.items.push(
                    {
                        title: this.addItems.title,
                        user: this.addItems.user,
                        dates: this.addItems.dates,
                        id: _id
                    }
                )
                // this.addItems = {}
            },
            del(index) {
                this.items.splice(index, 1);
            },
            // 点击编辑
            edit(item) {
                this.lay = true;
                // console.log(index,item)
                this.editItems = {
                    title: item.title,
                    user: item.user,
                    dates: item.dates,
                    id:item.id

                }
            },
            //确认编辑
            update() {
                for (var i = 0; i < this.items.length; i++) {
                    if (this.items[i].id == this.editItems.id) {
                        this.items[i] = this.editItems;
                        this.lay = false;
                    }
                }
            }
        }
    })
}