<template>
    <form @submit.prevent="handleSubmit">
     <h3>Add New Contact</h3>
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
 
     <button type="submit" class="btn btn-dark btn-lg btn-block">Add Contact</button>
     
 </form>
 </template>
  
 <script>
     import axios from 'axios';
 
     export default {
         data() {
             return {
                 Name: "",
                 Email: "",
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
                const userId = localStorage.getItem("userId"); // Get userId from localStorage

                const response = await axios.post(
                    '/api/contacts',
                    {
                    "name": this.Name,
                    "email": this.Email,
                    "phone": this.Phone,
                    "address": this.Address,
                    "city": this.City,
                    "state": this.State,
                    "postcode": this.PostCode,
                    "cell": this.Cell
                    },
                    {
                    headers: {
                        "userId": userId // Include userId in the headers
                    }
                    }
                );
                this.$router.push('/');
            }

         }
     }
 </script>