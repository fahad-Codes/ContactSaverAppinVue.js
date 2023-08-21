<template>
    <div class="contact-card">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">Address: {{ user.address }}</p>
          <p class="card-text">{{ user.city }}, {{ user.state }}, {{ user.postcode }}</p>
          <p class="card-text">Phone: {{ user.phone }}</p>
          <p class="card-text">Cell: {{ user.cell }}</p>
          <p class="card-text">Email: {{ user.email }}</p>
          <button class="btn btn-primary" @click="editContact">Update</button>
          <button class="btn btn-danger" @click="deleteContact">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object, // Pass the contact data as a prop
    },
    methods: {
      editContact() {
        this.$emit('edit-Contact', this.user);
      },
      deleteContact() {
        this.$emit('delete-Contact', this.user.id);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  