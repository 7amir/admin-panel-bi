<script>
export default {
  data() {
    return {
      drawer: null,
      drawerCog: null,
      loading: false,
      items: [
        { type: 'subheader', title: 'امروز' },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'برانچ این آخر هفته',
          subtitle: `<span class="text-primary">علی مرادی</span> &mdash; من این آخر هفته در محله شما خواهم بود و کارها را انجام می دهم. میخوای بگردی؟`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'باربیکیو تابستانی',
          subtitle: `<span class="text-primary">رضا ندایی</span> &mdash; کاش می توانستم بیایم، اما این آخر هفته خارج از شهر هستم`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'سفر به پاریس',
          subtitle:
            '<span class="text-primary">پارمیدا حاتمی</span> &mdash; آیا توصیه های پاریس دارید؟ آیا تا به حال بوده اید؟',
        },
      ],
      download: [
        { title: 'دانلودها' },
        { title: 'داده‌ها' },
        { title: 'گزارش‌ساز صفحه بندی شده' },
        { title: 'موبایل' },
        { title: 'تجزیه و تحلیل در به روزرسانی اکسل' },
      ],
      face: [
        { title: 'یک ایده ارسال کنید' },
        { title: 'موضوعی را ارسال کنید' },
      ],
      profile: [
        { text: 'پروفایل', icon: 'mdi-account-outline' },
        { text: 'پیام', icon: 'mdi-message-reply-text-outline' },
        { text: 'تنظیمات', icon: 'mdi-cog-outline' },
        { text: 'اطلاعات بیشتر', icon: 'mdi-progress-question' },
        { text: 'خروج از جساب', icon: 'mdi-exit-to-app' },
      ],
    }
  }
}
</script>

<template>
  <div class="header">
    <v-container>
      <v-row class="row-header">
        <v-col>
          <div class="header-menu">
            <div class="menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
              </svg>
            </div>

            <span class="mr-11">فضای کاربری من</span>
          </div>
        </v-col>

        <v-col class="pt-0 pb-0">
          <div class="search">
            <v-card class="mx-auto" max-width="370" max-height="38">
              <v-card-text>
                <v-text-field 
                  :loading="loading" 
                  density="compact" 
                  variant="solo" 
                  label="جستجو..."
                  append-inner-icon="mdi-magnify" 
                  single-line hide-details>
                </v-text-field>
              </v-card-text>
            </v-card>
          </div>
        </v-col>

        <v-col class="pl-0 pt-0 pb-0">
          <div class="header-icons">

            <!-- پروفابل -->
            <v-menu>
              <template v-slot:activator="{ props }">
                <div v-bind="props" class="admin mr-2">
                  <v-icon class="admin-icon">mdi-account-tie</v-icon>
                </div>
              </template>
              <v-list class="shadow" density="compact">
                <v-list-item
                  v-for="(item, i) in profile"
                    :key="i"
                    :value="item"
                    color="primary">
                  <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                  </template>

                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <!-- شکلک -->
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn variant="text" v-bind="props" icon="mdi-emoticon-happy-outline"></v-btn>

              </template>
              <v-list class="shadow">
                <v-list-item v-for="(item, index) in face" :key="index" :value="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <!-- دانلود -->
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn variant="text" v-bind="props" icon="mdi-cloud-download-outline"></v-btn>
              </template>
              <v-list class="shadow">
                <v-list-item v-for="(item, index) in download" :key="index" :value="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <!-- تنطیمات -->
            <v-locale-provider ltr>
              <v-layout class="header-icon-toggle">
                <v-navigation-drawer 
                  v-model="drawerCog" 
                  temporary 
                  class="shadow"
                  >
                  <v-list-item class="title-setting">
                    <div class="title d-flex justify-space-between pt-1 pb-1 align-center">
                      <v-list-item-title>تنطیمات</v-list-item-title>
                      <v-btn 
                        variant="text" 
                        @click.stop="drawerCog = !drawerCog" 
                        icon="mdi-close">
                      </v-btn>

                    </div>
                  </v-list-item>
  
                  <v-divider class="mb-3"></v-divider>

                  <v-list class="pr-4 pl-4 list-setting">
                    <h4>اولویت‌ها</h4>
                    <v-list-item>
                      <a href="#">
                        عمومی
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>

                    <v-list-item>
                      <a href="#">
                        اعلان‌ها
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>

                    <v-list-item>
                      <a href="#">
                        تنظیمات آیتم
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>

                    <v-list-item>
                      <a href="#">
                        تنظیمات توسعه‌دهنده
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>
                    
                    <v-divider class="mt-5 mb-5"></v-divider>
                    
                    <h4>منابع و برنامه‌های افزودنی</h4>
                    <v-list-item>
                      <a href="#">
                        ذخیره سازی شخصی را مدیریت کنید
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>

                    <v-list-item>
                      <a href="#">
                        اتصالات و دروازه ها را مدیریت کنید
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>

                    <v-list-item>
                      <a href="#">
                        کدهای جاسازی را مدیریت کنید
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>
                    
                    <v-divider class="mt-5 mb-5"></v-divider>
                    
                    <h4>حاکمیت و بینش</h4>
                    <v-list-item>
                      <a href="#">
                        پورتال مدیریت
                        <v-icon>mdi-arrow-left-thin</v-icon>
                      </a>
                    </v-list-item>
                  </v-list>

                </v-navigation-drawer>
  
                <div class="d-flex justify-center align-center h-100">
                  <v-btn variant="text" @click.stop="drawerCog = !drawerCog" icon="mdi-cog-outline"></v-btn>
                </div>
              </v-layout>
            </v-locale-provider>

            <!-- اطلاعیه -->
            <v-locale-provider ltr>
              <v-layout class="header-icon-toggle">
                <v-navigation-drawer v-model="drawer" temporary class="shadow">
                  <v-list-item class="title-setting">
                    <div class="title d-flex justify-space-between pt-1 pb-1 align-center">
                      <v-list-item-title>اعلان‌ها</v-list-item-title>
                      <v-btn variant="text" @click.stop="drawer = !drawer" icon="mdi-close"></v-btn>
                    </div>
                  </v-list-item>
  
                  <v-divider></v-divider>
  
                  <v-list
                    :items="items"
                    item-props
                    lines="three"
                    class="notification"
                  >
                    <template v-slot:subtitle="{ subtitle }">
                      <div v-html="subtitle"></div>
                    </template>
                  </v-list>

                </v-navigation-drawer>
  
                <div class="d-flex justify-center align-center h-100">
                  <v-btn variant="text" @click.stop="drawer = !drawer" icon="mdi-bell-badge-outline"></v-btn>
                </div>
              </v-layout>
            </v-locale-provider>

          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #f0f0f0;
  height: 60px;
  display: flex;
  align-items: center;

  .microsoft-bi {
    margin-right: 4rem;
    margin-left: .9rem;
  }

  .header-menu {
    display: flex;
    align-items: center;

    span {
      color: #0c695a;
    }

    .menu {
      height: 28px;
      margin-right: 2px;

      svg {
        width: 28px;
        height: 28px;
        color: #424242;
      }
    }
  }

  .header-icons {
    direction: ltr;
    display: flex;
    align-items: center;
    color: #424242;

    .admin {
      position: relative;
      width: 38px;
      height: 38px;
      border-radius: 50px;
      background: #BDBDBD;

      .admin-icon {
        position: absolute;
        color: #fff;
        top: 7px;
        right: 8.5px;
      }
    }
  }

  .card-notification {
    margin: 10px 16px;
    padding: 5px 10px;
  }
}
</style> 