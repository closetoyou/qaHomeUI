<template>
  <el-main>
    <el-col :span="24">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card>
            <div slot="header">
              <el-input
                placeholder="输入关键字进行过滤"
                prefix-icon="el-icon-search"
                size="small"
                style="top: 5px">
              </el-input>
            </div>

          </el-card>

        </el-col>
        <el-col :span="18">
          <el-card>
            <div>
              <el-input
                placeholder="输入关键字进行过滤"
                prefix-icon="el-icon-search"
                size="small"
                style="top: 5px">
              </el-input>
            </div>

          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-main>
</template>

<script>
    import {versionList} from '@/api/versionInfo';
</script>

<style scoped>
  span{
    margin: 0px;
    padding: 0px;
    border: 0px none;
    font: inherit;
    vertical-align: baseline;
  }
</style>
