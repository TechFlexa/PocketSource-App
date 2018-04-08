import React from 'react';
import { Actions } from 'react-native-router-flux'; 
import {
    View,
    Text
} from 'react-native';

const FooterComponent = () => {
    return (
        <View style={styles.footer}>
            <View style={[styles.footerItem, styles.footerActiveItem]}>
                <Text style={styles.footerText}>Home</Text>
            </View>
            <View style={styles.footerItem}>
                <Text style={styles.footerText}>Home</Text>
            </View>
            <View style={styles.footerItem}>
                <Text style={styles.footerText}>Home</Text>
            </View>
            <View style={styles.footerItem}>
                <Text style={styles.footerText} onPress={() => Actions.login()}>Account</Text>
            </View>
        </View>
    );
};

const styles = {
    footer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff200'
    },
    footerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        fontWeight: 'bold'
    },
    footerActiveItem: {
        backgroundColor: '#f5f5f5'
    }
};

export default FooterComponent;
