<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link class="nav-link" 
                :class="{active:tab=='your_feed'}"
                exact
                :to="{
                  name:'home',
                  query:{
                    tab:'your_feed'
                  }
                }">Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link"
                :class="{active:tab=='global_fee'}"
                exact
                :to="{
                  name:'home',
                  query:{
                    tab:'global_fee'
                  }
                }">Global Fee</nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link class="nav-link"
                :class="{active:tab=='tag'}"
                exact
                :to="{
                  name:'home',
                  query:{
                    tab:'tag',
                    tag:tag
                  }
                }">#{{tag}}</nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{
                    name: 'profile',
                    params: {
                      username: article.author.username,
                    },
                  }"
                >
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>

            <nuxt-link
              class="preview-link"
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                class="tag-pill tag-default"
                :to="{
                  name: 'home',
                  query: {
                    tag: item,
                    tab:'tag'
                  },
                }"
                v-for="item in tags"
                :key="item"
              >
                {{ item }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from "@/api/article";
import { getTags } from "@/api/tag";
import { mapState } from "vuex";
export default {
  middleware: "authenticated",
  name: "HomeIndex",
  watchQuery: ["tag","tab"],
  async asyncData({ query }) {
    const { tag } = query;
    const limit = 2;
    const page = Number.parseInt(query.page || 1);
    const [articleRes, TagRes] = await Promise.all([
      getArticles({
        limit,
        offset: (page - 1) * limit,
        tag: query.tag,
      }),
      getTags(),
    ]);
    // const { data } = await getArticles({
    //   limit,
    //   offset: (page - 1) * limit,
    // });
    // const {data : tagData} = await getTags()
    const { articles, articlesCount } = articleRes.data;
    const { tags } = TagRes.data;
    return {
      // articles: data.articles,
      // articlesCount: data.articlesCount,
      // tags:tagData.tags
      articles,
      articlesCount,
      tags,
      tag, //query 路由的tag
      tab: query.tab || 'global_fee'    //选中的标签
    };
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>