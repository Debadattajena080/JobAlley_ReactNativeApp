import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

// Sample Company Data
const companyData = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png',
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
  },
  {
    id: 3,
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png', // Updated Amazon logo
  },
  {
    id: 4,
    name: 'Apple',
    logo: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', // Updated URL for Apple
  },
  {
    id: 5,
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
  },
  {
    id: 6,
    name: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png', // Updated Tesla logo
  },
  {
    id: 7,
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', // Updated Netflix URL
  },
  {
    id: 8,
    name: 'Adobe',
    logo: 'https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png', // Updated URL for Adobe
  },
];

const TopCompanies = () => {
  const renderCompanyCard = company => (
    <View key={company.id} style={styles.card}>
      <Image source={{uri: company.logo}} style={styles.logo} />
      <Text style={styles.name}>{company.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Companies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {companyData.map(renderCompanyCard)}
      </ScrollView>
    </View>
  );
};

export default TopCompanies;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    // marginLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  scrollView: {
    paddingLeft: 10,
  },
  card: {
    width: 120,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 10,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
  },
});
