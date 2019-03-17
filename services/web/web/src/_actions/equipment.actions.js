import { apiService } from '../_api';
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
        apiService.get(apiEndpoint)
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
        apiService.post(apiEndpoint, payload)
        .then((response)=>{
            //dispatch(createUserInfo());
            history.push('/equipment');
        })
    }
}

function getEquipmentById(id){
    return dispatch => {
        let apiEndpoint = 'equipment/'+ id;
        apiService.get(apiEndpoint)
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
        apiService.put(apiEndpoint, payload)
        .then((response)=>{
            //dispatch(updatedUserInfo());
            history.push('/equipment');
        })
    }
}

function deleteEquipmentById(id){
    return dispatch => {
        let apiEndpoint = 'equipment/'+ id;
        apiService.deleteDetail(apiEndpoint)
        .then((response)=>{
             dispatch(deleteEquipmentDetails());
             dispatch(equipmentAction.getEquipment());
        })
    };
}

export function changeEquipmentList(equipment){
    return{
        type: "FETECHED_ALL_EQUIPMENT",
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
        type: "EQUIPMENT_DETAIL",
        id: equipment._id,
        name: equipment.name,
        mobile: equipment.mobile,
        phone_number: equipment.phone_number,
        address: equipment.address
    }
}

export function deleteEquipmentDetails(){
    return{
        type: "DELETED_EQUIPMENT_DETAILS"
    }
}