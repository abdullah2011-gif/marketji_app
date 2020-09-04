import React, { Component, Fragment } from 'react';
import { View,
    Modal, SafeAreaView, StyleSheet, TouchableOpacity,
    ActivityIndicator, Image, FlatList, ImageBackground, LayoutAnimation, Alert } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import StepIndicator from 'react-native-step-indicator';
import color from '../../utills/Colors';
import Text from '../../components/Text/Text.component';

// import {
//   all_trips,
//   current_trip,
//   previous_trip
// } from '../../Redux/Actions/Trips'
// import Apimanager from '../Apimanager';
import {connect} from 'react-redux';
import config from '../../../config'
// import {
//     closets,
//     membership,
//     selected_closet,
//     selected_membership,
//     user,
//     all_categories,
//     selected_categories,
//     all_items,
//     selected_item,
//   } from '../../Redux/Actions/Categories';

const labels = ["طلب", "تمت الموافقة على الطلب", "تحت المعالجة", "منجز"];
const customStyles = {
    stepIndicatorSize: 22,
    currentStepIndicatorSize: 22,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#F7B519',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#F7B519',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#F7B519',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#F7B519',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: totalSize(1.45),
    currentStepIndicatorLabelFontSize: totalSize(1.45),
    stepIndicatorLabelCurrentColor: '#F7B519',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: totalSize(1.65),
    currentStepLabelColor: '#F7B519'
}

class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:{},
            confirmation:false,
            isLoading:false,
            currentPosition: 4,
            modalVisible: false,
            selectedIndex: 0,
            selectedTab: 0,
            expanded: false,
            listData: this.props.pendingOrders.map(i=>({...i,expanded:false}))
        };
    }
    setTab = tab => {
        this.setState({ selectedTab: tab });
    };
    onPageChange(position) {
        this.setState({ currentPosition: position });
    }
    setChecked = (key) => {
        this.setState({listData:this.state.listData.map(item=>{
            // console.log(item._id+' '+key)
            if(item._id==key)
            return{
                ...item,
                expanded:!item.expanded
            }
            else
            return{
                ...item,
                expanded:false
            }
        })})
    }
    handleIndexChange=(item)=>{
      this.setState({selectedIndex:item})
    }
    _currentTripslist = ({ item }) => {
        console.log(item)
        return (
            <View
                style={{
                    backgroundColor: '#ffffff',
                    marginTop: height(2),
                }}>
                    {/* {console.log(item)} */}
                <View
                    style={{
                        backgroundColor: '#ffffff',
                        //marginTop: height(2),
                        width: width(90),
                        alignSelf: 'center',
                    }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.setChecked(item._id) }}>
                        <View style={{ width: width(30) }}>
                            <ImageBackground
                                source={{ uri: `${config.url}public/images/${item.products[0]&&item.products[0].product.image}`  }}
                                imageStyle={{ borderRadius: 15 }}
                                style={{
                                    height: height(13),
                                    width: width(26),
                                }}></ImageBackground></View>
                        <View style={{ flexDirection: 'column', width: width(45), justifyContent: 'center' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: width(65),
                                    justifyContent: 'space-between',
                                }}>
                                <Text
                                    style={{
                                        fontSize: totalSize(2.25),
                                        //fontWeight: 'bold',
                                        color: '#F7B519',
                                    }}>
                                 {item.label} 
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: totalSize(1.75),
                                    color: '#000000',
                                    marginTop: height(.5)
                                }}>
                                Products:  {item.products.length}
                            </Text>
                            <Text
                                style={{
                                    fontSize: totalSize(1.75),
                                    color: '#000000',
                                    marginTop: height(.5)
                                }}>
                                Status:  Pending
                            </Text>
                            <Text
                                style={{
                                    fontSize: totalSize(1.75),
                                    color: '#000000',
                                    marginTop: height(.5)
                                }}>
                                Payment method:  {item.paymentMethod}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: width(10),
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: item.expanded ? null : 0, overflow: 'hidden', width: width(85), alignSelf: 'center' }}>

                        <View style={{ height: height(30), alignSelf: 'center' }}>
                            <StepIndicator
                                onPress={()=>{
                                    this.setState({item:item,confirmation:true})
                                }}
                                direction='vertical'
                                stepCount={4}
                                currentPosition={item.status=='dataentry'?1:2}
                                customStyles={customStyles}
                                // currentPosition={!item.status?1:item.cus_return_order?4:3}
                                labels={labels}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomWidth: 0.75,
                            borderBottomColor: '#959595',
                            marginTop: height(2),
                        }}></View>
                </View>


            </View>
        )
    }
    _previousTripslist = ({ item }) => {
        return (
            <View
                style={{
                    backgroundColor: '#ffffff',
                    marginTop: height(2),
                }}>
                <View
                    style={{
                        backgroundColor: '#ffffff',
                        //marginTop: height(2),
                        width: width(90),
                        alignSelf: 'center',
                    }}>
                    <View style={{ flexDirection: 'row' }}>

                        <ImageBackground
                            source={{ uri: `${config.url}public/images/${item.products[0]&&item.products[0].product.image}`  }}
                            imageStyle={{ borderRadius: 15 }}
                            style={{
                                height: height(13),
                                width: width(26),
                            }}></ImageBackground>
                        <View style={{ flexDirection: 'column', marginLeft: width(5), justifyContent: 'center' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: width(65),
                                    justifyContent: 'space-between',
                                }}>
                                <Text
                                    style={{
                                        fontSize: totalSize(2.25),
                                        //fontWeight: 'bold',
                                        color: '#F7B519',
                                    }}>
                                 {item.label}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: totalSize(1.75),
                                    color: '#000000',
                                    marginTop: height(.5)
                                }}>
                                Items:  {item.products.length} 
                            </Text>
                            <Text
                                style={{
                                    fontSize: totalSize(1.75),
                                    color: '#000000',
                                    marginTop: height(.5)
                                }}>
                                Items:  {item.status} 
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 0.75,
                            borderBottomColor: '#959595',
                            marginTop: height(2),
                        }}></View>
                </View>


            </View>
        )
    }
    render() {
        return (
            <Fragment>
                <SafeAreaView
                    style={(styles.container, { backgroundColor: '#FFFFFF' })}
                />
                <SafeAreaView style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <View //Header//
                            style={{
                                height: height(10),
                                backgroundColor: color.orange,
                                justifyContent: 'center',
                            }}>
                            <View
                                style={{
                                    width: width(90),
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                activeOpacity={1}
                                    // onPress={() => this.props.navigation.goBack()}
                                    style={{ width: width(10) }}>
                                    {/* <Image
                                        source={require('../../Assets/back.png')}
                                        style={{ width: 40, height: 40, tintColor: '#FFFFFF' }}
                                    /> */}
                                </TouchableOpacity>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        width: width(70),
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: totalSize(2.50), color: '#FFFFFF' }}>
                                        Track Your Order
                  </Text>
                                </View>
                                <View style={{ width: width(10) }}>
                                </View>
                            </View>
                        </View>
                        <SegmentedControlTab
                            values={[
                                'الطلبات الحالية',
                                'الطلبات السابقة',
                            ]}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                            tabStyle={{
                                borderRadius: 30,
                                height: height(6),
                                width: width(30),
                                backgroundColor: 'transparent',
                                borderColor: 'transparent',
                            }}
                            tabsContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: height(2)
                            }}
                            tabTextStyle={{ color: '#959595', fontSize: totalSize(2) }}
                            activeTabStyle={{ backgroundColor: color.orange }}
                            firstTabStyle={{
                                marginLeft: width(3),
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                            }}
                            lastTabStyle={{
                                marginRight: width(3),
                                borderTopRightRadius: 30,
                                borderBottomRightRadius: 30,
                            }}
                        />
                        {this.state.selectedIndex === 0 && (
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        height: height(70),
                                        alignSelf: 'center',
                                        marginTop: height(1),
                                    }}>
                                        {/* {console.log(this.props.currenttrip+"haha")} */}
                                 {this.state.listData&&this.state.listData.length>0?<FlatList
                                        data={this.state.listData}
                                        contentContainerStyle={{ paddingBottom: height(5) }}
                                        renderItem={this._currentTripslist}
                                        showsVerticalScrollIndicator={false}
                                    />:<Text
                                    style={{
                                        fontSize: totalSize(1.75),
                                        color: '#000000',
                                        marginTop: height(.5)
                                    }}>
                                   No current orders
                                </Text>}
                                </View>
                            </View>
                        )}
                        {this.state.selectedIndex === 1 && (
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        height: height(70),
                                        alignSelf: 'center',
                                        marginTop: height(1),
                                    }}>
                                   {this.props.completedOrders&&this.props.completedOrders.length>0? <FlatList
                                        data={this.props.completedOrders}
                                        contentContainerStyle={{ paddingBottom: height(5) }}
                                        renderItem={this._previousTripslist}
                                        showsVerticalScrollIndicator={false}
                                    />: <Text
                                    style={{
                                        fontSize: totalSize(1.75),
                                        color: '#000000',
                                        marginTop: height(.5)
                                    }}>
                                   No completed orders
                                </Text>}
                                </View>
                            </View>
                        )}
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

const mapStateToProps = state => {
    return {
        pendingOrders:state.App.pendingOrders,
        completedOrders:state.App.completedOrders,
    };
  };
  const actions = {
  };
  export default connect(
    mapStateToProps,
    actions,
  )(Trips);
  







