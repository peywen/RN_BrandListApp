import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Expo from 'expo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from './components/ListItem';
import { fetchBrandsAPI, setBrands } from './src/reducer/brandReducer';

const mapStateToProps = (state) => ({
  brands: state.brands.brandList
});

const mapDispatchToProps = {
  setBrands
};

class mainView extends React.Component {
static propTypes = {
  brands: PropTypes.arrayOf(PropTypes.object),
  // brands: PropTypes.array.isRequired,
  setBrands: PropTypes.func.isRequired
}

componentDidMount() {
  this.getBrands();
}

getBrands = async () => {
  console.log('2222');
  const brands = await fetchBrandsAPI();
  console.log('33333');
  this.props.setBrands(brands);
  console.log('4444', this.props.brands);
}

renderItem = (element) => (
  <ListItem
    item={element.item}
  />
);

render() {
  return (
    <View style={styles.container}>
      <FlatList
        data={this.props.brands}
        renderItem={element => this.renderItem(element)}
        keyExtractor={item => item.name}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Expo.Constants.statusBarHeight
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(mainView);
