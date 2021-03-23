<template>
  <div class="me" id="presentation">
    <v-row>
      <v-col cols="12" md="3" class="hidden-sm-and-down"></v-col>
      <v-col cols="12" md="6">
        <v-card >
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/me.jpg?alt=media&token=81ef9b32-d9a6-47a1-8947-6c724db385a7"
            lazy-src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/me.jpg?alt=media&token=81ef9b32-d9a6-47a1-8947-6c724db385a7"
          ></v-img>
          <v-card-title>Présentation</v-card-title>
          <v-container>
            <div>
              Je m'appelle Rémi Frontiere, j'ai 25 ans et je suis Développeur
              Front-End.
            </div>
            <br />
            <div>
              Je suis <strong>Bac+3</strong> et j'ai <strong>3 ans d'expérience professionnelle</strong> dans le domaine du
              développement web.
            </div>
            <div>
              Actuellement domicilié sur Annecy (74000) - Haute-Savoie - France
            </div>
            <br />
            <div>
              Après avoir été 3 ans apprenti Menuisier, j'ai choisi de changer
              de voie. Je suis diplômé d'un
              <strong class="canClick"
                ><a
                  href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
                  target="_blank"
                  >BTS Services informatiques aux organisations option SLAM</a
                ></strong
              >
              ainsi que d'une licence professionnelle
              <strong class="canClick"
                ><a
                  href="https://formations.univ-smb.fr/fr/catalogue/licence-professionnelle-DP/sciences-technologies-sante-STS/licence-professionnelle-metiers-de-l-informatique-conception-developpement-et-test-logiciels-I2WYFB5X/lp-developpeur-informatique-multi-supports-alternance-I2WYLMKA.html"
                  target="_blank"
                  >Développeur informatique multi-supports</a
                ></strong
              >
              que j'ai effectuée en alternance sur Annecy.
            </div>
            <br />
            <div>
              C'est l'entreprise
              <strong class="canClick"
                ><a href="https://www.daesign.com/" target="_blank"
                  >Daesign</a
                ></strong
              >
              qui m'a accompagnée et formée en alternance. J'ai ensuite obtenu un CDI dans
              cette même entreprise pour finalement y rester 3 ans et 6 mois.
            </div>
            <div>J'ai principalement travaillé sur Angular au sein de Daesign, je me suis également beaucoup intéressé à VueJs en autodidacte.</div>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="hidden-sm-and-down"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Me",
  mounted: function () {},
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.me{
  margin-bottom: 40px;
}
a {
  text-decoration: none;
  color: black !important;
}
strong.canClick {
  cursor: pointer;
}
</style>
