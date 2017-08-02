// import { fromJS } from 'immutable'

var initState = {
  businessId: 0,
  basicVo: {
    appName: null,
    appId: null,
    bizCode: null,
    bizDesc: null,
    ucAppId: null
  },
  bpmnVo: {
    processDefinitionId: null,
    resouceData: null,
    resourceName: null,
  },
  placeholderVos: [],
  taskConfigVos: {
    usertask1: null,
    usertask2: null
  },
  fileList: []
}


export default function(state = initState, action){
  switch(action.type){
    default:
      return state;
  }
}