import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function AICard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>
          Increase your chances in interviews with AI
        </Text>
        <Text style={styles.paragraph}>
          Prepare smartly for your next big opportunity. Let AI guide you with
          tailored suggestions to enhance your skills and performance.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Preparing</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/robot1.png')}
          style={styles.robotImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#cdb4db',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  textWrapper: {
    flex: 4,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#fdfdfd',
    marginBottom: 20,
    fontWeight: 'semibold',
  },
  button: {
    backgroundColor: '#06b6d4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f0f0f0'
  },
  robotImage: {
    width: 100,
    height: 100,
  },
});
