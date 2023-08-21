<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign In</h3> 
        <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="email" class="form-control form-control-lg" />
        </div> 
        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" class="form-control form-control-lg" />
        </div> <br />
        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
    </form>
</template>
 
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                email: "",
                password: "",
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post("/api/users/login", {
                    "email": this.email,
                    "password": this.password
                });
                localStorage.setItem("token", response.data.token.token);
                localStorage.setItem("userId", response.data.user.userId);
                this.$router.push('/');
            }
        },
        
        created() {                
            const token = localStorage.getItem("token");
            if (token) {
                this.$router.push('/');
            }
        }
    }
</script>