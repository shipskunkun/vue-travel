## what  can slot  do?

主要是为了自定义子组件中的内容


## 占位


就相当于定义组件时候，我还没想好子组件里面可能是什么，我先用 slot 占着

打个比方，子组件是模特，我知道今天戴的帽子，今天穿的鞋，但是我不知道今天穿什么衣服

那么我先占个位置，反正是要穿衣服的，这个位置先填写 slot

然后在使用的时候写上，今天穿运动风 | 淑女风 | 颓废风 都可


  
如果 使用组件的时候，组件 template中没有 包含 一个``` <slot> ```元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。

这样写

```
<navigation-link>
	<div>巴拉巴拉不会出现</div>
</navigation-link>



<model>
    <div>今天走休闲风</div>
</model>

Vue.component('model', {
    template: `
        <div>
            <p>帽子</p>
            <slot></slot>
            <p>鞋子</p>
        </div>
    `
})
```




## 安排默认

假如我有个 slot 标签  
里面放了一些东西，就代表，如果我在父组件没传slot给子组件时，默认显示 slot 标签内部的东西


比如

```

<model>
</model>

Vue.component('model', {
	template: `
        <div>
            <p>帽子</p>
            <slot>默认值</slot>
            <p>鞋子</p>
        </div>
	`
})

```
那就是默认运动服，在使用组件，什么都没传值的时候，写这个值

## 具名插槽


```
//废弃但是还能用的
<div slot="a"></div>
<slot name="a"></slot


//注意 v-slot 只能添加在一个 <template> 上 (只有一种例外情况)，这一点和已经废弃的 slot 特性不同。

<template v-slot:header>
<slot name="header"></slot>
```
## 2.6+中保留slot 但是使用v-slot


```
<model>
    <template v-slot:head>
        <p>我是头部</p>
    </template>
    <div slot="body">我会显示么</div>
    <!-- <template v-slot="foot">//不会显示 -->
    <template v-slot:foot>
        <p>我是尾部</p>
    </template>
</model>
 
            
Vue.component('model', {
    template: `
        <div>
            <slot name="head"></slot>
            <slot name="body"></slot>
            <slot name="foot"></slot>
        </div>
    `
})

```


## 如何向插槽中传值？
注意  
这样是不会有值的  
是传递给modal, 而不是在model组件内部定义的  

``` js
<model :name="test">
    <template v-slot:head>
        <p>{{ name }}</p>
    </template>
</model>

```








