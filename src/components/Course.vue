<template>
  <div class="course" id="parcours">
    <v-expansion-panels dark flat>
      <v-expansion-panel class="backgroundWhite">
        <v-expansion-panel-header
          ><h2>Mon parcours</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" md="12">
              <v-card dark color="rgba(255, 255, 255, 0)">
                <!-- <v-card-title>Mon parcours</v-card-title> -->
                <v-container>
                  <v-timeline
                    dark
                    reverse
                    align-top
                    :dense="$vuetify.breakpoint.smAndDown"
                  >
                    <v-timeline-item
                      color="#2c387e"
                      icon="mdi-compass-rose"
                      fill-dot
                    >
                      <v-card color="#2c387e" dark>
                        <v-card-title class="title"
                          >Développeur multisupport</v-card-title
                        >
                        <v-card-text class="white text--primary">
                          <v-container>
                            <v-row
                              ><v-col cols="5" class="colFlexCenter">
                                <img
                                  class="maxW100"
                                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/daesign.png?alt=media&token=37833a72-c424-4f66-8637-a614c1a99947"
                                />
                              </v-col>
                              <v-col>
                                <v-row>
                                  <v-container class="mx-auto mt-8">
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-briefcase</v-icon
                                    >
                                    <strong>
                                      Développeur multisupport dans la société
                                      Daesign
                                    </strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-calendar</v-icon
                                    >

                                    <strong>Août 2018 à Aujourd'hui</strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-map-marker</v-icon
                                    >
                                    <strong>Annecy (74) - France </strong>
                                  </v-container>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-row>
                              Premier CDI dans l'entreprise qui m'a formée en
                              alternance.
                              <br /><br />
                              J'ai :
                              <ul>
                                <li>
                                  Participé à la conception technique, à la
                                  rédaction de cahier de spécations
                                </li>
                                <li>
                                  Participé aux appels d'offres, au support
                                  ainsi qu'au suivi de projet
                                </li>
                                <li>Manipulé des bases de données MongoDB</li>
                                <li>
                                  Participé aux développements d'outils auteurs
                                </li>
                                <li>
                                  Participé aux développements des outils de
                                  diffusions (plateforme interne et package
                                  SCORM1.2 et SCORM2004)
                                </li>
                                <li>
                                  Participé aux développements des produits
                                  (Serious game, parcours de formations)
                                </li>
                              </ul>
                              <br />
                              J'ai principalement utilisé Angular 2 puis Angular
                              6 avec le Typescript. Git pour le versionning.
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>

                    <v-timeline-item color="#272727" icon="mdi-school" fill-dot>
                      <v-card color="#272727" dark>
                        <v-card-title class="title"
                          >Licence Professionnelle DIM
                          [Alternance]</v-card-title
                        >
                        <v-card-text class="white text--primary">
                          <v-container>
                            <v-row>
                              <v-col cols="5" class="colFlexCenter">
                                <img
                                  class="maxW100"
                                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/daesign.png?alt=media&token=37833a72-c424-4f66-8637-a614c1a99947"
                                />
                              </v-col>
                              <v-col>
                                <v-row>
                                  <v-container class="mx-auto mt-8">
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-briefcase</v-icon
                                    >
                                    <strong>
                                      Licence Professionnelle Développeur
                                      informatique multi-supports
                                    </strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-calendar</v-icon
                                    >

                                    <strong>Octobre 2017 à Juillet 2018</strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-map-marker</v-icon
                                    >
                                    <strong>IUT - Annecy (74) - France </strong>
                                  </v-container>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-row>
                              Formation principalement web et mobile en
                              alternance dans la société Daesign sur Annecy.
                              <br />
                              <br />
                              Du côté formation, j'ai travaillé les languages
                              web (javascript, php, html, css). J'ai pu
                              utiliser Boostrap, VueJs ou encore Angular pour
                              des projets de groupe.
                              <br />
                              J'ai également travaillé le développement mobile
                              avec Java pour Android, Xamarin C# pour Windows
                              Phone ainsi que Swift pour iOs.
                              <br /><br />
                              Du côté entreprise, j'ai découvert une société
                              très enrichissante, Daesign développe des serious
                              game pour la formation des salariés en entreprise.
                              <br /><br />Cette dernière m'a énormément appris
                              sur le développement web. Je suis arrivé juste
                              après la transition de l'entreprise de Unity3D
                              vers Angular.
                              <br />
                              <br />
                              J'ai donc :
                              <ul>
                                <li>
                                  Fait du développement de Serious Game en
                                  Angular 2
                                </li>
                                <li>
                                  Fait du support sur Serious game développé
                                  sous Unity3D
                                </li>
                                <li>
                                  Fait du support sur application mobile
                                  Ionic/Angular
                                </li>
                              </ul>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>

                    <v-timeline-item
                      color="#2c387e"
                      icon="mdi-briefcase"
                      fill-dot
                    >
                      <v-card color="#2c387e" dark>
                        <v-card-title class="title"
                          >Stage chez Yansys</v-card-title
                        >
                        <v-card-text class="white text--primary">
                          <v-container>
                            <v-row>
                              <v-col cols="5" class="colFlexCenter">
                                <img
                                  class="maxW100"
                                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/yansys.png?alt=media&token=1fc1f7f9-9547-4753-a915-5dfa41723b48"
                                />
                              </v-col>
                              <v-col>
                                <v-row>
                                  <v-container class="mx-auto mt-8">
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-briefcase</v-icon
                                    >
                                    <strong>
                                      Stage de 2ème année de BTS SIO dans la
                                      société Yansys-Médical
                                    </strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-calendar</v-icon
                                    >

                                    <strong>Janvier 2017 à Février 2017</strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-map-marker</v-icon
                                    >
                                    <strong>Vichy (03) - France </strong>
                                  </v-container>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-row>
                              Durant ce stage j’ai pu travailler sur plusieurs
                              projets différents, tel que :
                              <ul>
                                <li>
                                  La maintenance évolutive de site avec le CMS
                                  SPIP
                                </li>
                                <li>
                                  La maintenance évolutive du logiciel de
                                  gestion d’entreprise Dolibarr
                                </li>
                                <li>
                                  La maintenance évolutive de l’application
                                  CLOPE OUT développée par l’entreprise
                                </li>
                              </ul>
                              <br />
                              Ce stage m'a permis de mettre en pratique mes
                              compétences en PHP, SQL, Javascript et HTML/CSS.
                              <br />
                              C'est suite à ce stage que j'ai décidé de
                              m'orienter dans le développement web.
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>

                    <v-timeline-item
                      color="#272727"
                      icon="mdi-briefcase"
                      fill-dot
                    >
                      <v-card color="#272727" dark>
                        <v-card-title class="title"
                          >Stage chez Digisport</v-card-title
                        >
                        <v-card-text class="white text--primary">
                          <v-container>
                            <v-row>
                              <v-col cols="5" class="colFlexCenter">
                                <img
                                  class="maxW100"
                                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/digisport.png?alt=media&token=8860a1e3-eb57-4def-994d-e355f22aa636"
                                />
                              </v-col>
                              <v-col>
                                <v-row>
                                  <v-container class="mx-auto mt-8">
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-briefcase</v-icon
                                    >
                                    <strong>
                                      Stage de 1ère année de BTS SIO dans la
                                      société Digisport
                                    </strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-calendar</v-icon
                                    >

                                    <strong>Mai 2016 à Juin 2016</strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-map-marker</v-icon
                                    >
                                    <strong>Vichy (03) - France </strong>
                                  </v-container>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-row>
                              Maintenance et évolution d’un logiciel existant en
                              C#.
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>

                    <v-timeline-item color="#2c387e" icon="mdi-school" fill-dot>
                      <v-card color="#2c387e" dark>
                        <v-card-title class="title"
                          >BTS SIO option SLAM</v-card-title
                        >
                        <v-card-text class="white text--primary">
                          <v-container>
                            <v-row>
                              <v-col cols="5" class="colFlexCenter">
                                <img
                                  class="maxW100"
                                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/Csharp.png?alt=media&token=690bca1b-05ea-4c5d-8f08-ff21ec9e858b"
                                />
                              </v-col>
                              <v-col>
                                <v-row>
                                  <v-container class="mx-auto mt-8">
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-briefcase</v-icon
                                    >
                                    <strong>
                                      BTS Services Informatiques aux
                                      Organisations option Solutions Logicielles
                                      et Applications Métiers.
                                    </strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-calendar</v-icon
                                    >

                                    <strong>Septembre 2015 à Juin 2017</strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-map-marker</v-icon
                                    >
                                    <strong
                                      >Cité Scolaire Albert Londres - Cusset
                                      (03) - France
                                    </strong>
                                  </v-container>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-row>
                              BTS Services Informatiques aux Organisations
                              option Solutions Logicielles et Applications
                              Métiers.
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>

                    <v-timeline-item color="#272727" icon="mdi-school" fill-dot>
                      <v-card color="#272727" dark>
                        <v-card-title class="title"
                          >Bac Technologique STI2D</v-card-title
                        >
                        <v-card-text class="white text--primary">
                          <v-container>
                            <v-row>
                              <v-col cols="5" class="colFlexCenter">
                                <img
                                  class="maxW100"
                                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/gant.jpg?alt=media&token=96e0a81b-37cf-4809-9cd2-dbc509222d4d"
                                />
                              </v-col>
                              <v-col>
                                <v-row>
                                  <v-container class="mx-auto mt-8">
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-briefcase</v-icon
                                    >
                                    <strong>
                                      Bac Technologique STI2D Sciences et
                                      Technologies de l'Industrie et du
                                      Développement Durable spécialité Systèmes
                                      d'Information et Numérique.
                                    </strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-calendar</v-icon
                                    >

                                    <strong>Semtembre 2013 à Juin 2015</strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-map-marker</v-icon
                                    >
                                    <strong
                                      >Lycée Camille Claudel - Digoin (71) -
                                      France
                                    </strong>
                                  </v-container>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-row>
                              Initiation à l'algorithmique, découvertes des
                              nouvelles technologies.
                              <br /><br />
                              Cette formation m'a fait découvrir le
                              développement, j'ai commencé en programmant des
                              cartes Arduino en C++ pour faire fonctionner de
                              petits robots et en contrôlant des lumières RGB avec des capteurs de flexion sur des gants.
                              <br />
                              J'ai apprécié la programmation, c'est ce qui m'a
                              fait choisir un BTS en développement objet pour la
                              suite.
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                    <v-timeline-item color="#2c387e" icon="mdi-school" fill-dot>
                      <v-card color="#2c387e" dark>
                        <v-card-title class="title" nowrap
                          >Bac Professsionnel Menuiserie
                          [Alternance]</v-card-title
                        >
                        <v-card-text class="white text--primary">
                          <v-container>
                            <v-row>
                              <v-col cols="5" class="colFlexCenter">
                                <img
                                  class="maxW100"
                                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/menuisier.jpg?alt=media&token=3590eebd-4631-46c9-a111-72daf978068e"
                                />
                              </v-col>
                              <v-col>
                                <v-row>
                                  <v-container class="mx-auto mt-8">
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-briefcase</v-icon
                                    >
                                    <strong>
                                      Bac Professionnel Technicien Menuisier
                                      Agenceur en alternance dans la menuiserie
                                      FRONTIERE (Le Donjon - 03130) pendant 3
                                      ans.
                                    </strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-calendar</v-icon
                                    >

                                    <strong>Septembre 2010 à Juin 2013</strong>
                                  </v-container>
                                </v-row>
                                <v-row>
                                  <v-container>
                                    <v-icon class="mx-auto mr-2" light
                                      >mdi-map-marker</v-icon
                                    >
                                    <strong
                                      >CFA-BTP Georges Bourachot - Vichy (03) -
                                      France
                                    </strong>
                                  </v-container>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-row>
                              Pose de portes, fenêtres, volets, parqueteries,
                              meubles et cuisines sur mesure.
                              <br /><br />
                              Celà m'a permis de découvrir un métier
                              complètement différent de celui que je pratique
                              aujourd'hui, d'apprendre à me débrouiller seul sur
                              certaines tâches alors je sortais tout juste du
                              collège.
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "Course",
  mounted: function () {},
  data: () => ({
    panel: true,
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
        title: "Bac Professionnel Menuiserie - Alternance",
        text:
          "Bac Professionnel Technicien Menuisier Agenceur en alternance dans la menuiserie FRONTIERE (Le Donjon - 03130) pendant 3 ans. Pose de portes, fenêtres, volets, parqueteries, meubles et cuisines sur mesure. <br/> <br /> Celà m'a permis de découvrir un métier complètement différent de celui que je pratique aujourd'hui, d'apprendre à me débrouiller seul sur certaines tâches alors je sortais tout juste du collège.",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.course {
  border-top: 1px solid #2c387e;
}
.backgroundWhite {
  background-color: transparent !important;
}
::v-deep .v-expansion-panel-content__wrap {
  padding: 0 !important;
}
::v-deep .v-card__title.title {
  padding: 8px !important;
}
::v-deep .v-card__title {
  word-break: normal !important;
}
.maxW100 {
  max-width: 100%;
}
.colFlexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
