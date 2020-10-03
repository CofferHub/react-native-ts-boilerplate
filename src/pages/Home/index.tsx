/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import Logotype from '../../assets/images/logotype.png';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0B3277" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Image source={Logotype} width={400} height={400} />
            <Text style={styles.sectionTitle}>Coffer</Text>
            <Text style={styles.sectionDescription}>
              We search to colaborate with knowledge to build great tools.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionSubtitle}>Main idea</Text>
            <Text style={styles.sectionDescription}>
              A react native boilerplate for templating purposes.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0B3277',
    height: '100%'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 32,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 44,
    fontWeight: '600',
    color: Colors.white,
    alignSelf: 'flex-start'
  },
  sectionSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    alignSelf: 'flex-start'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white
  },
  highlight: {
    fontWeight: '700'
  }
});

export default Home;
