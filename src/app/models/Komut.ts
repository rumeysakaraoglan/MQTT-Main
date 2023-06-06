export class Komut {
  //getAllKomuts(): unknown;

  id: number | undefined;
  cihazid: number | undefined;
  modemid: number | undefined;
  komutkod: number | undefined;
  komutparams: string | undefined;
  baglantidenemesayisi: number | undefined;
  tarih: Date | undefined;
  datatime: Date | undefined;
  durum: number | undefined;



}

export class TaskParam {
  //getAllKomuts(): unknown;

  type: number | undefined;
  startbaud: number | undefined;
  maxbaud: number | undefined;
  databits: number | undefined;
  parity: string | undefined;
  stopbits: number | undefined;




}

export class IOTTask {
  id: number;
  type: string;
  periodical: boolean;
  instantstart: boolean;
  schedule: string;
  maxtry: number;
  priordelay: number;
  postdelay: number;
  note: string;
  tag: number;
}



export class IOTCommandRequest {
  rid: number;
  ts: string;
  tk: string;
  name: string;
  noack: boolean;
}
export class IOTChannelParam {
  type: string;
}
export interface IOTCommandParamAddTaskList {
  tasks: IOTTask[];
}

export class OTCommandRequestLogin extends IOTCommandRequest {
  constructor() {
    super();
    this.name = "LOGIN";
  }
}

export class IOTTaskParamDLMSReadPointList {
  mode: string;
  iedprefix: string;
  iedserial: string;
  channel: IOTChannelParam;
  namelist: string[];
  obislist: string[];
}
export class IOTCommandData {

}
export class IOTCommandResponse {
  rid: number;
  ts: string;
  tk: string;
  name: string;
  result: number;
  error: string;
}
export class IOTDeviceConfig {
  dev_type: string;
  dev_hwcode: string;
  fota_url: string;
  sntp_active: boolean;
  sntp_url: string;
  wifi_active: boolean;
  wifi_ssid: string;
  wifi_password: string;
  wifi_dhcp: boolean;
  wifi_ip: string;
  wifi_netmask: string;
  wifi_gateway: string;
  eth_active: boolean;
  eth_dhcp: boolean;
  eth_ip: string;
  eth_netmask: string;
  eth_gateway: string;
  gprs_active: boolean;
  gprs_apn: string;
  gprs_username: string;
  gprs_password: string;
  mqtt_active: boolean;
  mqtt_brokerurl: string;
  mqtt_qos: number;
  mqtt_retain: number;
  mqtt_subtopic_all: string;
  mqtt_subtopic_hostrequest: string;
  mqtt_subtopic_hostresponse: string;
  mqtt_pubtopic_noderequest: string;
  mqtt_pubtopic_noderesponse: string;
}

export class IOTDeviceInfo {
  dev_type: string;
  dev_serial: number;
  dev_version: string;
}

export class OTCommandParam {

}

export class IOTTaskDLMSReadPointList extends IOTTask {


  constructor() {
    super();
    this.type = "DLMSREADPOINTLIST";
  }
  param: IOTTaskParamDLMSReadPointList;
}

export class IOTCommandRequestAddTask extends IOTCommandRequest {

  constructor(){
    super();
    this.name="ADDTASK"
  }
}


export class IOTCommandRequestAddTaskList extends IOTCommandRequest {
  constructor(){
    super();
    this.name ="ADDTASKLIST"
  }
  param: IOTCommandParamAddTaskList;
}

export class IOTCommandParamExecDiagOper  {
  operation: string;
  intParam: number;
  strParam: string;
}


export class IOTCommandRequestExecDiagOper extends IOTCommandRequest{
  constructor(){
    super();
    this.name="EXECDIAGOPER";
  }
  param: IOTCommandParamExecDiagOper;
}
export class IOTCommandDataExecDiagOper extends IOTCommandData{
  intData: number;
  strData: string;
}


export class IOTCommandResponseExecDiagOper extends IOTCommandResponse{
  data: IOTCommandDataExecDiagOper;
}


export class IOTCommandParamExecTPChannelCmd {
  channel: IOTChannelParam;
  request: string;
  cmdtimeout: number;
  idletimeout: number;
  maxlength: number;
}



export class IOTCommandRequestExecTPChannelCmd extends IOTCommandRequest {
  constructor(){
    super();
    this.name="EXECTPCHANNELCMD";
  }

}

export class IOTCommandDataExecTPChannelCmd {
  response: string;
}

export class IOTCommandResponseExecTPChannelCmd extends IOTCommandRequest{
  data: IOTCommandDataExecTPChannelCmd;
  param: IOTCommandParamExecTPChannelCmd;
}


export class IOTCommandRequestGetConfig extends IOTCommandRequest {
  constructor(){
    super()
    this.name="GETCONFIG";
  }
}

export class IOTCommandDataGetConfig  {
  config: IOTDeviceConfig;
}

export class IOTCommandResponseGetConfig{
  data: IOTCommandDataGetConfig;
}


export class IOTCommandRequestGetDeviceInfo extends IOTCommandRequest {
  constructor(){
    super()
    this.name="GETDEVICEINFO";
  }
}

export class IOTCommandDataGetDeviceInfo  extends IOTCommandData{
  info: IOTDeviceInfo;
}

export class IOTCommandResponseGetDeviceInfo extends  IOTCommandResponse{
  data: IOTCommandDataGetDeviceInfo;
}

export class IOTKey {
  key: string;
}
export class IOTCommandParam {

}
export class IOTCommandParamGetInputList extends IOTCommandParam {
  inputs: IOTKey[];
}

export class IOTCommandRequestGetInputList extends IOTCommandRequest{
constructor(){
  super();
  this.name="GETINPUTLIST"
}
}

export class IOTCommandParamGetInputPulseCountList extends IOTCommandParam {
  inputs: IOTKey[];
}

export class IOTCommandRequestGetInputPulseCountList  extends IOTCommandRequest{
  constructor(){
    super();
    this.name="GETINPUTPULSECOUNTLIST"
  }

}

export class IOTCommandParamGetOutputList extends  IOTCommandParam{
  outputs: IOTKey[];
}

export class IOTCommandRequestGetOutputList extends IOTCommandRequest {
constructor(){
  super();
  this.name="GETOUTPUTLIST"
}
}

export class IOTCommandRequestGetTaskList extends IOTCommandRequest {
  constructor(){
    super();
    this.name="GETTASKLIST"
  }
}


export class IOTCommandRequestGetTime extends IOTCommandRequest {
  constructor(){
    super();
    this.name ="GETTIME"
  }

}

export interface IOTDataImage {
  guid: string;
  compression: string;
  data: string;
  type: string;
  deviceSerial: string;
  unit: string;
  value: string;
}


export class IOTCommandParamPublishDataImage extends IOTCommandParam
 {
  image: IOTDataImage;
  guid: string;
  indexDate: string;
}

export class OTCommandRequestPublishDataImage extends IOTCommandRequest {
  constructor(){
    super();
    this.name="PUBLISHDATAIMAGE"
  }

}

export class IOTCommandParamPublishDeviceInfo  extends IOTCommandParam{
  info: IOTDeviceInfo;
}

export class IOTCommandRequestPublishDeviceInfo  extends  IOTCommandRequest{

  constructor(){
    super();
    this.name="PUBLISHDEVICEINFO"
  }
}
export class IOTTaskResponse {
  rid: number;
  ts: string;
  id: number;
  type: string;
  result: number;
  error: string;
  tag: number;
  note: string;
}


export class IOTCommandParamPublishTaskResponse extends IOTCommandParam{
  response: IOTTaskResponse;
}

export class IOTCommandRequestPublishTaskResponse extends IOTCommandRequest{
  constructor(){
    super();
    this.name="PUBLISHTASKRESPONSE"
  }
}
 export class IOTCommandRequestRemoveAllTasks extends IOTCommandRequest{
  constructor(){
    super();
    this.name="REMOVEALLTASKS"
  }

}

export class IOTCommandParamRemoveTask  extends IOTCommandParam{
  id: number;
}

export class IOTCommandRequestRemoveTask extends IOTCommandRequest{
constructor(){
  super();
  this.name="REMOVETASK"
}
}

export class IOTCommandRequestRestartDevice  extends IOTCommandRequest{

}

export class IOTCommandResponseRestartDevice extends IOTCommandResponse{
constructor(){
  super();
  this.name="RESTARTDEVICE"
}
}

export class IOTCommandRequestRestartRFModule extends IOTCommandRequest {
  constructor(){
    super();
    this.name="RESTARTRFMODULE"
  }
}

export class IOTCommandResponseRestartRFModule extends IOTCommandResponse{

}

export class IOTCommandParamSetConfig extends IOTCommandParam{
  config: IOTDeviceConfig;
}

export class OTCommandRequestSetConfig extends IOTCommandRequest{
  constructor(){
    super();
    this.name="SETCONFIG"
  }
  param: IOTCommandParamSetConfig;
}

export class IOTCommandResponseSetConfig extends IOTCommandResponse {

}
export class IOTKeyValue<T> {
  key: string;
  value: T;
}


export class IOTCommandParamSetInputPulseCountList extends IOTCommandParam{
  inputs: IOTKeyValue<number>[];
}

export class IOTCommandRequestSetInputPulseCountList extends IOTCommandRequest{
  constructor(){
    super();
    this.name="SETINPUTPULSECOUNTLIST"
  }
}

export class IOTCommandParamSetOutputList extends IOTCommandParam{
  outputs: IOTKeyValue<boolean>[];
}

export class IOTCommandRequestSetOutputList extends IOTCommandRequest {
  constructor(){
    super();
    this.name="SETOUTPUTLIST"
  }
}

export class IOTCommandParamSetTime extends IOTCommandParam {
  time: string;
}

export class IOTCommandRequestSetTime extends IOTCommandRequest {
  constructor(){
    super();
    this.name="SETTIME"
  }
}
export class IOTCommandRequestStartMQTTTrace extends IOTCommandRequest {
  constructor(){
    super();
    this.name="STARTMQTTTRACE"
  }
}

export class IOTCommandRequestStopMQTTTrace extends IOTCommandRequest{

  constructor(){
    super();
    this.name="STOPMQTTTRACE"
  }
}

export class IOTCommandResponseStopMQTTTrace extends IOTCommandResponse{

}

export class DLMSLoadProfileItemValue {
  ts: string;
  v: string[];
}


export class DLMSMeterRegister {
  n: string;
  c: string;
  f: string;
  u: number;
  s: number;
}

export class DLMSMeterRegisterData extends DLMSMeterRegister {
  v: string;
}


export class DLMSMeterRegisterName  {
 // id: NT_DLMS_REGISTERID;
  name: string;
  obis: string;
}

export class DLMSReadPointListModeType {
  value: string;
}


export class IOTAuth {

}
export class EventArgs {

}

export class DeviceSessionKey extends EventArgs {
  device: string;
  sessionkey: string;
}
//IOTChannelParam niye hata veriyor Çünkü olusturdum
export class JsonConverter {
  canRead: boolean;
  canWrite: boolean;
}


// export class IOTChannelParam {
//   type: string;
// }

export class OTChannelParamJSONConverter extends JsonConverter {

}


export class IOTChannelParamRF extends IOTChannelParam{
  rfaddress: string;
  startbaud: number;
  maxbaud: number;
  databits: number;
  parity: string;
  stopbits: number;
  wakeuptimeout: number;
  idletimeout: number;
}


export class IOTChannelParamUART extends IOTChannelParam{
  startbaud: number;
  maxbaud: number;
  databits: number;
  parity: string;
  stopbits: number;
}

export class IOTChannelType {
  value: string;
}

export class IOTCommandType {
  value: string;
}

export class IOTDeviceInfoBLE extends IOTDeviceInfo{

}

export class IOTDeviceInfoBN2 extends IOTDeviceInfo{

}

export class IOTDeviceInfoBN3 extends IOTDeviceInfo{

}
export class IOTDeviceInfoNRTU extends IOTDeviceInfo{
  dev_time: string;
  fota_url: string;
  wifi_ssid: string;
  wifi_password: string;
  wifi_connected: boolean;
  wifi_ip: string;
  wifi_netmask: string;
  wifi_gateway: string;
  eth_connected: boolean;
  eth_ip: string;
  eth_netmask: string;
  eth_gateway: string;
  gprs_apn: string;
  gprs_module: string;
  gprs_operator: string;
  gprs_imei: string;
  gprs_imsi: string;
  gprs_csq: number;
  gprs_connected: boolean;
  gprs_ip: string;
  gprs_netmask: string;
  gprs_gateway: string;
  mqtt_brokerurl: string;
}

export class IOTDeviceType {
  value: string;
}

export class IOTDiagOperType {
  value: string;
}

export class IOTRequestResponsePair {
  req: string;
  res: string;
}

export class IOTTaskType {
  value: string;
}
export class IUInt32 {
  maxValue: number;
  minValue: number;
}

/// extends IUInt32
export enum NT_NVNCODE{
  EN_NVNCODE_UNDEFINED = 0x80000000,
  EN_NVNCODE_PARTIALSUCCESS = 0x00000100,
  EN_NVNCODE_SUCCESS = 0x00000000,
  EN_NVNCODE_ERROR = 0x80008000,
  EN_NVNCODE_OPERATION_CANCELED = 0x80008004,
  EN_NVNCODE_NOTIMPLEMENTED = 0x80008005,
  EN_NVNCODE_OPERATION_TIMEOUT = 0x80008006,
  EN_NVNCODE_AUTH_NOTOKEN = 0x80008010,
  EN_NVNCODE_AUTH_UNDEFINEDCHANNEL = 0x80008011,
  EN_NVNCODE_AUTH_UNDEFINEDLEVEL = 0x80008012,
  EN_NVNCODE_AUTH_INVALIDTOKEN = 0x80008013,
  EN_NVNCODE_CHANNEL_INIT = 0x80008101,
  EN_NVNCODE_CHANNEL_OPEN = 0x80008102,
  EN_NVNCODE_CHANNEL_CLOSE = 0x80008103,
  EN_NVNCODE_CHANNEL_UPDATESETTINGS = 0x80008104,
  EN_NVNCODE_CHANNEL_CLOSED = 0x80008105,
  EN_NVNCODE_CHANNEL_TRANSMIT = 0x80008107,
  EN_NVNCODE_CHANNEL_RECEIVETIMEOUT = 0x80008108,
  EN_NVNCODE_CHANNEL_RECEIVELENGTHEXCEEDED = 0x80008109,
  EN_NVNCODE_CHANNEL_NOTVERIFIED = 0x80008110,
  EN_NVNCODE_CHANNEL_VERIFICATIONERROR = 0x80008111,
  EN_NVNCODE_CHANNEL_ADDRESSREQIRED = 0x80008121,
  EN_NVNCODE_CHANNEL_INVALIDTYPE = 0x80008125,
  EN_NVNCODE_M2M_TRANSMITMESSAGE = 0x80008202,
  EN_NVNCODE_M2M_RECEIVEMESSAGE = 0x80008203,
  EN_NVNCODE_M2M_RECEIVEATRESPONSE_START = 0x80008204,
  EN_NVNCODE_M2M_RECEIVEATRESPONSE_MESSAGE = 0x80008206,
  EN_NVNCODE_M2M_RECEIVEATRESPONSE_EXCEEDED = 0x80008208,
  EN_NVNCODE_M2M_RECEIVEATRESPONSE_INVALIDDATA = 0x80008209,
  EN_NVNCODE_M2M_EXECUTEOPERATION = 0x80008300,
  EN_NVNCODE_M2M_OPERATIONHANDLERSELECTOR = 0x80008301,
  EN_NVNCODE_M2M_NOOPERATIONHANDLERAVAILABLE = 0x80008302,
  EN_NVNCODE_M2M_OPERATIONNOTSUPPORTED = 0x80008303,
  EN_NVNCODE_M2M_OPERATIONNOTSTABLE = 0x80008304,
  EN_NVNCODE_M2M_DATAREADOUTOPERATION = 0x80008305,
  EN_NVNCODE_M2M_PROGMODEREADOPERATION = 0x80008306,
  EN_NVNCODE_M2M_LOADPROFILEOPERATION = 0x80008307,
  EN_NVNCODE_M2M_RESPONSEPARSEERROR = 0x80008308,
  EN_NVNCODE_M2M_INVALIDOPERATIONFORHANDLER = 0x80008309,
  EN_NVNCODE_M2M_LOADPROFILEPARSEERROR = 0x8000830A,
  EN_NVNCODE_M2M_PROGMODESELECT = 0x8000830B,
  EN_NVNCODE_M2M_EXECUTEMETERREQUEST = 0x8000830C,
  EN_NVNCODE_M2M_PARSEMETERRESPONSE = 0x8000830D,
  EN_NVNCODE_M2M_READREGISTERLIST = 0x8000830E,
  EN_NVNCODE_M2M_NOOPERATIONHANDLERSELECTOR = 0x8000830F,
  EN_NVNCODE_M2M_LPPERIODLIMITSNOTAVAILABLE = 0x80008310,
  EN_NVNCODE_DLMS_SENDIDENTREQUESTMESSAGE = 0x80008400,
  EN_NVNCODE_DLMS_RECEIVEIDENTRESPONSEMESSAGE = 0x80008401,
  EN_NVNCODE_DLMS_RECEIVEIDENTTIMEOUT = 0x80008402,
  EN_NVNCODE_DLMS_INVALIDDEVICEIDENT = 0x80008403,
  EN_NVNCODE_DLMS_RECEIVEDATA_STARTEXCEPT = 0x80008404,
  EN_NVNCODE_DLMS_RECEIVEDATA_NO_STX = 0x80008405,
  EN_NVNCODE_DLMS_RECEIVEDATA_WRONGDATA = 0x80008406,
  EN_NVNCODE_DLMS_RECEIVEDATA_DATABLOCK = 0x80008407,
  EN_NVNCODE_DLMS_RECEIVEDATA_EXCEEDED = 0x80008408,
  EN_NVNCODE_DLMS_RECEIVEDATA_CR = 0x80008409,
  EN_NVNCODE_DLMS_RECEIVEDATA_LF = 0x8000840A,
  EN_NVNCODE_DLMS_RECEIVEDATA_ETX = 0x8000840B,
  EN_NVNCODE_DLMS_RECEIVEDATA_BCC = 0x8000840C,
  EN_NVNCODE_DLMS_RECEIVEDATA_WRONGBCC = 0x8000840D,
  EN_NVNCODE_DLMS_RECEIVEDATA_NAK = 0x8000840E,
  EN_NVNCODE_DLMS_METERDATETIMEPARSE = 0x80008410,
  EN_NVNCODE_DLMS_DIRECT_NOLOADLOADPROFILEOBJECTAVAILABLE = 0x80008500,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTLISTPARSE = 0x80008501,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTLISTBUILD = 0x80008502,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTDATAPARSE = 0x80008503,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTDATETIMEPARSE = 0x80008504,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTLISTNOTDEFINED = 0x80008505,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTPERIODPARSE = 0x80008506,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTINDEXPARSE = 0x80008508,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTINDEXVALUE1 = 0x80008509,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTINDEXVALUE2 = 0x8000850A,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTDATAVALUE1 = 0x8000850B,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTINVALIDLENGTH = 0x8000850C,
  EN_NVNCODE_DLMS_DIRECT_NOLOADPROFILEOBJECINRANGETAVAILABLE = 0x8000850D,
  EN_NVNCODE_DLMS_DIRECT_LOADPROFILEOBJECTCOUNTPARSE = 0x8000850F,
  EN_NVNCODE_DLMS_HDLC_NOLOADLOADPROFILEOBJECTAVAILABLE = 0x80008600,
  EN_NVNCODE_DLMS_HDLC_METERSERIALISREQUIRED = 0x80008602,
  EN_NVNCODE_DLMS_HDLC_INVALIDMETERSERIAL = 0x80008603,
  EN_NVNCODE_DLMS_HDLC_INIT_ERROR = 0x80008604,
  EN_NVNCODE_DLMS_HDLC_INIT_SNRMREQUEST = 0x80008606,
  EN_NVNCODE_DLMS_HDLC_INIT_SNRMRESPONSE = 0x80008607,
  EN_NVNCODE_DLMS_HDLC_INIT_PARSEUARESPONSE = 0x80008608,
  EN_NVNCODE_DLMS_HDLC_INIT_AARQREQUEST = 0x80008609,
  EN_NVNCODE_DLMS_HDLC_INIT_AARQRESPONSE = 0x8000860A,
  EN_NVNCODE_DLMS_HDLC_INIT_PARSEAARQREPLY = 0x8000860B,
  EN_NVNCODE_DEVICE_GETVERSION = 0x80008700,
  EN_NVNCODE_DEVICE_CHECKCONNECTION = 0x80008701,
  EN_NVNCODE_DEVICE_GETBATTERYLEVEL = 0x80008702,
  EN_NVNCODE_DEVICE_INVALIDDEVICEADDRESSTOCONNECT = 0x80008703,
  EN_NVNCODE_DEVICE_INVALIDDEVICE = 0x80008709,
  EN_NVNCODE_SECURITY_INVALIDENCRYPTPARAMETER = 0x80008708,
  EN_NVNCODE_SECURITY_ENCRYPTERROR = 0x80008709,
  EN_NVNCODE_SYS_MALLOC = 0x80009001,
  EN_NVNCODE_SYS_I2CWRONGRESPONSE = 0x80009002,
  EN_NVNCODE_SYS_I2CWRONGRESPONSEDATA = 0x80009003,
  EN_NVNCODE_SYS_I2CWRONGRESPONSECMD = 0x80009004,
  EN_NVNCODE_SYS_I2CWRONGRESPONSELENGTH = 0x80009005,
  EN_NVNCODE_SYS_I2CWRONGRESPONSECRC = 0x80009006,
  EN_NVNCODE_CMD_INVALIDPARAM = 0x8000A001,
  EN_NVNCODE_CMD_INVALIDOPERATIONTYPE = 0x8000A002,
  EN_NVNCODE_CMD_UPLOADFAILED = 0x8000A005,
  EN_NVNCODE_CMD_VALIDATIONFAILED = 0x8000A007,
  EN_NVNCODE_TASK_PROTOCOLTYPEREQUIRED = 0x8000B011,
  EN_NVNCODE_TASK_PROTOCOLTYPEINVALID = 0x8000B012,
  EN_NVNCODE_TASK_TASKTYPEREQUIRED = 0x8000B013,
  EN_NVNCODE_TASK_TASKTYPEINVALID = 0x8000B014,
  EN_NVNCODE_TASK_SCHEDULEREQUIRED = 0x8000B018,
  EN_NVNCODE_TASK_CRONTIMEINVALID = 0x8000B019,
  EN_NVNCODE_DB_ERROR = 0x8000C000
}


export class IOTTaskParamDLMSReadLoadProfile {
  iedprefix: string;
  iedserial: string;
  channel: IOTChannelParam;
  starttime: string;
  endtime: string;
  startoffsetday: number;
  namelist: string[];
  obislist: string[];
}

export class IOTTaskDLMSReadLoadProfile extends IOTTask {
  constructor(){
    super();
    this.type= "DLMSREADLOADPROFILE"

  }
  param: IOTTaskParamDLMSReadLoadProfile;
}

export class IOTTaskDataDLMSReadLoadProfile {
  ident: string;
  match: number;
  dtformat: string;
  iedprefix: string;
  iedserial: string;
  periodstarttime: string;
  periodendtime: string;
  registers: DLMSMeterRegisterData[];
  channels: DLMSMeterRegister[];
  values: DLMSLoadProfileItemValue[];
}

export class IOTTaskResponseDLMSReadLoadProfile {
  data: IOTTaskDataDLMSReadLoadProfile;
}

export class IOTTaskParamExecModbusRequestList {
  mode: string;
  iedprefix: string;
  iedserial: string;
  channel: IOTChannelParam;
  requestlist: string[];
}

export class IOTTaskExecModbusRequestList extends IOTTask {
  constructor(){
    super();
    this.type="EXECMODBUSREQUESTLIST"
  }
  param: IOTTaskParamExecModbusRequestList;
}

export class IOTTaskDataExecModbusRequestList {
  ident: string;
  match: number;
  dtformat: string;
  iedprefix: string;
  iedserial: string;
  results: IOTRequestResponsePair[];
}

export class IOTTaskResponseExecModbusRequestList {
  data: IOTTaskDataExecModbusRequestList;
}



export class IOTTaskSendTime extends IOTTask{
constructor(){
  super();
  this.type="SENDTIME"
}

  param: IOTTaskParamDLMSReadPointList;
}

export class IOTTaskDataSendTime {
  time: string;
}

export class IOTTaskResponseSendTime {

}
