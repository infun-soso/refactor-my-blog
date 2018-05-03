<template>
  <div class="pagination">
    <el-pagination
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="totalItem">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    totalItem: {
      type: Number,
      default: 50
    }
  }
}
</script>

<style>
.pagination {
  text-align: right;
}
</style>
