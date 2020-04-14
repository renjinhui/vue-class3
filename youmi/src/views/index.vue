<template>
    <div>
        <router-view></router-view>
        <ul>
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/classify">分类页</router-link>
          </li>
          <li>
            <router-link to="/cart">购物车页</router-link>
          </li>
          <li>
            <router-link to="/user">个人中心页</router-link>
          </li>
        </ul>
    </div>
</template>

