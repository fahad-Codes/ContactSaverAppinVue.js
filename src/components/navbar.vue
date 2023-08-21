<template>
    <div class="vue-tempalte">
        <!-- Navigation -->
        <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
            <div class="container">
            <a class="navbar-brand float-left" target="_blank">
                Contact Saver App
            </a>
            <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                <router-link class="nav-link pr-3" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
          <button class="btn btn-primary" @click="logout">Sign Out</button>
                </li>
                <li class="nav-item">
                <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
</template>
 
<script>
    export default {
        name: "navbar",
        data() {
            return {}
        },
        methods: {
            logout() {
                const token = localStorage.getItem('token');
                if (token) {
                    localStorage.clear();
                    this.$router.push('/login');
                }
            }
        }
    }
</script>