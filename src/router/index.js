// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Table from '../components/Table.vue';
import Home from '../views/Home.vue';
import Create from '../views/Create.vue';
import Files from '../views/Files.vue';
import Data from '../views/Data.vue';
import Application from '../views/Application.vue';
import Workspace from '../views/Workspace.vue';
import Menu from '../views/Menu.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'table',
      component: Table
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/files',
      name: 'files',
      component: Files
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/application',
      name: 'application',
      component: Application
    },
    {
      path: '/Workspace',
      name: 'Workspace',
      component: Workspace
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
  ]
})
export default router
