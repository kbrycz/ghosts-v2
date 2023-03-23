  
import React from 'react'
import {StyleSheet, ActivityIndicator} from 'react-native'
import * as Color from '../../../global/Color'


const LoadingIndicator = ({loading}) => {

    return (
        <>
          <ActivityIndicator
                  style={styles.activityIndicator}
                  animating={loading}
                  size="large"
                  color={Color.TEXT}
              />
        </>
    )
}

const styles = StyleSheet.create({
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },

})

export default LoadingIndicator;