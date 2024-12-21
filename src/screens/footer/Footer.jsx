import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.footer}>
      {/* Heading */}
      <Text style={styles.footerText}>70% hiring</Text>
      <Text style={styles.footerText}>happens without</Text>
      <Text style={styles.footerText}>any job post</Text>
      {/* Small Supporting Text */}
      <Text style={styles.smallText}>
        Many roles are filled through employee referrals, networking, and
        internal hiring before being advertised to the public.
      </Text>
      <Text style={styles.smallText}>
        Expand your opportunities by connecting with the right network.
      </Text>
      {/* Learn More Link */}
      <TouchableOpacity>
        <Text style={styles.learnMore}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    backgroundColor: '#f8f9fa',
  },
  footerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7b8f8a',
  },
  smallText: {
    fontSize: 12,
    color: '#7b8f8a',
    marginTop: 10,
    lineHeight: 20,
  },
  learnMore: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
