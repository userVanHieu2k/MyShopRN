import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import data from '../data/dishes.js';
import gui from '../lib/gui';
import SelectDropdown from '../component/common/SelectDropdown';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // console.log('--------------', this.props.homeData);
    this.state = {
      stepID: 1,
      medalName: '',
    };
  }

  componentDidMount() {
    // const group = this.groupDishesByMeal(data.dishes);
    // console.log(this.state.medals);
  }

  nextStep = () => {
    this.setState({stepID: this.state.stepID + 1});
  };
  PreviousStep = () => {
    this.setState({stepID: this.state.stepID - 1});
  };

  groupDishesByMeal = dishes => {
    const groupedDishes = {};

    const medals = [];

    // Lặp qua danh sách món ăn
    dishes.forEach(dish => {
      // Lặp qua mỗi bữa ăn có sẵn cho món ăn
      dish.availableMeals.forEach(meal => {
        // Kiểm tra nếu chưa có mảng cho bữa ăn, thì tạo mới
        if (!groupedDishes[meal]) {
          groupedDishes[meal] = [];
          //thêm các bữa vào list
          medals.push(meal);
        }

        // Thêm món ăn vào mảng tương ứng với bữa ăn
        groupedDishes[meal].push(dish);
      });
    });
    if (this.state.stepID == 1) {
      return (
        <View style={{marginTop: 20}}>
          <SelectDropdown
            title="Please select a medal"
            styleContainer={{width: gui.screenWidth - 40, marginTop: 8}}
            titleStyle={[style.textNoteTitle, {marginLeft: 0}]}
            data={medals}
            placeholder={'---'}
            value={this.state.medalName}
            setValue={selectedItem => {
              this.setState({
                medalName: selectedItem,
              });
            }}
            required={false}
          />
          <Text style={style.textPeople}>Please enter number of people</Text>
          <TextInput
            style={{width: gui.screenWidth - 172}}
            value={1}
            placeholder="Tìm kiếm(tên đại lý)"
            placeholderTextColor={'#D9D9D9'}
            keyExtractor={'numberic'}
            // onChangeText={text => this.searchData(text)}
            underlineColorAndroid={'transparent'}
          />
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => this.nextStep()}
              style={style.sendButton}>
              <Text style={[style.textNext, {color: 'white'}]}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (this.state.stepID == 2) {
      return (
        <View style={{marginTop: 20}}>
          <SelectDropdown
            title="Please select a medal"
            styleContainer={{width: gui.screenWidth - 40, marginTop: 8}}
            titleStyle={[style.textNoteTitle, {marginLeft: 0}]}
            data={medals}
            placeholder={'---'}
            value={this.state.medalName}
            setValue={selectedItem => {
              this.setState({
                medalName: selectedItem,
              });
            }}
            required={false}
          />
          <Text style={style.textPeople}>Please enter number of people</Text>
          <TextInput
            style={{width: gui.screenWidth - 172}}
            value={1}
            placeholder="Tìm kiếm(tên đại lý)"
            placeholderTextColor={'#D9D9D9'}
            keyExtractor={'numberic'}
            // onChangeText={text => this.searchData(text)}
            underlineColorAndroid={'transparent'}
          />
          <View style={[style.viewButton, {justifyContent: 'space-between'}]}>
            <TouchableOpacity
              onPress={() => this.PreviousStep()}
              style={style.PreviousButton}>
              <Text style={style.textNext}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.nextStep()}
              style={style.sendButton}>
              <Text style={[style.textNext, {color: 'white'}]}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (this.state.stepID == 3) {
      return (
        <View style={{marginTop: 20}}>
          <SelectDropdown
            title="Please select a medal"
            styleContainer={{width: gui.screenWidth - 40, marginTop: 8}}
            titleStyle={[style.textNoteTitle, {marginLeft: 0}]}
            data={medals}
            placeholder={'---'}
            value={this.state.medalName}
            setValue={selectedItem => {
              this.setState({
                medalName: selectedItem,
              });
            }}
            required={false}
          />
          <Text style={style.textPeople}>Please enter number of people</Text>
          <TextInput
            style={{width: gui.screenWidth - 172}}
            value={1}
            placeholder="Tìm kiếm(tên đại lý)"
            placeholderTextColor={'#D9D9D9'}
            keyExtractor={'numberic'}
            // onChangeText={text => this.searchData(text)}
            underlineColorAndroid={'transparent'}
          />
          <View style={[style.viewButton, {justifyContent: 'space-between'}]}>
            <TouchableOpacity
              onPress={() => this.PreviousStep()}
              style={style.PreviousButton}>
              <Text style={style.textNext}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.nextStep()}
              style={style.sendButton}>
              <Text style={[style.textNext, {color: 'white'}]}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{marginTop: 20}}>
          <SelectDropdown
            title="Please select a medal"
            styleContainer={{width: gui.screenWidth - 40, marginTop: 8}}
            titleStyle={[style.textNoteTitle, {marginLeft: 0}]}
            data={medals}
            placeholder={'---'}
            value={this.state.medalName}
            setValue={selectedItem => {
              this.setState({
                medalName: selectedItem,
              });
            }}
            required={false}
          />
          <Text style={style.textPeople}>Please enter number of people</Text>
          <TextInput
            style={{width: gui.screenWidth - 172}}
            value={1}
            placeholder="Tìm kiếm(tên đại lý)"
            placeholderTextColor={'#D9D9D9'}
            keyExtractor={'numberic'}
            // onChangeText={text => this.searchData(text)}
            underlineColorAndroid={'transparent'}
          />
          <View style={[style.viewButton, {justifyContent: 'space-between'}]}>
            <TouchableOpacity
              onPress={() => this.PreviousStep()}
              style={style.PreviousButton}>
              <Text style={style.textNext}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Alert.alert('Thanh cong')}
              style={style.sendButton}>
              <Text style={[style.textNext, {color: 'white'}]}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  render() {
    const listStep = [
      {id: 1, step: 'Step1'},
      {id: 2, step: 'Step2'},
      {id: 3, step: 'Step3'},
      {id: 4, step: 'Review'},
    ];
    return (
      // <SafeAreaView>
      <View style={style.container}>
        <FlatList
          data={listStep}
          keyExtractor={(item, index) => 'list' + index}
          renderItem={item => this.renderStep(item)}
          removeClippedSubviews={false}
          horizontal={true}
          enableEmptySections
          showsVerticleScrollIndicator={false}
          // contentContainerStyle={{ paddingBottom: 40 }}
        />
        {this.groupDishesByMeal(data.dishes)}
      </View>
      // </SafeAreaView>
    );
  }
  renderStep(data) {
    // console.log(data);
    const item = data.item;
    return (
      <View style={style.mainStep}>
        <View
          style={[
            style.boxStep,
            {backgroundColor: item.id == this.state.stepID ? 'blue' : '#fff'},
          ]}>
          <Text style={style.textStep}>{item.id}</Text>
        </View>
        <Text style={style.textStep}>{item.step}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    // width: gui.screenWidth,
    // backgroundColor: '#ffffff',
    marginTop: gui.marginTop + 10,
    paddingHorizontal: 24,
  },
  mainStep: {
    paddingTop: 10,
    width: (gui.screenWidth - 48) / 4,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginVertical: 10,
  },
  boxStep: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: 5,
    borderColor: '#C3C4C6',
    borderRadius: 4,
  },
  textNoteTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: '#505050',
    // marginTop: 12,
    marginLeft: 20,
  },
  textPeople: {
    fontSize: 16,
    marginVertical: 10,
  },
  viewButton: {flexDirection: 'row', justifyContent: 'flex-end', height: 50},
  sendButton: {
    backgroundColor: 'blue',
    width: gui.screenWidth / 2 - 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // marginHorizontal: 10,
  },
  PreviousButton: {
    backgroundColor: '#e2e9f4',
    width: gui.screenWidth / 2 - 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // marginHorizontal: 10,
  },
  textNext: {
    fontSize: 16,
  },
});

export default HomeScreen;
