// const stateLatLong = [[11.059821, 78.387451],
// [17.123184, 79.208824],
// [23.473324, 77.947998],
// [29.238478, 76.431885],
// [21.295132, 81.828232],
// [19.601194, 75.552979],
// [23.745127, 91.746826],
// [15.317277, 75.713890],
// [10.850516, 76.271080],
// [28.207609, 79.826660],
// [26.244156, 92.537842],
// [22.978624, 87.747803],
// [22.309425, 72.136230],
// [20.940920, 84.803467],
// [27.391277, 73.432617],
// [32.084206, 77.571167],
// [11.7401, 92.6586],
// [15.9129, 79.7400],
// [25.0961, 85.3131],
// [30.7333, 76.7794],
// [28.7041, 77.1025],
// [15.2993, 74.1240],
// [34.152588, 77.577049],
// [24.6637, 93.9063],
// [23.1645, 92.9376],
// [31.1471, 75.3412],
// [11.9416, 79.8083],
// [30.0668, 79.0193],
// [34.083656, 74.797371],
// [23, 85],
// [26, 91]]

// const statesListLat = ['Tamil Nadu',
//     'Telengana',

//     'Madhya Pradesh',
//     'Haryana',
//     'Chhattisgarh',

//     'Maharashtra',
//     'Tripura', 'Karnataka',
//     'Kerala', 'Uttar Pradesh',
//     'Assam', 'West Bengal',
//     'Gujarat', 'Odisha', 'Rajasthan',
//     'Himachal Pradesh',
//     'Andaman and Nicobar Islands',
//     'Andhra Pradesh', 'Bihar', 'Chandigarh',
//     'Delhi', 'Goa', 'Ladakh', 'Manipur',
//     'Mizoram', 'Punjab', 'Puducherry', 'Uttarakhand',
//     'Jammu and Kashmir', 'Jharkhand', 'Arunachal Pradesh']
function getMap (){
const map = new Map();

map.set('Tamil Nadu',[11.059821, 78.387451]);
map.set('Telengana',[18,79]);
map.set('Madhya Pradesh',[22,78]);
map.set('Haryana',[29,76]);
map.set('Chhattisgarh',[21,89]);
map.set('Maharashtra',[19,75]);
map.set('Tripura',[23,91]);
map.set('Karnataka',[15,75]);
map.set('Kerala',[10,76]);
map.set('Uttar Pradesh',[26,80]);
map.set('Assam',[26,92]);
map.set('Gujarat',[22,71]);
map.set('Odisha',[20,85]);
map.set('Rajasthan',[27,74]);
map.set('Himachal Pradesh',[31,77]);
map.set('Andaman and Nicobar Islands',[11,92]);
map.set('Andhra Pradesh',[15,79]);
map.set('Bihar',[25,85]);
map.set('Chandigarh',[30,76]);
map.set('Delhi',[28,77]);
map.set('Goa',[15,74]);
map.set('Ladakh',[34,77]);
map.set('Manipur',[24,93]);
map.set('Mizoram',[23,92]);
map.set('Punjab',[31,75]);
// map.set('Puducherry',[11,79]);
map.set('Uttarakhand',[30,79]);
map.set('Jammu and Kashmir',[33,76]);
map.set('Jharkhand',[23,85]);
map.set('Arunachal Pradesh',[28,94]);
map.set('Dadra and Nagar Haveli and Daman and Diu',[20,73])
map.set('Meghalaya',[25,91])
map.set('Mizoram',[23,92])
map.set('Nagaland',[26,94])
map.set('Sikkim',[27,88])
map.set('Telangana',[18,79])
map.set('West Bengal',[22,87])

return map;
}

export default getMap;