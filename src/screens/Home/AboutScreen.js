import React from 'react'
import {View, StyleSheet, Dimensions, Text} from 'react-native'
import * as Color from '../../../global/Color'
import CircleComponent from '../../components/General/CircleComponent'

class AboutScreen extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <CircleComponent />
                <Text style={styles.headerText}>About</Text>
                <Text style={styles.version}>1.0.1</Text>
                <Text style={styles.p}>Our mission is to provide you with solutions that make your life easier and games that make your day better!</Text>
                <Text style={styles.p}>"Ghosts" is our first game to be released to the app store! This is a classic game that can be played without
                                        this app, but it is just so much more convenient with it!</Text>
                <Text style={styles.p}>More games are on the way! Keep an eye out for our releases!</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    headerText: {
        marginTop: Dimensions.get('window').height * .1,
        marginLeft: Dimensions.get('window').width * .12,
        marginRight: Dimensions.get('window').width * .12,
        lineHeight: Dimensions.get('window').height * .08,
        textAlign: 'center',
        fontSize: Dimensions.get('window').height * .06,
        color: Color.MAIN,
        fontFamily: 'PatrickHand'
    },
    version: {
        marginTop: Dimensions.get('window').height * .005,
        textAlign: 'center',
        fontSize: Dimensions.get('window').height * .035,
        color: Color.MAIN,
        marginBottom: Dimensions.get('window').height * .05,
        fontFamily: 'PatrickHand'
    },
    p: {
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        marginBottom: Dimensions.get('window').height * .04,
        textAlign: 'justify',
        fontSize: Dimensions.get('window').height * .025,
        color: Color.MAIN,
        fontFamily: 'PatrickHand'
    },
    
})

export default AboutScreen