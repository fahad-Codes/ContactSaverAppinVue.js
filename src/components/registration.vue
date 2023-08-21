<template>
   <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <div class="row">
        <!-- First Column -->
        <div class="col-md-6">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" v-model="Name" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="Email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="Password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Address</label>
                <input type="text" v-model="Address" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Cell</label>
                <input type="text" v-model="Cell" class="form-control form-control-lg" />
            </div>
        </div>

        <!-- Second Column -->
        <div class="col-md-6">
            <div class="form-group">
                <label>City</label>
                <input type="text" v-model="City" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>State</label>
                <input type="text" v-model="State" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Post Code</label>
                <input type="text" v-model="PostCode" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" v-model="Phone" class="form-control form-control-lg" />
            </div>
        </div>
    </div> <br />

    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

    <p class="forgot-password text-right">
        Already registered 
        <router-link :to="{name: 'login'}">sign in?</router-link>
    </p>
</form>
</template>
 
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                Name: "",
                Email: "",
                Password: "",
                Phone: "",
                Address: "",
                City: "",
                State: "",
                PostCode: "",
                Cell: ""
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post('/api/users/register', {
                    "name": this.Name,
                    "email": this.Email,
                    "password": this.Password,
                    "phone": this.Phone,
                    "address": this.Address,
                    "city": this.City,
                    "state": this.State,
                    "postCode": this.PostCode,
                    "cell": this.Cell
                });
                this.$router.push('/login');
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