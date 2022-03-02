<template>
    
<div class="auth-page">
    <div class="container page">
        <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">{{isLogin ? 'Sign in' : 'Sign up'}}</h1>
                <p class="text-xs-center">
                    <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
                    <nuxt-link v-else to="/login">Have an account?</nuxt-link>
                </p>

                <ul class="error-messages">
                    <template v-for="(value,name) in errors">
                        <li v-for="(item, index) in value" :key="index">{{name}}{{item}}</li>
                    </template>
                    
                </ul>

                <form @submit.prevent="onSubmit">
                    <fieldset class="form-group">
                        <input v-if="!isLogin" v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" v-model="user.email" type="email" placeholder="Email" required>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" v-model="user.password" type="password" placeholder="Password">
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right">
                        {{isLogin ? 'Sign in' : 'Sign up'}}
                    </button>
                </form>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import {login,register} from '@/api/user'
export default {
    name:'LoginIndex',
    data() {
        return {
            "user": {
                "username":'',
                "email": "",
                "password": ""
            },
            errors:{},       //错误信息
        }
    },
    computed:{
        isLogin(){
            return this.$route.name === 'login'
        }
    },
    methods:{
        //提交
        async onSubmit(){
            let submitFn = this.isLogin ? login : register
            try {
                let {data} = await submitFn({user:this.user})
            } catch (error) {
                console.dir(error)
                this.errors = error.response.data.errors
            }
        }
    }
}
</script>