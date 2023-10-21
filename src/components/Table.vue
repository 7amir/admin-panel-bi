<script>
import { VDataTable } from 'vuetify/lib/labs/components.mjs';
import { mergeProps } from 'vue';

export default {
  components: { VDataTable, mergeProps },
  data() {
    return {
      loading: false,

      items: [
        { title: 'آنالیز در اکسل' },
        { title: 'تنظیمات' },
        { title: 'مشاهده نسبت' },
        { title: 'حذف' },
      ],
      selected: [],
      headers: [
        { title: 'نام کاربری', align: 'start', sortable: false, key: 'name' },
        { title: 'نقش', align: 'center', key: 'role' },
        { title: 'تاریخ', align: 'center', key: 'date' },
        { title: 'وضعیت', align: 'center', key: 'status' },
        { title: 'رفرش بعدی', align: 'center', key: 'refresh' },
      ],
      desserts: [
        {
          id: 1,
          name: 'امیر رجب زاده',
          role: 'مدیر',
          date: '1402/7/12',
          status: 'آنلاین',
          refresh: '-',
          heartIconColor: true,
        },
        {
          id: 2,
          name: 'ماهان محمدی',
          role: 'نویسنده',
          date: '1402/7/12',
          status: 'آنلاین',
          refresh: '-',
          heartIconColor: true,
        },
      ],
      newBtn: [
        { title: 'گزارش', icon: 'mdi-poll' },
        { title: 'گزارش صفحه بندی شده', icon: 'mdi-format-page-break' },
        { title: 'کارت امتیازی', icon: 'mdi-counter' },
        { title: 'داشبورد', icon: 'mdi-home-outline' },
        { title: 'مجموعه داده', icon: 'mdi-database-outline' },
        { title: 'گزینه‌های بیشتر' },
      ],
      upload: [
        { title: 'OneDrive برای کسب و کار', icon: 'mdi-microsoft-onedrive' },
        { title: 'share point', icon: 'mdi-microsoft-sharepoint' },
        { title: 'تنطیمات فایلها', icon: 'mdi-folder-cog-outline' },
      ],
      menuItems: [
        { title: 'آیتم 1', action: 'item1' },
        { title: 'آیتم 2', action: 'item2' },
      ],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
  methods: {
    mergeProps,

    /**
     * تغییر رنگ آیکون قلب
     */
    changeIconColor(userId) {
      const user = this.desserts.find(item => item.id === userId);
      if (user) {
        user.heartIconColor = !user.heartIconColor;
      }
    }
  },
}
</script>

<template>
  <v-container class="container-title">
    <div class="page-info d-flex align-center">
      <h1 class="page-title">فضای کاری من</h1>
    </div>

    <v-row class="mt-7 align-center">
      <v-col class="d-flex align-center pr-0">

        <!-- جدید -->
        <v-menu class="create-new">
          <template v-slot:activator="{ props: menu }">
            <v-tooltip location="top">
              <template v-slot:activator="{ props: tooltip }">
                <v-btn class="new-user black-color" v-bind="mergeProps(menu, tooltip)">
                  <v-icon class="ml-2">mdi-plus</v-icon>
                  <span class="add-user">جدید</span>
                  <v-icon class="mr-3">mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <span class="tooltip">ایجاد جدید</span>
            </v-tooltip>
          </template>
          <v-list class="list__new-user shadow">
            <v-list-item class="item-new-btn" v-for="(item, index) in newBtn" :key="index">
              <v-icon class="ml-2">{{ item.icon }}</v-icon>
              <v-list-item-title class="title-new-btn">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- آپلود -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="btn-default mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="m7 12l5 5m0 0l5-5m-5 5V4M6 20h12" />
              </svg>
              <span>آپلود</span>
              <v-icon class="mr-3">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="item-new-btn shadow">
            <v-list-item v-for="(item, index) in upload" :key="index" :value="index">
              <v-icon class="ml-2">{{ item.icon }}</v-icon>
              <v-list-item-title class="title-new-btn">{{ item.title }}</v-list-item-title>
            </v-list-item>

            <v-divider class="mt-2"></v-divider>

            <span class="upload-description">یک فایل pbix.، rdl. یا xlsx. را در فضای کاری خود آپلود کنید
            </span>
          </v-list>
        </v-menu>

        <!-- تنظیمات فضای کاری -->
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="color-icon d-flex align-center btn-default mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="15" height="15" viewBox="0 0 14 14">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  d="m5.23 2.25l.43-1.11A1 1 0 0 1 6.59.5h.82a1 1 0 0 1 .93.64l.43 1.11l1.46.84l1.18-.18a1 1 0 0 1 1 .49l.4.7a1 1 0 0 1-.08 1.13l-.73.93v1.68l.75.93a1 1 0 0 1 .08 1.13l-.4.7a1 1 0 0 1-1 .49l-1.18-.18l-1.46.84l-.43 1.11a1 1 0 0 1-.93.64h-.84a1 1 0 0 1-.93-.64l-.43-1.11l-1.46-.84l-1.18.18a1 1 0 0 1-1-.49l-.4-.7a1 1 0 0 1 .08-1.13L2 7.84V6.16l-.75-.93a1 1 0 0 1-.08-1.13l.4-.7a1 1 0 0 1 1-.49l1.18.18ZM5 7a2 2 0 1 0 2-2a2 2 0 0 0-2 2Z" />
              </svg>
              تنظیمات فضای کاری
            </v-btn>
          </template>
          <v-card>
            <v-toolbar dark>
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>تنظیمات</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn variant="text" @click="dialog = false"> ذخیره </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list lines="two" subheader>
              <v-list-subheader> کنترل‌های کاربر</v-list-subheader>
              <v-list-item 
                title="فیلتر کردن محتوا"
                subtitle="سطح فیلتر محتوا را برای محدود کردن برنامه‌های قابل دانلود تنظیم کنید">
              </v-list-item>
              <v-list-item 
                title="رمز عبور"
                subtitle="برای خرید به رمز عبور نیاز داشته باشید یا برای محدود کردن خرید از رمز عبور استفاده کنید">
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list lines="two" subheader>
              <v-list-subheader>عمومی</v-list-subheader>
              <v-list-item 
                title="اطلاعیه"
                subtitle="به‌روزرسانی‌های برنامه‌ها یا بازی‌هایی را که دانلود کرده‌ام به من اطلاع دهید">
                <template v-slot:prepend>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </template>
              </v-list-item>
              <v-list-item 
                title="صدا" 
                subtitle="به روز رسانی خودکار برنامه‌ها در هر زمان، ممکن است هزینه داده اعمال شود">
                <template v-slot:prepend>
                  <v-checkbox v-model="sound"></v-checkbox>
                </template>
              </v-list-item>
              <v-list-item 
                title="افزودن خودکار ویجت‌ها" 
                subtitle="ویجت‌های صفحه اصلی را به صورت خودکار اضافه کنید">
                <template v-slot:prepend>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col class="pl-0">
        <!-- سرچ بر اساس کلمه -->
        <div class="table-search search d-flex align-center justify-end">
          <v-card max-width="194" max-height="36">
            <v-text-field 
              :loading="loading" 
              density="compact" 
              variant="solo" 
              label="بر اساس کلمه کلیدی"
              append-inner-icon="mdi-magnify" 
              single-line hide-details >
            </v-text-field>
          </v-card>

          <v-menu class="create-new">
            <template v-slot:activator="{ props: menu }">
              <v-tooltip location="top">
                <template v-slot:activator="{ props: tooltip }">
                  <v-btn class="new-user mr-3" v-bind="mergeProps(menu, tooltip)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" class="ml-3 mr-1"
                      fill="none">
                      <path
                        d="M16.0312 1.6875H0.84375C0.619974 1.6875 0.405362 1.59861 0.247129 1.44037C0.0888949 1.28214 0 1.06753 0 0.84375C0 0.619974 0.0888949 0.405362 0.247129 0.247129C0.405362 0.0888947 0.619974 0 0.84375 0H16.0312C16.255 0 16.4696 0.0888947 16.6279 0.247129C16.7861 0.405362 16.875 0.619974 16.875 0.84375C16.875 1.06753 16.7861 1.28214 16.6279 1.44037C16.4696 1.59861 16.255 1.6875 16.0312 1.6875ZM13.2188 5.625H3.65625C3.43247 5.625 3.21786 5.5361 3.05963 5.37787C2.90139 5.21964 2.8125 5.00503 2.8125 4.78125C2.8125 4.55747 2.90139 4.34286 3.05963 4.18463C3.21786 4.02639 3.43247 3.9375 3.65625 3.9375H13.2188C13.4425 3.9375 13.6571 4.02639 13.8154 4.18463C13.9736 4.34286 14.0625 4.55747 14.0625 4.78125C14.0625 5.00503 13.9736 5.21964 13.8154 5.37787C13.6571 5.5361 13.4425 5.625 13.2188 5.625ZM9.84375 9.5625H7.03125C6.80747 9.5625 6.59286 9.47361 6.43463 9.31537C6.27639 9.15714 6.1875 8.94253 6.1875 8.71875C6.1875 8.49497 6.27639 8.28036 6.43463 8.12213C6.59286 7.9639 6.80747 7.875 7.03125 7.875H9.84375C10.0675 7.875 10.2821 7.9639 10.4404 8.12213C10.5986 8.28036 10.6875 8.49497 10.6875 8.71875C10.6875 8.94253 10.5986 9.15714 10.4404 9.31537C10.2821 9.47361 10.0675 9.5625 9.84375 9.5625Z"
                        fill="#666666" />
                    </svg>
                    <span>فیلتر</span>
                    <v-icon class="mr-3">mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">برای ایجاد فیلتر کلیک کنید</span>
              </v-tooltip>
            </template>
            <v-list class="shadow filter">

              <v-list-item class="item-new-btn">
                <v-icon class="ml-2"> mdi-filter-variant-remove </v-icon>
                <v-list-item-title class="title-new-btn">ریست کردن فیلترها</v-list-item-title>
              </v-list-item>

              <v-divider class="mt-1 mb-1"></v-divider>

              <v-list-item class="item-new-btn">
                <v-icon class="ml-2"> mdi-calendar-range </v-icon>
                <v-list-item-title class="title-new-btn">تاریخ</v-list-item-title>
              </v-list-item>

              <v-list-item class="item-new-btn">
                <v-icon class="ml-2"> mdi-account-outline </v-icon>
                <v-list-item-title class="title-new-btn">نام</v-list-item-title>
              </v-list-item>

              <v-list-item class="item-new-btn">
                <v-icon class="ml-2"> mdi-account-badge-outline </v-icon>
              <v-list-item-title class="title-new-btn">آنلاین</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-divider vertical class="mr-5 ml-5"></v-divider>

          <div class="menu-icon d-flex justify-center align-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 17h8M5 12h14m-8-5h8" />
            </svg>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-divider class="divider mt-2"></v-divider>
  <div class="table table-padding">
    <v-container class="container-title">

      <v-data-table 
        v-model="selected"
        :headers="headers"
        :items="desserts"
        item-value="name"
        show-select cellspacing="0"
        itemsPerPageText=" تعداد موارد در هر صفحه"
        :items-per-page="5"
        :pageText="`{0} از ${desserts.length}`"
        >
        <template v-slot:item.name="{ item }">
          <div class="d-flex justify-space-between icons-action">
            {{ item.name }}
            <div class="icon-action">
              <a href="/">
                <v-icon>mdi-refresh</v-icon>
              </a>

              <div class="icon-heart" @click="changeIconColor(item.id)">
                <v-icon v-if="item.heartIconColor">{{ 'mdi-heart-outline' }}</v-icon>
                <v-icon v-else>{{ 'mdi-heart' }}</v-icon>
              </div>

              <v-menu class="icon-menu">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props">mdi-dots-horizontal</v-icon>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.new-user {
  border: 1px solid #d1d1d1;
  width: 110px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: none;
  background: transparent;
  color: #666666;

  .add-user {
    font-family: Vazir-medium;
  }
}

.mdi-chevron-down {
  font-size: 18px;
}

.menu-icon {
  width: 40px;
  height: 36px;
  background: #E6E6E6;
  color: #117865;
  border-radius: 5px;
}

.last-user {
  border-bottom: 1px solid #E2EAF1;
}

.color-orange-circle {
  background: orange !important;
}

.icons-action {
  .icon-action {
    width: 115px;
    display: flex;
    justify-content: space-around;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-out;
  }

  &:hover .icon-action {
    visibility: visible;
    opacity: 1;
  }
}

.icon-heart {
  cursor: pointer;
}

a {
  color: #666666;
}
</style>