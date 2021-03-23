<template>
  <v-app v-if="isInitialized">
    <v-app-bar app dark fixed>
      <div class="d-flex align-center">
        <!-- <v-app-bar-nav-icon
          @click="drawer = true"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon> -->
        <v-toolbar-title>{{ $t("0001") }}</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-container>
          <v-btn v-if="$i18n.locale == 'en'" rounded text link @click="changeLang('fr')"><img src="./assets/france.svg" /></v-btn>
          <v-btn v-if="$i18n.locale == 'fr'" rounded text link @click="changeLang('en')"><img src="./assets/united-kingdom.svg" /></v-btn>
        </v-container>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    isInitialized: false,
    drawer: false,
    images: []
  }),
  mounted: function () {
    this.$i18n.locale  = 'fr'
    this.isInitialized = true;

  },  
  methods: {
    changeLang(lang){
      this.$i18n.locale  = lang
    }
  },
};
</script>
<style lang="scss">
body,
html {
  overflow: hidden !important;
}
</style>
