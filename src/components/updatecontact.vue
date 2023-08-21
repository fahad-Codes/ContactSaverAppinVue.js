<template>
    <form @submit.prevent="handleSubmit" v-if="Contact">
      <h3>Edit Contact</h3>
      <div class="row">
        <!-- First Column -->
        <div class="col-md-6">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" v-model="this.Contact.name" class="form-control form-control-lg" />
          </div>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="this.Contact.email" class="form-control form-control-lg" />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input type="text" v-model="this.Contact.address" class="form-control form-control-lg" />
          </div>
          <div class="form-group">
            <label>Cell</label>
            <input type="text" v-model="this.Contact.cell" class="form-control form-control-lg" />
          </div>
        </div>
  
        <!-- Second Column -->
        <div class="col-md-6">
          <div class="form-group">
            <label>City</label>
            <input type="text" v-model="this.Contact.city" class="form-control form-control-lg" />
          </div>
          <div class="form-group">
            <label>State</label>
            <input type="text" v-model="this.Contact.state" class="form-control form-control-lg" />
          </div>
          <div class="form-group">
            <label>Post Code</label>
            <input type="text" v-model="this.Contact.postcode" class="form-control form-control-lg" />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="text" v-model="this.Contact.phone" class="form-control form-control-lg" />
          </div>
        </div>
      </div>
      <br />
  
      <button type="submit" class="btn btn-dark btn-lg btn-block">Update Contact</button>
    </form>
    <p v-else>Loading...</p>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['contactId'],
    data() {
        return {
        Contact: Object,
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
        City: '',
        State: '',
        PostCode: '',
        Cell: ''
        };
    },
    async created() {
        if (this.contactId) {
            const response = await axios.get(
          `/api/contacts/${this.contactId}`,
          {
            headers: {
              userId: localStorage.getItem("userId"),
            },
          }
        );
        this.Contact = response.data;
        console.log(this.Contact);
        }
    },
    
    methods: {
      async handleSubmit() {
  
        const response = await axios.put(
          `/api/contacts/${this.Contact.id}`,
          {
            name: this.Contact.name,
            email: this.Contact.email,
            phone: this.Contact.phone,
            address: this.Contact.address,
            city: this.Contact.city,
            state: this.Contact.state,
            postcode: this.Contact.postcode,
            cell: this.Contact.cell,
          },
          {
            headers: {
              userId: this.Contact.userId,
            },
          }
        );
        console.log(response);
        this.$router.push('/');
      },
    },
  };
  </script>
  