<template>
  <el-main>
    <el-col :span="24">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card>
            <div slot="header">
              <el-col :span="16">
                <el-input
                  placeholder="请输入关键字"
                  prefix-icon="el-icon-search"
                  size="small">
                </el-input>
              </el-col>
              <el-tooltip class="item" effect="dark" content="添加项目" placement="top">
                <el-button
                  type="primary"
                  size="mini"
                  round>添加项目
                </el-button>
              </el-tooltip>
            </div>
            <div>
              <tree
                :setting="setting"
                :nodes="nodes"
                @onClick="onClick"
                @onCheck="onCheck"
                @onCreated="handleCreated"
              />
            </div>

          </el-card>

        </el-col>
        <el-col :span="18">
          <el-card>
            <div>
              <el-input
                placeholder="输入关键字进行过滤"
                prefix-icon="el-icon-search"
                size="small">
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
  import tree from "vue-giant-tree";


  // versionList(0,0).then(res => {
  //   if (res.code == 200){
  //       treeData = res.data;
  //   }
  // }).catch(err => {
  //
  // })
  const simpleData = [
    { id: 1, pid: 0, name: "随意勾选 1", open: true },
    { id: 11, pid: 1, name: "随意勾选 1-1", open: true },
    { id: 111, pid: 11, name: "随意勾选 1-1-1" },
    { id: 112, pid: 11, name: "随意勾选 1-1-2" },
    { id: 12, pid: 1, name: "随意勾选 1-2", open: true },
    { id: 121, pid: 12, name: "随意勾选 1-2-1" },
    { id: 122, pid: 12, name: "随意勾选 1-2-2" },
    { id: 2, pid: 0, name: "随意勾选 2", checked: true, open: true },
    { id: 21, pid: 2, name: "随意勾选 2-1" },
    { id: 22, pid: 2, name: "随意勾选 2-2", open: true },
    { id: 221, pid: 22, name: "随意勾选 2-2-1", checked: true },
    { id: 222, pid: 22, name: "随意勾选 2-2-2" },
    { id: 23, pid: 2, name: "随意勾选 2-3" }
  ];

  const dataQueue = [simpleData];

  export default {
    components: {
        tree
    },
    data() {
      return {
        showIndex: 0,
        ztreeObj: null,
        setting: {
          check: {
            enable: false
          },
          removeTitle: "删除",
          renameTitle: "修改",
          showRenameBtn: true,
          showRemoveBtn: true,
          data: {
            simpleData: {
              enable: true,
              pIdKey: "pid",
              idKey: "id",
              nameKey: "name"
            }
          },
          view: {
            showIcon: false,
            addHoverDom: this.addHoverDom,
            removeHoverDom: this.removeHoverDom,
          }
        }
      };
    },
    computed: {
      nodes: function() {
        return dataQueue[this.showIndex];
      }
    },
    methods: {
      addHoverDom(treeid, treeNode) {
        const item = document.getElementById(`${treeNode.tId}_a`);
        if(item && !item.querySelector('.tree_extra_btn')){
          const btn = document.createElement('sapn');
          btn.id = `${treeid}_${treeNode.id}_btn`;
          btn.classList.add('tree_extra_btn');
          btn.innerText = '删除';
          btn.addEventListener('click', (e) => {
            e.stopPropagation()
            this.clickRemove(treeNode)
          })
          item.appendChild(btn);
        }
      },
      removeHoverDom(treeid, treeNode) {
        const item = document.getElementById(`${treeNode.tId}_a`);
        if(item){
          const btn = item.querySelector('.tree_extra_btn');
          if(btn){
            item.removeChild(btn)
          }
        }
      },
      clickRemove(treeNode) {
        console.log('remove', treeNode)
        this.ztreeObj && this.ztreeObj.removeNode(treeNode)
      },
      onClick: function(evt, treeId, treeNode) {
        // 点击事件
        console.log(evt.type, treeNode);
      },
      onCheck: function(evt, treeId, treeNode) {
        // 选中事件
        console.log(evt.type, treeNode);
      },
      handleCreated: function(ztreeObj) {
        this.ztreeObj = ztreeObj;
        // onCreated 中操作ztreeObj对象展开第一个节点
        ztreeObj.expandNode(ztreeObj.getNodes()[0], true);
      },
    }
  };

</script>

<style>
  span{
    margin: 0px;
    padding: 0px;
    border: 0px none;
    font: inherit;
    vertical-align: baseline;
  }
  .tree_extra_btn{
    display: inline-block;
    padding: 0 3px;
    color: red;
  }
</style>
