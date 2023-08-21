<script setup>
import "../components/navbar.vue"
import ContactCard from '../components/contactcard.vue';
import axios from 'axios';
</script>

<template>
  <div class="grid-container">
    <h1>Contact List</h1>
    <router-link class="btn btn-outline-primary" to="/addcontact">Save New Contact</router-link>
    <br />
    <div v-if="users" class="grid">
      <div v-for="user in users" :key="user.id" class="grid-item">
        <contact-card :user="user" @edit-contact="editContact" @delete-contact="deleteContact" />
      </div>
    </div>
    <h3 v-else>No Contacts Saved!</h3>
  </div>
</template>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Display three cards in one row */
  gap: 20px; /* Adjust the gap between cards */
  justify-items: center; /* Center the items horizontally */
}

.grid-item {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 20px;
  border-radius: 15px;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
}
</style>


<script>
  export default {
      name: "HomeView",
      components: {
        'contact-card': ContactCard,
      },
      data() {
          return {
            users: null
          }
      },
    methods: {
      async editContact(contacts) {
        // In your HomeView.vue component or wherever you're navigating from
        this.$router.push({ name: 'updatecontact', params: { contactId: contacts.id } });
      },
      deleteContact(contactId) {
        const response = axios.delete('/api/contacts/'+contactId,
            {
            headers: {
              "userId": localStorage.getItem("userId")
            }
            }
        );
        console.log(response);
        window.location.reload();
      }
    },

    async created() {
        const token = localStorage.getItem("token");
        if (token) {
          const response = axios.get( "/api/contacts", { 
            headers: {
              "userId": localStorage.getItem("userId")
          }});
          this.users = (await response).data;
        } 
        else {
          this.$router.push('/login');          
        }
      }

      
  }
</script>