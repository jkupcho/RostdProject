import React, { View, Navigator, Component, StyleSheet } from 'react-native';

import HomeList from './HomeList'

export default class App extends Component {
	renderScene(route, navigator) {
		const Component = route.component;
		return (
			<Component {...route.props} navigator={navigator} route={route} />
		);
	}

	render () {
		return (
			<Navigator
				initialRoute={{
					component: HomeList,
				}}
				style={styles.container}
				renderScene={this.renderScene}
			/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});