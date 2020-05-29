Page({
 data :{
   //文本框数据模型
   input:'',
   //任务清单数据模型
   dothese:[
     { name:'学习罗辑思维' , completed: false},
     { name:'学习精英日课' , completed: true},
     { name:'学习硅谷来信' , completed: false},
    ],
   leftCount:2,
   allCompleted:false
 },

 //按钮点击时，执行操作
  inputChangeHander:function(e){
  this.setData({input: e.detail.value})
  },
//将文本框的值添加到列表
  addTodoHandle:function(){
    if(!this.data.input) return
    var dothese=this.data.dothese
   dothese.push({ name:this.data.input, completed:false
    })
    this.setData({dothese:dothese ,  input:'' ,leftCount:this.data.leftCount+1
  })
 },
//选中操作
 toggleTohandle(e){
 var item=this.data.dothese[e.currentTarget.dataset.index]
 item.completed=!item.completed
 var leftCount=this.data.leftCount+ ( item.completed ? -1 : 1)
 this.setData({ dothese:this.data.dothese , leftCount: leftCount})
 },
 //清除已完成项目的操作
 removeHandle(e){
     var dothese=this.data.dothese
     var item=dothese.splice(e.currentTarget.dataset.index, 1)[0]
     var leftCount=this.data.leftCount - ( item.completed ? 0 : 1)
     this.setData({ dothese : dothese ,leftCount :leftCount})
 },
//全部勾选操作
 toggleAllHnadle(){
   this.data.allCompleted=!this.data.allCompleted
   var dothese = this.data.dothese
   var that =this
   dothese.forEach(function (item)
   { item.completed = that.data.allCompleted})
   var leftCount = this.data.allCompleted ? 0 :this.data.todos
   this.setData({ dothese :dothese , leftCount:leftCount})
   },
//全部清除操作
  clearHandle(){
   var dothese=this.data.dothese.filter(function(item){
   return !item.completed})
   this.setData({ dothese :dothese })
   }
   
})