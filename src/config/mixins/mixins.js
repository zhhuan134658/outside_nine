const baseMixin = {
  data() {
    return {
      drag: true,
      searchList: [],
      titleList: [], //设置表格的显示字段
      columns: [], //表格头部数据
      dataSource: [], //表格列表数据
      currentPage: 1, //当前页
      total: 0, //总数
      pageSize: 10, //每页条数
      selectedRows: [], //表格选中的行数据
    };
  },
  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
      this.searchList = [];
      console.log('显示字段排序', this.searchList);
    },
    //分页
    onShowSizeChange(currentPage, pageSize) {
      console.log(currentPage, pageSize);
      this.currentPage = currentPage;
      this.pageSize = pageSize;
      this.getTableList();
      this.$refs.comTable.clearData();
    },
    pageChange(page, pageSize) {
      console.log(page, pageSize, '14');
      this.currentPage = page;
      this.pageSize = pageSize;
      this.getTableList();
      this.$refs.comTable.clearData();
    },
    //搜索
    searchClick() {
      console.log('搜索区数据:', this.searchForm);
      this.currentPage = 1;
      this.getTableList();
      this.$refs.comTable.clearData();
    },
    getMsgFormSon(data) {
      this.selectedRows = data;
      console.log('选中的数据', this.selectedRows);
      this.$refs.comTable.clearData();
    },
  },
};

export default baseMixin;
