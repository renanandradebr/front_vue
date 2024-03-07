<template>
    <v-container>
        <HeaderOp/>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="search" label="Pesquisar" @input="searchContacts"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" @click="showContactDialog(null)">Adicionar Contato</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-list>
            <v-list-item v-for="(contact, index) in filteredContacts" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ contact.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ contact.phone }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="editContact(index)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="deleteContact(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
  
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title>{{ editedContactIndex === null ? 'Adicionar Contato' : 'Editar Contato' }}</v-card-title>
          <v-card-text>
            <v-text-field v-model="editedContact.name" label="Nome"></v-text-field>
            <v-text-field v-model="editedContact.phone" label="Telefone"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="saveContact">{{ editedContactIndex === null ? 'Adicionar' : 'Salvar' }}</v-btn>
            <v-btn color="red darken-1" text @click="closeContactDialog">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
import HeaderOp from '../components/HeaderOpções.vue';

  export default {
    data() {
      return {
        search: '',
        contacts: [
          { name: 'João', phone: '123456789', email:"joaoalmeida@email.com" },
          { name: 'Maria', phone: '987654321' }
        ],
        dialog: false,
        editedContactIndex: null,
        editedContact: {
          name: '',
          phone: '',
          email: ''
        }
      }
    },
    components: {
        HeaderOp,
    },
    computed: {
      filteredContacts() {
        return this.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.search.toLowerCase()) ||
          contact.phone.includes(this.search)
        );
      }
    },
    methods: {
      showContactDialog(index) {
        if (index === null) {
          this.editedContact = { name: '', phone: '' };
        } else {
          this.editedContact = { ...this.contacts[index] };
        }
        this.editedContactIndex = index;
        this.dialog = true;
      },
      closeContactDialog() {
        this.dialog = false;
      },
      saveContact() {
        if (this.editedContactIndex === null) {
          this.contacts.push(this.editedContact);
        } else {
          this.contacts.splice(this.editedContactIndex, 1, this.editedContact);
        }
        this.dialog = false;
      },
      editContact(index) {
        this.showContactDialog(index);
      },
      deleteContact(index) {
        this.contacts.splice(index, 1);
      },
      searchContacts() {
        // Fazer pesquisa em tempo real
      }
    }
  }
  </script>
  