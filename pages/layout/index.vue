<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">
              conduit  
            </nuxt-link>
        <!-- <a class="navbar-brand" href="index.html"></a> -->
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link active" to="/">
              Home  
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Article  
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/setting">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">
              <a class="nav-link" href="">Sign in</a>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">
              <a class="nav-link" href="">Sign up</a>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/:123">
              <img class="user-pic" src="https://api.realworld.io/images/smiley-cyrus.jpeg">
              umbraciCC
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 子路由 -->
    <nuxt-child />

    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name:'LayoutIndex'
};
</script>