import React, { Text, Component, StyleSheet, View, ListView } from 'react-native';

import HomeListViewItem from '../components/HomeListViewItem';

const coffeeList = [
	{ title: 'Fancy Coffee' },
	{ title: 'Another Fancy Coffee' },
	{ title: 'Even Fancier Coffee' }
];

export default class HomeList extends Component {

	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(coffeeList)
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ListView 
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <HomeListViewItem navigate={(event) => console.log(event)} {...rowData} />} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 72,
  }
});