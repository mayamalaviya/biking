const equipmentReducer = (state = [], action) => {

}
export default equipmentReducer;

import { userService } from '../_services/';
import { history } from '../_helpers';


export const equipmentAction = {
    getEquipment,
    getEquipmentById,
    onChangeProps,
    editEquipmentInfo,
    createEquipment,
    deleteEquipmentById
};

function getEquipment(){
    return dispatch => {
        let apiEndpoint = 'equipment';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeEquipmentList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
   };
}

function createEquipment(payload){
    return dispatch => {
        let apiEndpoint = 'equipment/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/equipment');
        })
    }
}

function getEquipmentById(id){
    return dispatch => {
        let apiEndpoint = 'equipment/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editEquipmentDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editEquipmentInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'equipment/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/equipment');
        })
    }
}

function deleteEquipmentById(id){
    return dispatch => {
        let apiEndpoint = 'equipment/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
             dispatch(deleteEquipmentDetails());
             dispatch(equipmentAction.getEquipment());
        })
    };
}

export function changeEquipmentList(equipment){
    return{
        type: "FETECHED_ALL_VENDOR",
        equipment: equipment
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editEquipmentDetails(equipment){
    return{
        type: "VENDOR_DETAIL",
        id: equipment._id,
        name: equipment.name,
        mobile: equipment.mobile,
        phone_number: equipment.phone_number,
        address: equipment.address
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteEquipmentDetails(){
    return{
        type: "DELETED_VENDOR_DETAILS"
    }
}