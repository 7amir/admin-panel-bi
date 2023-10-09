<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
}
</script>

<template>
  <v-card>
    <v-layout class="navigation-drawer">
      <v-navigation-drawer permanent location="right">

        <ul class="list__slide-bar">
          <li>
            <router-link to="/home">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 36 36">
                <path fill="currentColor"
                  d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z"
                  class="clr-i-outline clr-i-outline-path-1" />
                <path fill="currentColor"
                  d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z"
                  class="clr-i-outline clr-i-outline-path-2" />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              خانه
            </router-link>
          </li>

          <li>
            <router-link to="/create">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 50 50">
                <path fill="currentColor"
                  d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z" />
                <path fill="currentColor" d="M16 24h18v2H16z" />
                <path fill="currentColor" d="M24 16h2v18h-2z" />
              </svg>
              ایجاد کردن
            </router-link>
          </li>

          <li>
            <router-link to="/files">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <path fill="currentColor"
                  d="M3.501 6.683a.76.76 0 0 1 .003.067V9h5.918c.331 0 .649-.132.883-.366L12.19 6.75l-1.883-1.884a1.25 1.25 0 0 0-.884-.366H5.75a2.25 2.25 0 0 0-2.249 2.183ZM2.004 9.826A.748.748 0 0 1 2 9.75v-3A3.75 3.75 0 0 1 5.75 3h3.672c.729 0 1.428.29 1.944.805L13.561 6h8.69A3.75 3.75 0 0 1 26 9.75v10.5A3.75 3.75 0 0 1 22.25 24H5.753a3.75 3.75 0 0 1-3.75-3.75V9.826Zm1.5.674v9.75a2.25 2.25 0 0 0 2.25 2.25H22.25a2.25 2.25 0 0 0 2.25-2.25V9.75a2.25 2.25 0 0 0-2.25-2.25h-8.69l-2.194 2.195a2.75 2.75 0 0 1-1.944.805H3.504Z" />
              </svg>
              مرور
            </router-link>
          </li>

          <li>
            <router-link to="/data">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32">
                <path fill="currentColor"
                  d="M26 24a2 2 0 0 0-2 2c0 .076.014.149.022.223A12.91 12.91 0 0 1 16 29c-2.775 0-5.343-.881-7.457-2.368c.258.026.517.045.78.045C13.556 26.677 17 23.233 17 19h-2a5.683 5.683 0 0 1-5.677 5.677a5.664 5.664 0 0 1-5.132-3.273c-.136-.297-.26-.6-.373-.91c.66.323 1.4.506 2.182.506c2.757 0 5-2.243 5-5v-2H9v2c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-2.115.492-4.133 1.462-5.996l-1.774-.923A15.046 15.046 0 0 0 1 16c0 8.271 6.729 15 15 15c3.374 0 6.582-1.12 9.205-3.166A2 2 0 1 0 26 24Z" />
                <path fill="currentColor" d="M23 21v2h-2v-2zm-6-6v2h-2v-2zm-8-4V9h2v2z" />
                <path fill="currentColor"
                  d="M16 1c-3.374 0-6.582 1.12-9.205 3.166A2 2 0 1 0 8 6c0-.076-.014-.149-.023-.223A12.91 12.91 0 0 1 16 3c2.77 0 5.336.878 7.448 2.361a7.795 7.795 0 0 0-.755-.038c-4.233 0-7.676 3.444-7.676 7.677h2a5.683 5.683 0 0 1 5.676-5.677a5.642 5.642 0 0 1 4.919 2.865c.215.429.405.87.573 1.324A4.959 4.959 0 0 0 26 11c-2.757 0-5 2.243-5 5v2h2v-2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 2.115-.492 4.133-1.462 5.996l1.775.923A15.046 15.046 0 0 0 31 16c0-8.271-6.729-15-15-15Z" />
              </svg>
              مرکز داده
            </router-link>
          </li>

          <li>
            <router-link to="/application">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 28 28">
                <path fill="currentColor"
                  d="M20.841 2.655a2.25 2.25 0 0 0-3.182 0L13.5 6.815v-.561a2.25 2.25 0 0 0-2.25-2.25h-7A2.25 2.25 0 0 0 2 6.254v18c0 .966.784 1.75 1.75 1.75h18a2.25 2.25 0 0 0 2.25-2.25V16.75a2.25 2.25 0 0 0-2.25-2.25h-.556l4.155-4.155a2.25 2.25 0 0 0 0-3.182l-4.508-4.508ZM17.306 14.5H13.5v-3.806l3.806 3.806ZM18.72 3.716a.75.75 0 0 1 1.06 0l4.508 4.508a.75.75 0 0 1 0 1.06l-4.508 4.508a.75.75 0 0 1-1.06 0l-4.508-4.508a.75.75 0 0 1 0-1.06l4.508-4.508ZM12 6.254V14.5H3.5V6.254a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75Zm-8.5 17.5V16H12v8.504H4.25a.75.75 0 0 1-.75-.75ZM13.5 16h8.25a.75.75 0 0 1 .75.75v7.004a.75.75 0 0 1-.75.75H13.5V16Z" />
              </svg>
              برنامه
            </router-link>
          </li>

          <li>
            <router-link to="/workspace">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 21 21">
                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15.5 3.5h-7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z" />
                  <path d="M6.5 5.5a2 2 0 0 0-2 2v8a3 3 0 0 0 3 3h6a2 2 0 0 0 2-2" />
                </g>
              </svg>
              فضای کار
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="admin mb-2">
                <v-icon class="admin-icon">mdi-account-tie</v-icon>
              </div>
              فضای کاری
              <p>من</p>
            </router-link>
          </li>
          <li>
            <router-link to="/menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <circle cx="2.5" cy="8" r=".75" />
                  <circle cx="8" cy="8" r=".75" />
                  <circle cx="13.5" cy="8" r=".75" />
                </g>
              </svg>
            </router-link>
          </li>
        </ul>

      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>


<style lang="scss" scoped>
.list__slide-bar {
  li {
    cursor: pointer;

    a {
      color: #424242;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 11px;
      text-decoration: none;
      padding: 11px 4px 13px 6px;
      border-right: 2px solid #f0f0f0;
      transition: all 0.2s ease-in-out;

      svg {
        margin-bottom: 4px;
      }
    }


    .admin {
      position: relative;
      width: 31px;
      height: 31px;
      border-radius: 50px;
      background: #BDBDBD;

      .admin-icon {
        position: absolute;
        color: #fff;
        top: 6px;
        right: 7px;
      }
    }

    &:hover a {
      background: #fff;
      border-right: 2px solid #0c695a;
      color: #0c695a;
    }
  }
}
</style>