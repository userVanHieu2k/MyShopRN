import React, {Component} from 'react';
import {
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
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
      people: 0,
      restaurentName: '',
      newDist: {
        dist: '',
        number: 1,
      },
      listDist: [
        {
          dist: '',
          number: 1,
        },
      ],
      RnewDist: {
        dist: '',
        number: 1,
      },
    };
  }

  componentDidMount() {}

  nextStep = () => {
    let {stepID, listDist, people} = this.state;
    if (stepID == 1 && this.state.medalName == '') {
      Alert.alert('Vui lòng chọn bữa ăn');
      return;
    }
    if (stepID == 1 && parseInt(people) > 10) {
      Alert.alert('Nhập tối đa 10 người');
      return;
    }
    if (stepID == 1 && people < 1) {
      Alert.alert('Vui lòng chọn số lượng người ăn');
      return;
    } else if (stepID == 2 && this.state.restaurentName == '') {
      Alert.alert('Vui lòng chọn nhà hàng');
      return;
    } else if (stepID == 3) {
      let sum = 0;
      for (let i = 0; i < listDist.length; i++) {
        sum = sum + parseInt(listDist[i].number);
        if (listDist[i].dist == '') {
          Alert.alert('Vui lòng chọn nhà hàng');
          return;
        }
      }
      if (sum < people) {
        console.log(people, sum);
        Alert.alert(`Chưa đủ số khẩu phần ăn(Tổng ${people} người)`);
        return;
      } else this.setState({stepID: stepID + 1});
    } else this.setState({stepID: stepID + 1});
  };
  PreviousStep = () => {
    this.setState({stepID: this.state.stepID - 1});
  };

  groupDishesByMeal = dishes => {
    let {stepID, medalName, listDist, restaurentName, RnewDist, people} =
      this.state;
    const groupedDishes = {};
    const groupRestqaurent = {};
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
    if (stepID == 1) {
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
                restaurentName: '',
              });
            }}
            required={false}
          />
          <Text style={style.textPeople}>
            Please enter number of people(Max 10)
          </Text>
          <View>
            <TextInput
              style={style.input}
              onChangeText={text => {
                this.setState({people: text});
              }}
              value={people}
              placeholder="Chọn số lượng"
              keyboardType="numeric"
            />
            <View style={{position: 'absolute', right: 0}}>
              <TouchableOpacity
                onPress={() => {
                  const num = (parseInt(people) + 1).toString();
                  this.setState({
                    people: num,
                  });
                }}>
                <Image
                  source={require('../assets/image/upInv.png')}
                  style={[style.dropIcon, {top: 10}]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const num = (parseInt(people) - 1).toString();
                  this.setState({
                    people: num,
                  });
                }}>
                <Image
                  source={require('../assets/image/icon_drop.png')}
                  style={style.dropIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={style.viewButton}>
              <TouchableOpacity
                onPress={() => this.nextStep()}
                style={style.sendButton}>
                <Text style={[style.textNext, {color: 'white'}]}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (stepID == 2) {
      const RlistDist = [
        {
          dist: '',
          number: 1,
        },
      ];
      const restaurent = [];

      groupedDishes[medalName].forEach(dish => {
        const nameRes = dish.restaurant;
        if (!groupRestqaurent[nameRes]) {
          groupRestqaurent[nameRes] = [];
          restaurent.push(nameRes);
        }
        groupRestqaurent[nameRes].push(dish);
      });
      // console.log(groupRestqaurent);
      return (
        <View style={{marginTop: 20}}>
          <SelectDropdown
            title="Please select a restaurent"
            styleContainer={{width: gui.screenWidth - 40, marginTop: 8}}
            titleStyle={[style.textNoteTitle, {marginLeft: 0}]}
            data={restaurent}
            placeholder={'---'}
            value={this.state.restaurentName}
            setValue={selectedItem => {
              this.setState({
                restaurentName: selectedItem,
                listDist: RlistDist,
              });
            }}
            required={false}
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
    } else if (stepID == 3) {
      const food = [];
      groupedDishes[medalName].forEach(dish => {
        const nameRes = dish.restaurant;
        if (!groupRestqaurent[nameRes]) {
          groupRestqaurent[nameRes] = [];
        }
        groupRestqaurent[nameRes].push(dish);
      });
      const group = groupRestqaurent[restaurentName];
      group.forEach(dish => {
        const nameFood = dish.name;
        food.push(nameFood);
      });
      // console.log(food);
      return (
        <ScrollView>
          {listDist.length > 0
            ? listDist.map((item, index) => (
                <View style={{marginTop: 20}}>
                  <SelectDropdown
                    title="Please select a dish"
                    styleContainer={{
                      width: gui.screenWidth - 40,
                      marginTop: 8,
                    }}
                    titleStyle={[style.textNoteTitle, {marginLeft: 0}]}
                    data={food}
                    placeholder={'---'}
                    value={item.dist}
                    setValue={selectedItem => {
                      let check = false;
                      listDist.forEach(item => {
                        if (item.dist == selectedItem) {
                          check = true;
                        }
                      });
                      if (check) {
                        Alert.alert('Món ăn này đã được chọn');
                      } else {
                        listDist[index].dist = selectedItem;
                        this.setState({listDist: listDist});
                      }
                    }}
                    required={false}
                  />
                  <Text style={style.textPeople}>
                    Please enter no of servings
                  </Text>
                  <View>
                    <TextInput
                      style={style.input}
                      onChangeText={value => {
                        listDist[index].number = value;
                        this.setState({listDist: listDist});
                      }}
                      defaultValue="1"
                      placeholder="Chọn số lượng"
                      value={item.number}
                      keyboardType="numeric"
                    />
                    <View style={{position: 'absolute', right: 0}}>
                      <TouchableOpacity
                        onPress={() => {
                          const num = (parseInt(item.number) + 1).toString();
                          listDist[index].number = num;
                          this.setState({listDist: listDist});
                        }}>
                        <Image
                          source={require('../assets/image/upInv.png')}
                          style={[style.dropIcon, {top: 10}]}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          const num = (parseInt(item.number) - 1).toString();
                          listDist[index].number = num;
                          this.setState({listDist: listDist});
                        }}>
                        <Image
                          source={require('../assets/image/icon_drop.png')}
                          style={style.dropIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {listDist.length == index + 1 ? (
                    <TouchableOpacity
                      style={style.boxAdd}
                      onPress={() => {
                        listDist.push(this.state.newDist);
                        this.setState({listDist: listDist, newDist: RnewDist});
                      }}>
                      <Image
                        source={require('../assets/image/plus_main.png')}
                        style={style.imageAdd}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))
            : null}
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
        </ScrollView>
      );
    } else {
      return (
        <View style={{marginTop: 20}}>
          <View style={style.tableBill}>
            <View style={style.columBill}>
              <Text>Medal</Text>
              <Text style={[style.textPeople, {marginVertical: 0}]}>
                {this.state.medalName}
              </Text>
            </View>
            <View style={style.columBill}>
              <Text>People</Text>
              <Text style={[style.textPeople, {marginVertical: 0}]}>
                {this.state.people}
              </Text>
            </View>
            <View style={style.columBill}>
              <Text>Restaurent</Text>
              <Text style={[style.textPeople, {marginVertical: 0}]}>
                {this.state.restaurentName}
              </Text>
            </View>
            <View style={style.columBill}>
              <Text>Dishes</Text>
              <View>
                <FlatList
                  data={this.state.listDist}
                  keyExtractor={(item, index) => 'list' + index}
                  renderItem={item => this.renderlistDist(item)}
                  removeClippedSubviews={false}
                  enableEmptySections
                  showsVerticleScrollIndicator={false}
                  // contentContainerStyle={{ paddingBottom: 40 }}
                />
              </View>
            </View>
          </View>
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
  renderlistDist(data) {
    console.log(data);
    const item = data.item;
    return (
      <View>
        <Text style={style.textNext}>
          {item.dist} - {item.number}
        </Text>
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
    marginBottom: 80,
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
    fontWeight: '500',
    color: '#505050',
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 50,
    width: gui.screenWidth - 40,
    marginTop: 20,
  },
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
  input: {
    height: 50,
    width: gui.screenWidth - 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  boxAdd: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 10,
  },
  imageAdd: {
    width: 16,
    height: 16,
  },
  tableBill: {
    width: gui.screenWidth - 40,
    backgroundColor: '#C6D8F3',
    padding: 10,
    borderRadius: 8,
  },
  columBill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dropIcon: {
    position: 'absolute',
    height: 10,
    width: 18,
    top: 30,
    right: 10,
  },
});

export default HomeScreen;
