/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
      this.state = {
          birthday: '',
          targetAge: '',
          type: 'year',
          typeOptions: ['year', 'month', 'week', 'day'],
          curDate: '',
          passNum: 120,
          nextNum: 170,
          showForm: false,
          fullWidth: true,
          openAlert: false
      }
  }
  render() {
    console.log('---------' + this.state.type)
      let item = []
      for (let i = 1; i<=this.state.passNum; i++) {
        item.push(<View style={[styles.itemNormal, styles.itemPass,this.state.type==='year'?styles.itemBig:this.state.type==='week'||this.state.type==='day'?styles.itemSmall:{}]} key={'pass'+i}/>)
      }
      for (let i = 1; i<=this.state.nextNum; i++) {
        item.push( <View style={[styles.itemNormal, styles.itemNext,this.state.type==='year'?styles.itemBig:this.state.type==='week'||this.state.type==='day'?styles.itemSmall:{}]} key={'next'+i}/>)
      }
    return (
      <View>
        <Text style={styles.container}>截止今日{this.state.curDate},距离您的出生日{this.state.birthday},您已经走过了{this.state.passNum}{this.state.type==='day'?'天':this.state.type==='month'?'个月':this.state.type==='week'?'周':'年'}。距离您设定的{this.state.targetAge}岁，还有{this.state.nextNum}{this.state.type==='day'?'天':this.state.type==='month'?'个月':this.state.type==='week'?'周':'年'}，且行且珍惜！</Text>
        <ScrollView contentContainerStyle={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {item}
        </ScrollView>
        <Text  style={styles.container}>无敌是多么多么寂寞。。。</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10
    },
    itemNormal: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: '#b9c7da'
    },
    itemBig: {
        width: 30,
        height: 30
    },
    itemSmall: {
        width: 10,
        height: 10
    },
    itemPass: {
        backgroundColor: '#b9c7da'
    },
    itemNext: {
        backgroundColor: '#41c57c'
    }
});
