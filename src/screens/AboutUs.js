import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Text,
  Image,
  Linking,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export function AboutUs() {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}>
          <Text style={styles.loremIpsum5}>Nosotros</Text>
          <Text style={styles.loremIpsum4}>
            ´´Somos integrantes del Equipo 76 del IBM SkillsBuild for job
            seekers. Paula vendedora de helados nos pidió ayuda dado que
            necesitaba una app para conocer los lugares con mejor clima para
            aprovechar mejor la venta.{'\n'}
            {'\n'} Para ello desarrollamos un proyecto en React Native CLI que
            pueda consultar desde un servicio de clima la temperatura de
            diferentes lugares y luego mostrarlos en un mapa. {'\n'}
            {'\n'}Durante el desarrollo del proyecto para el control de
            versiones usamos Github y utilizamos distintas herramientas de
            diseño como: Figma, Photoshop, Wireframe.cc y
            react-native-vector-icons´´
          </Text>
          <Text style={styles.theCrew}>Integrantes del equipo</Text>
          <Image
            source={require('../assets/images/1619176266280.jpg')}
            resizeMode="cover"
            style={styles.image}></Image>
          <Text style={styles.tapiaPaola}>Tapia Maria Paola</Text>
          <Text style={styles.softwareDeveloper}>Software Developer</Text>
          <Text style={styles.loremIpsum}>
            "Soy analista en sistema. Me motiva aprender cosas nuevas. Y aspiro
            a convertirme en desarrolladora en React Native"
          </Text>
          <View style={styles.iconRow}>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('https://linkedin.com/in/ma-paola-tapia/')
              }>
              <EntypoIcon
                name="linkedin-with-circle"
                style={styles.icon}></EntypoIcon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL('https://github.com/PaolaTapia')}>
              <FontAwesomeIcon
                name="github"
                style={styles.icon2}></FontAwesomeIcon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('mailto:ma.paola.tapia@gmail.com')
              }>
              <EntypoIcon
                name="mail-with-circle"
                style={styles.icon3}></EntypoIcon>
            </TouchableWithoutFeedback>
          </View>
          <Image
            source={require('../assets/images/123123.jpg')}
            resizeMode="cover"
            style={styles.image1}></Image>
          <Text style={styles.espejoTamara}>Espejo Ruiz Tamara</Text>
          <Text style={styles.softwareDeveloper1}>Software Developer</Text>
          <Text style={styles.loremIpsum1}>
            ´´Tengo 25 años, actualmente me encuentro estudiando ingeniería
            electrónica en la Universidad de Buenos Aires (FIUBA). Tengo muchas
            ganas de conseguir mi primer empleo en el área de IT como Front-End.
            ´´
          </Text>
          <View style={styles.icon6Row}>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('https://linkedin.com/in/tamara-espejo-ruiz')
              }>
              <EntypoIcon
                name="linkedin-with-circle"
                style={styles.icon6}></EntypoIcon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('https://github.com/tamaraespejoruiz')
              }>
              <FontAwesomeIcon
                name="github"
                style={styles.icon5}></FontAwesomeIcon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('mailto:tamaraespejoruiz@gmail.com')
              }>
              <EntypoIcon
                name="mail-with-circle"
                style={styles.icon4}></EntypoIcon>
            </TouchableWithoutFeedback>
          </View>
          <Image
            source={require('../assets/images/027.jpg')}
            resizeMode="cover"
            style={styles.image2}></Image>
          <Text style={styles.soutoNahuel2}>Souto Nahuel</Text>
          <Text style={styles.softwareDeveloper2}>Software Developer</Text>
          <Text style={styles.loremIpsum2}>
            ´´Tengo 27 años, mis hobbies son las música y codear. Actualmente
            estoy estudiando ingenieria en sistemas, me gustaría el día de
            mañana recorrer el mundo con alguna de mis pasiones´´
          </Text>
          <View style={styles.icon9Row}>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/in/nahuelhsouto/')
              }>
              <EntypoIcon name="linkedin-with-circle" style={styles.icon9} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL('https://github.com/Nahuelhsouto')
              }>
              <FontAwesomeIcon
                name="github"
                style={styles.icon8}></FontAwesomeIcon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL('mailto:nahuelhsouto@gmail.com')}>
              <EntypoIcon
                name="mail-with-circle"
                style={styles.icon7}></EntypoIcon>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.loremIpsum6}>
            Enlaces de herramientas{'\n'}UX
          </Text>
          <View style={{flex: 0.4, flexDirection: 'column'}}>
            <View style={styles.uxView}>
              <View style={styles.viewIcon}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    Linking.openURL('https://www.figma.com/design-systems/')
                  }>
                  <Image
                    source={require('../assets/images/figma.png')}
                    style={styles.uxIcon}
                  />
                </TouchableWithoutFeedback>
                <Text style={styles.textIcon}>Figma</Text>
              </View>
              <View style={styles.viewIcon}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    Linking.openURL(
                      'https://creativecloud.adobe.com/es/discover/how-to/?filter=photography',
                    )
                  }>
                  <Image
                    source={require('../assets/images/adobe-photoshop.png')}
                    style={styles.uxIcon}
                  />
                </TouchableWithoutFeedback>
                <Text style={styles.textIcon}>Photoshop</Text>
              </View>
            </View>

            <View style={styles.uxView}>
              <View style={styles.viewIcon}>
                <TouchableWithoutFeedback
                  onPress={() => Linking.openURL('https://wireframe.cc/docs/')}>
                  <Image
                    source={require('../assets/images/wireframes.png')}
                    style={styles.uxIcon}
                  />
                </TouchableWithoutFeedback>
                <Text style={styles.textIcon}>Wireframe.cc</Text>
              </View>

              <View style={styles.viewIcon}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    Linking.openURL('https://github.com/Nahuelhsouto')
                  }>
                  <Image
                    source={require('../assets/images/pngwing.png')}
                    style={styles.uxIcon}
                  />
                </TouchableWithoutFeedback>
                <Text style={styles.textIcon}>Inkscape</Text>
              </View>
            </View>
            <View style={styles.uxView}>
              <View style={styles.viewIcon}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    Linking.openURL('https://obsproject.com/docs/')
                  }>
                  <Image
                    source={require('../assets/images/obs.png')}
                    style={styles.uxIcon1}
                  />
                </TouchableWithoutFeedback>
                <Text style={styles.textIcon}>OBS</Text>
              </View>

              <View style={styles.viewIcon}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    Linking.openURL(
                      'https://material.io/design/introduction#components',
                    )
                  }>
                  <Image
                    source={require('../assets/images/md.png')}
                    style={styles.uxIcon}
                  />
                </TouchableWithoutFeedback>
                <Text style={styles.textIcon}>MaterialDesign</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollArea: {
    width: 375,
    height: 804,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 8,
  },
  scrollArea_contentContainerStyle: {
    height: 2131,
    width: 350,
  },
  viewIcon: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
  },
  loremIpsum5: {
    fontFamily: 'roboto-regular',
    fontSize: 40,
    color: '#121212',
    marginTop: 48,
    marginLeft: 100,
  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    textAlign: 'center',
    marginTop: 58,
    marginLeft: 10,
  },
  uxIcon: {
    width: 50,
    height: 50,
  },
  uxIcon1: {
    width: 50,
    height: 50,
  },
  uxView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
  textIcon: {
    color: '#000',
    fontSize: 10,
    height: 50,
    marginTop: 10,
  },
  theCrew: {
    fontFamily: 'poppin',
    color: '#121212',
    fontSize: 30,
    marginTop: 114,
    marginLeft: 27,
  },
  image: {
    width: 124,
    height: 119,
    borderRadius: 100,
    borderWidth: 0,
    borderColor: '#000000',
    marginTop: 33,
    marginLeft: 126,
  },
  tapiaPaola: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 101,
  },
  softwareDeveloper: {
    fontFamily: 'alegreya-sc-regular',
    color: '#121212',
    fontSize: 10,
    marginLeft: 141,
  },
  loremIpsum: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 4,
  },
  icon: {
    color: 'rgba(74,144,226,1)',
    fontSize: 20,
  },
  icon2: {
    color: 'rgba(0,0,0,1)',
    fontSize: 22,
    marginLeft: 30,
  },
  icon3: {
    color: 'rgba(190,0,26,1)',
    fontSize: 20,
    marginLeft: 28,
  },
  iconRow: {
    height: 23,
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 129,
    marginRight: 129,
  },
  image1: {
    width: 124,
    height: 119,
    borderRadius: 100,
    borderWidth: 0,
    borderColor: '#000000',
    marginTop: 79,
    marginLeft: 125,
  },
  espejoTamara: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 97,
  },
  softwareDeveloper1: {
    fontFamily: 'alegreya-sc-regular',
    color: '#121212',
    fontSize: 10,
    marginLeft: 141,
  },
  loremIpsum1: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 10,
  },
  icon6: {
    color: 'rgba(74,144,226,1)',
    fontSize: 20,
  },
  icon5: {
    color: 'rgba(0,0,0,1)',
    fontSize: 22,
    marginLeft: 30,
  },
  icon4: {
    color: 'rgba(190,0,26,1)',
    fontSize: 20,
    marginLeft: 28,
  },
  icon6Row: {
    height: 23,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 129,
    marginRight: 129,
  },
  image2: {
    width: 124,
    height: 119,
    borderRadius: 100,
    borderWidth: 0,
    borderColor: '#000000',
    marginTop: 70,
    marginLeft: 126,
  },
  soutoNahuel2: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 121,
  },
  softwareDeveloper2: {
    fontFamily: 'alegreya-sc-regular',
    color: '#121212',
    fontSize: 10,
    marginLeft: 141,
  },
  loremIpsum2: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 20,
  },
  icon9: {
    color: 'rgba(74,144,226,1)',
    fontSize: 20,
  },
  icon8: {
    color: 'rgba(0,0,0,1)',
    fontSize: 22,
    marginLeft: 30,
  },
  icon7: {
    color: 'rgba(190,0,26,1)',
    fontSize: 20,
    marginLeft: 28,
  },
  icon9Row: {
    height: 23,
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 130,
    marginRight: 128,
  },
  loremIpsum6: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 65,
    marginLeft: 8,
  },
});

// Agregar los enlaces de las herramientas.
